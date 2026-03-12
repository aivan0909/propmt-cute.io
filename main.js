import { templates } from './templates.js';

// --- Data Management ---
let customTemplates = [];
try {
    customTemplates = JSON.parse(localStorage.getItem('custom_templates') || '[]');
} catch (e) {
    console.error("Failed to load custom templates", e);
    customTemplates = [];
}
let allTemplates = [...templates, ...customTemplates];

// --- DOM Elements ---
const categoryList = document.getElementById('category-list');
const characterGrid = document.getElementById('character-grid');
const variationList = document.getElementById('variation-list');
const promptOutput = document.getElementById('prompt-output');
const currentTitle = document.getElementById('current-title');
const currentCategoryLabel = document.getElementById('current-category');
const copyBtn = document.getElementById('copy-btn');
const randomBtn = document.getElementById('random-btn');
const editBtn = document.getElementById('edit-template-btn');
const addBtn = document.getElementById('add-template-btn');
const saveBtn = document.getElementById('save-template-btn');
const closeModalBtn = document.getElementById('close-modal');
const editorModal = document.getElementById('editor-modal');
const toast = document.getElementById('copy-toast');

// Form fields
const editTitleInput = document.getElementById('edit-title');
const editCategoryInput = document.getElementById('edit-category');
const editInitialInput = document.getElementById('edit-initial');
const editFinalInput = document.getElementById('edit-final');
const editTimelineInput = document.getElementById('edit-timeline');
const editConfigInput = document.getElementById('edit-config');
const editExtrasInput = document.getElementById('edit-extras');

// Translation Elements
const translateInput = document.getElementById('translate-input');
const translateOutput = document.getElementById('translate-output');
const startTranslateBtn = document.getElementById('start-translate-btn');
const copyEnBtn = document.getElementById('copy-en-btn');
const clearTranslateBtn = document.getElementById('clear-translate-btn');

// --- State ---
let activeCategory = '全部';
let activeGroupId = null;
let activeVariationId = null;
let isEditing = false;
let editingId = null;

// --- Initialize ---
function init() {
    renderCategories();
    renderCharacters();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    if (addBtn) addBtn.onclick = handleAddClick;
    if (editBtn) editBtn.onclick = handleEditClick;
    if (saveBtn) saveBtn.onclick = handleSaveClick;
    if (closeModalBtn) closeModalBtn.onclick = closeModal;
    
    if (startTranslateBtn) startTranslateBtn.onclick = handleTranslate;
    if (copyEnBtn) copyEnBtn.onclick = handleCopyEn;
    if (clearTranslateBtn) {
        clearTranslateBtn.onclick = () => {
            translateInput.value = '';
            translateOutput.value = '';
        };
    }
}

// --- Functions ---

function renderCategories() {
    const categories = ['全部', ...new Set(allTemplates.map(t => t.category)), '工具箱'];
    categoryList.innerHTML = categories.map(cat => `
        <li class="category-item ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
            <i data-lucide="${getCategoryIcon(cat)}"></i> ${cat}
        </li>
    `).join('');
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            activeCategory = item.dataset.cat;
            
            const mainContentArea = document.getElementById('main-content-area');
            const characterGrid = document.getElementById('character-grid');
            const toolboxArea = document.getElementById('toolbox-area');
            const topBarTitle = document.querySelector('.top-bar h2');

            if (activeCategory === '工具箱') {
                if (mainContentArea) mainContentArea.style.display = 'none';
                if (characterGrid) characterGrid.style.display = 'none';
                if (toolboxArea) toolboxArea.style.display = 'block';
                if (topBarTitle) topBarTitle.textContent = '實用工具箱';
            } else {
                if (mainContentArea) mainContentArea.style.display = 'block';
                if (characterGrid) characterGrid.style.display = 'grid';
                if (toolboxArea) toolboxArea.style.display = 'none';
                if (topBarTitle) topBarTitle.textContent = '選擇角色系統';
                renderCharacters();
            }
            
            renderCategories();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });
    });
}

function getCategoryIcon(cat) {
    const icons = { 
        '全部': 'grid', 
        '寶可夢': 'shrub', 
        '鬼滅之刃': 'flame', 
        '金剛戰士': 'shield-check', 
        '忍者龜': 'shield', 
        '貝貝賓': 'baby', 
        'AI 山海經': 'skull',
        '工具箱': 'wrench',
        '動物': 'dog'
    };
    return icons[cat] || 'star';
}

function renderCharacters() {
    const filtered = activeCategory === '全部' 
        ? allTemplates 
        : allTemplates.filter(t => t.category === activeCategory);
    
    characterGrid.innerHTML = filtered.map(t => `
        <div class="character-card ${t.id === activeGroupId ? 'active' : ''}" data-id="${t.id}">
            <i data-lucide="${getCharacterIcon(t)}"></i>
            <span class="char-name">${t.title}</span>
        </div>
    `).join('');
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            selectGroup(card.dataset.id);
        });
    });
}

function selectGroup(groupId) {
    activeGroupId = groupId;
    const group = allTemplates.find(t => t.id === groupId);
    if (!group) return;
    
    renderCharacters();
    
    if (group.variations && group.variations.length > 0) {
        renderVariations(group.variations);
        selectVariation(group.variations[0].id);
    } else {
        variationList.innerHTML = '';
        activeVariationId = null;
        displayPrompt(group);
    }
}

function renderVariations(variations) {
    variationList.innerHTML = variations.map(v => `
        <div class="v-chip ${v.id === activeVariationId ? 'active' : ''}" data-id="${v.id}">
             ${v.name}
        </div>
    `).join('');
    
    document.querySelectorAll('.v-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            selectVariation(chip.dataset.id);
        });
    });
}

function selectVariation(variationId) {
    activeVariationId = variationId;
    const group = allTemplates.find(t => t.id === activeGroupId);
    const variation = group.variations.find(v => v.id === variationId);
    
    document.querySelectorAll('.v-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.id === variationId);
    });
    
    displayPrompt(variation, group.title);
}

function displayPrompt(data, groupTitle = '') {
    currentTitle.textContent = groupTitle || data.title;
    currentCategoryLabel.textContent = data.category || (allTemplates.find(t => t.id === activeGroupId)?.category);
    
    const config = data.config || {};
    let html = `<strong style="color: var(--primary)">[設定]</strong> ${config.duration || '10s'} | ${config.shotType || '一鏡'} | ${config.scene || '預設'}\n\n`;
    html += `<strong style="color: var(--primary)">[初始]</strong> ${data.initialLook || '描述內容'}\n\n`;
    html += `<strong style="color: var(--primary)">[進化]</strong> ${data.finalGear ? data.finalGear.join('、') : '無'}\n\n`;
    
    if (data.timeline) {
        data.timeline.forEach(item => {
            html += `<span style="color: var(--accent); font-weight: 800;">${item.time}</span>\n${item.content}\n\n`;
        });
    }

    if (data.extras && data.extras.length > 0) {
        html += `<strong style="color: var(--text-dim)">[影像細節]</strong>\n${data.extras.join('\n')}`;
    }
    
    promptOutput.innerHTML = html.replace(/\n/g, '<br>');
    if (window.innerWidth < 768) promptOutput.scrollIntoView({ behavior: 'smooth' });
}

// --- Modal Logic ---
function openModal() {
    if (editorModal) {
        editorModal.style.display = 'flex';
        editorModal.style.visibility = 'visible';
        editorModal.style.opacity = '1';
    }
}

function closeModal() {
    if (editorModal) {
        editorModal.style.display = 'none';
        editorModal.style.visibility = 'hidden';
    }
}

function handleAddClick() {
    isEditing = false;
    editingId = null;
    clearForm();
    openModal();
}

function handleEditClick() {
    const group = allTemplates.find(t => t.id === activeGroupId);
    if (!group) return alert('請先點擊下方的人物卡片，再進行編輯');
    isEditing = true;
    editingId = group.id;
    const dataToEdit = (group.variations && activeVariationId) ? group.variations.find(v => v.id === activeVariationId) : group;
    editTitleInput.value = group.title;
    editCategoryInput.value = group.category || '未分類';
    editInitialInput.value = dataToEdit.initialLook || '';
    editFinalInput.value = dataToEdit.finalGear ? dataToEdit.finalGear.join('\n') : '';
    editTimelineInput.value = dataToEdit.timeline ? dataToEdit.timeline.map(ti => `${ti.time} | ${ti.content}`).join('\n') : '';
    const config = dataToEdit.config || {};
    editConfigInput.value = `${config.duration || '10秒'} | ${config.shotType || '動態追隨'} | ${config.scene || '自定義場景'}`;
    editExtrasInput.value = dataToEdit.extras ? dataToEdit.extras.join(', ') : '';
    openModal();
}

function handleSaveClick() {
    const id = isEditing ? editingId : `custom-${Date.now()}`;
    const configRaw = editConfigInput.value.split('|');
    const config = {
        duration: (configRaw[0] || '10秒').trim(),
        shotType: (configRaw[1] || '動態').trim(),
        scene: (configRaw[2] || '自定義場景').trim()
    };
    const extras = editExtrasInput.value.split(/[,\n]/).map(s => s.trim()).filter(s => s);
    const newTemplate = {
        category: editCategoryInput.value || '未分類',
        id: id,
        title: editTitleInput.value || '新人物',
        config,
        initialLook: editInitialInput.value,
        finalGear: editFinalInput.value.split('\n').filter(l => l.trim()),
        timeline: editTimelineInput.value.split('\n').filter(l => l.includes('|')).map(line => {
            const parts = line.split('|');
            return { time: parts[0].trim(), content: parts[1].trim() };
        }),
        extras: extras.length > 0 ? extras : ['電影級運鏡', '8K超高解析度', '無浮水印']
    };
    if (isEditing) {
        const index = customTemplates.findIndex(t => t.id === id);
        if (index > -1) { customTemplates[index] = newTemplate; } else {
            newTemplate.id = `custom-copy-${Date.now()}`;
            customTemplates.push(newTemplate);
        }
    } else { customTemplates.push(newTemplate); }
    localStorage.setItem('custom_templates', JSON.stringify(customTemplates));
    allTemplates = [...templates, ...customTemplates];
    renderCategories();
    renderCharacters();
    closeModal();
    selectGroup(newTemplate.id);
}

function clearForm() {
    editTitleInput.value = '';
    editCategoryInput.value = '';
    editInitialInput.value = '';
    editFinalInput.value = '';
    editConfigInput.value = '10秒 | 動態追隨 | 自定義場景';
    editExtrasInput.value = '電影級運鏡, 8K超高解析度, 無浮水印';
    editTimelineInput.value = '0~2秒 | 描述\n2~5秒 | 描述\n5~10秒 | 描述';
}

// --- Translation Logic ---
async function handleTranslate() {
    const text = translateInput.value.trim();
    if (!text) return alert('請先輸入或貼上中文內容');
    startTranslateBtn.disabled = true;
    startTranslateBtn.innerHTML = '<i data-lucide="loader"></i> 翻譯中...';
    lucide.createIcons();
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=zh-TW|en`);
        const data = await response.json();
        if (data.responseData) { translateOutput.value = data.responseData.translatedText; } else { throw new Error('翻譯失敗'); }
    } catch (error) {
        console.error(error);
        alert('翻譯服務暫時不可用，請稍後再試');
    } finally {
        startTranslateBtn.disabled = false;
        startTranslateBtn.innerHTML = '<i data-lucide="zap"></i> 立即開始翻譯';
        lucide.createIcons();
    }
}

function handleCopyEn() {
    if (!translateOutput.value) return;
    navigator.clipboard.writeText(translateOutput.value).then(() => {
        toast.style.display = 'block';
        toast.style.opacity = '1';
        toast.textContent = '英文翻譯已複製！';
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.style.display = 'none', 300);
        }, 2000);
    });
}

// --- Other Buttons ---
copyBtn.addEventListener('click', () => {
    const group = allTemplates.find(t => t.id === activeGroupId);
    if (!group) return;
    const data = (group.variations && activeVariationId) ? group.variations.find(v => v.id === activeVariationId) : group;
    if (!data) return;
    let text = `主題：${group.title}${data.name ? ` (${data.name})` : ''}\n分類：${data.category || group.category}\n\n[影片條件]\n${Object.values(data.config || {}).join('，')}\n\n[時間軸]\n${data.timeline.map(ti => `${ti.time}: ${ti.content}`).join('\n')}\n\n[影像細節]\n${data.extras.join(', ')}`;
    navigator.clipboard.writeText(text).then(() => {
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 2000);
    });
});

randomBtn.addEventListener('click', () => {
    const randomGroup = allTemplates[Math.floor(Math.random() * allTemplates.length)];
    activeCategory = randomGroup.category;
    renderCategories();
    selectGroup(randomGroup.id);
});

function getCharacterIcon(t) {
    const cat = t.category;
    if (cat === '寶可夢') return 'sparkles';
    if (cat === '鬼滅之刃') return 'flame';
    if (cat === '金剛戰士') return 'shield';
    if (cat === '動物') return 'dog';
    return 'user';
}

init();
