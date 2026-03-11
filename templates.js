// 核心規則：所有變體皆須包含 [config], [initialLook], [finalGear], [timeline(0~10s 共10段)], [extras]
export const templates = [
  // --- 鬼滅之刃 ---
  {
    category: '鬼滅之刃',
    id: 'group-tanjiro',
    title: '灶門炭治郎',
    variations: [
      {
        id: 'tanjiro-snow',
        name: '雪夜火龍',
        config: { duration: '10秒', shotType: '動態追隨', ratio: '9:16', scene: '雪夜森林', quality: '極致浮世繪' },
        rules: ['強調呼吸法韻律', '火焰具備線條感'],
        initialLook: '炭治郎穿著羽織，握著日輪刀。',
        finalGear: ['火之神神樂狀態'],
        timeline: [
          { time: '0~0.8秒', content: '炭治郎在雪地中紮馬步，深呼吸，空氣向中心匯聚' },
          { time: '0.8~2秒', content: '他猛然踏步，腳下積雪呈圓形炸開，刀尖湧出湛藍水流' },
          { time: '2~3秒', content: '水流龍頭成型，眼神突亮，湛藍水流順勢轉化為熾熱紅火' },
          { time: '3~4秒', content: '「火之神神樂！」他高速旋轉，刀尖劃出圓形火環，雪花蒸發' },
          { time: '4~5秒', content: '火焰轉變為螺旋狀龍體，纏繞全身，熱浪扭曲周圍空氣' },
          { time: '5~6.5秒', content: '炭治郎向前衝刺，留下燃燒腳印，背景森林被映照成深紅' },
          { time: '6.5~7.5秒', content: '巨型火龍龍頭怒吼，炭治郎揮下最後擊，火光沖天' },
          { time: '7.5~8.5秒', content: '火焰粒子在空中飛舞，熱力融化雪地，煙霧彌漫' },
          { time: '8.5~9.3秒', content: '炭治郎收刀，姿態優雅定格，殘火在寒風中飄散' },
          { time: '9.3~10秒', content: '鏡頭仰拍，背景露出淡淡月光，畫面霸氣收尾' }
        ],
        extras: ['電影級運鏡', '8K解析度', '體積光', '無浮水印']
      }
    ]
  },
  {
    category: '鬼滅之刃',
    id: 'group-nezuko',
    title: '灶門禰豆子',
    variations: [
      {
        id: 'nezuko-awaken',
        name: '覺醒戰鬥',
        config: { duration: '10秒', shotType: '低角度仰拍', ratio: '9:16', scene: '深夜村莊', quality: '極致鬼化特效' },
        rules: ['強調力量壓迫感'],
        initialLook: '可愛少女模樣，眼神突變。',
        finalGear: ['大人化覺醒形態'],
        timeline: [
          { time: '0~2秒', content: '禰豆子從小木盒中爬出，眼神瞬間轉為深紅' },
          { time: '2~4秒', content: '身形下拉長變大，變為成年女性比例' },
          { time: '4~10秒', content: '爆發出血鬼術「爆血」，粉色火焰席捲街道' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },
  {
    category: '鬼滅之刃',
    id: 'group-zenitsu',
    title: '我妻善逸',
    variations: [
      {
        id: 'zenitsu-thunder',
        name: '霹靂一閃',
        config: { duration: '10秒', shotType: '高速定格', ratio: '9:16', scene: '那田蜘蛛山', quality: '雷電特效' },
        rules: ['動作簡潔有力'],
        initialLook: '金髮男孩，蜷縮身體準備拔刀。',
        finalGear: ['霹靂一閃狀態'],
        timeline: [
          { time: '0~3秒', content: '善逸低頭沈睡，呼吸平穩，金色的雷火花在鞘口劈啪作響' },
          { time: '3~6秒', content: '「霹靂一閃！」化作黃色電光瞬間消失，電光貫穿敵陣' },
          { time: '6~10秒', content: '緩慢收刀入鞘，背景發生劇烈雷爆' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },

  // --- 美少女變身 (金剛戰士主題) ---
  {
    category: '金剛戰士',
    id: 'group-girl-pink',
    title: '美少女變身 (粉衣)',
    variations: [
      {
        id: 'girl-pink-standard',
        name: '光學美感變身',
        config: { duration: '10秒', shotType: '旋轉特寫', ratio: '9:16', scene: '花瓣雨遺蹟', quality: '極致寫實美少女' },
        rules: ['強調變換瞬間的人臉細節', '金屬機甲與皮膚的質感對比'],
        initialLook: '穿著紅白水手服的美少女，右手舉起粉色變身器。',
        finalGear: ['粉色金剛戰士全覆式動力裝甲'],
        timeline: [
          { time: '0~1秒', content: '美少女大喊變身命令，粉色螺旋能量從腳底升起' },
          { time: '1~2.5秒', content: '能量化作半透明機甲零件，精確貼合手臂與腿部' },
          { time: '2.5~4秒', content: '面部表情嚴肅，頭盔從後方合攏，鏡片亮起微弱光芒' },
          { time: '4~5.5秒', content: '背後展開能量翅膀，花瓣在周圍加速旋轉' },
          { time: '5.5~7秒', content: '她半跪在地，手持粉色長弓，地面震開粉色波紋' },
          { time: '7~8.5秒', content: '身後背景發生粉、紫雙色的電影感慢動作爆炸' },
          { time: '8.5~10秒', content: '戰姿定格，鏡頭移至側面角度，畫面充滿力量與美感' }
        ],
        extras: ['電影級運鏡', '8K解析度', '皮膚紋理特寫', '金屬反射特效', '無浮水印']
      }
    ]
  },
  {
    category: '金剛戰士',
    id: 'group-girl-yellow',
    title: '美少女變身 (黃衣)',
    variations: [
      {
        id: 'girl-yellow-lightning',
        name: '雷電感變身',
        config: { duration: '10秒', shotType: '低角度仰拍', ratio: '9:16', scene: '科幻都市', quality: '電影級視覺' },
        rules: ['強調閃電與美感共存'],
        initialLook: '短髮美少女，眼神犀利。',
        finalGear: ['黃色金剛戰士重型裝甲'],
        timeline: [
          { time: '0~3秒', content: '黃色雷霆擊中變身器，少女全身被金光覆蓋' },
          { time: '3~7秒', content: '機甲零件如流水般覆蓋身體，每一寸接縫都在放電' },
          { time: '7~10秒', content: '完成變身，刀刃揮出雷光月牙形衝擊波' }
        ],
        extras: ['電影級運鏡', '8K解析度', '雷電爆烈特效', '無浮水印']
      }
    ]
  },

  // --- 寶可夢 ---
  {
    category: '寶可夢',
    id: 'group-bulbasaur',
    title: '妙蛙種子系列',
    variations: [
      {
        id: 'bulbasaur-evolve',
        name: '妙蛙花進化',
        config: { duration: '10秒', shotType: '仰拍', ratio: '9:16', scene: '草叢', quality: '超寫實' },
        rules: ['自然之力動態'],
        initialLook: '小巧妙蛙種子。',
        finalGear: ['巨大妙蛙花'],
        timeline: [
          { time: '0~3秒', content: '種子跳動，體型膨大' },
          { time: '3~10秒', content: '背部大花盛開，釋放毒粉碎屑' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },
  {
    category: '寶可夢',
    id: 'group-charmander',
    title: '小火龍系列',
    variations: [
      {
        id: 'charmander-evolve',
        name: '噴火龍進化',
        config: { duration: '10秒', shotType: '跟拍', ratio: '9:16', scene: '火山', quality: '極致火焰' },
        rules: ['火焰高溫感'],
        initialLook: '小火龍坐在岩漿旁。',
        finalGear: ['超級噴火龍X'],
        timeline: [
          { time: '0~3秒', content: '小火龍變為噴火龍' },
          { time: '3~10秒', content: '噴射青色龍息，畫面定格' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },
  {
    category: '寶可夢',
    id: 'group-squirtle',
    title: '傑尼龜系列',
    variations: [
      {
        id: 'squirtle-evolve',
        name: '水箭龜進化',
        config: { duration: '10秒', shotType: '水底', ratio: '9:16', scene: '海岸', quality: '電影級水體' },
        rules: ['重工業金屬感'],
        initialLook: '傑尼龜奔跑。',
        finalGear: ['超級水箭龜'],
        timeline: [
          { time: '0~3秒', content: '進化為巨型水箭龜' },
          { time: '3~10秒', content: '巨型水彈發射' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },
  {
    category: '寶可夢',
    id: 'group-pikachu',
    title: '皮卡丘',
    variations: [
      {
        id: 'pika-forest',
        name: '森林雷鳴',
        config: { duration: '10秒', shotType: '跟拍', ratio: '9:16', scene: '常磐森林', quality: '3D重組' },
        rules: ['雷電黃色濃縮'],
        initialLook: '皮卡丘臉頰冒電。',
        finalGear: ['最強電擊形態'],
        timeline: [
          { time: '0~5秒', content: '皮卡丘跳躍，雷雲匯聚' },
          { time: '5~10秒', content: '釋放千萬伏特' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },

  // --- 金剛戰士 (傳統) ---
  {
    category: '金剛戰士',
    id: 'group-jason',
    title: '英傑 (紅衣)',
    variations: [
      {
        id: 'pr-jason-full',
        name: '霸王龍之力',
        config: { duration: '10秒', shotType: '史詩仰拍', ratio: '9:16', scene: '廢墟', quality: '特攝現代' },
        rules: ['強調組裝零件感'],
        initialLook: '舉起變身器。',
        finalGear: ['紅衣戰士動力裝甲'],
        timeline: [
          { time: '0~3秒', content: '紅色雷電擊中地面，大喊變身口號' },
          { time: '3~7秒', content: '機械胸甲扣合，鎖扣聲清脆' },
          { time: '7~10秒', content: '拔出動力劍，背後華麗爆炸' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },

  // --- 忍者龜 ---
  {
    category: '忍者龜',
    id: 'group-leo',
    title: '李奧納多',
    variations: [
      {
        id: 'tmnt-leo-full',
        name: '紐約屋頂',
        config: { duration: '10秒', shotType: '屋頂追隨', ratio: '9:16', scene: '黑暗街道', quality: '寫實電影' },
        rules: ['強調領巾動態'],
        initialLook: '李奧納多雙刀交叉。',
        finalGear: ['潛行者重裝套件'],
        timeline: [
          { time: '0~5秒', content: '在鋼索滑行，火花在夜色跳動' },
          { time: '5~10秒', content: '落地震波碎裂地面' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  },

  // --- 動物 ---
  {
    category: '動物',
    id: 'group-cat-american-shorthair',
    title: '美短貓系列',
    variations: [
      {
        id: 'cat-am-sh-carousel',
        name: '遊樂園旋轉木馬',
        config: { duration: '10秒', shotType: '電影級運鏡', ratio: '9:16', scene: '可愛遊樂園' },
        initialLook: '卡通風格，美國短毛貓，銀虎斑加白，正八開臉，粉色鼻頭與腳墊，圓頭圓腦，性格活潑。',
        finalGear: ['頭頂星星特效'],
        timeline: [
          { time: "0-1", content: "貓坐在遊樂園門口" },
          { time: "1-2", content: "貓坐上旋轉木馬" },
          { time: "2-4", content: "旋轉木馬一直旋轉" },
          { time: "4-5", content: "特寫貓臉部表情，眼睛超大、非常驚訝" },
          { time: "5-7", content: "沒有抓好木馬，飛出去" },
          { time: "7-8", content: "特寫掉下來的鏡頭" },
          { time: "8-10", content: "貓躺在地上，頭出現多顆星星的畫面" }
        ],
        extras: ["電影級運鏡", "8K超高解析度", "無浮水印", "比例9:16"]
      },
      {
        id: 'cat-am-sh-slide',
        name: '公園溜滑梯',
        config: { duration: "10秒", shotType: "電影級運鏡", scene: "陽光公園" },
        initialLook: "卡通風格，美國短毛貓，銀虎斑加白，正八開臉，粉色鼻頭與腳墊，圓頭圓腦。",
        finalGear: ["飛向遠方"],
        timeline: [
          { time: "0-1", content: "貓坐在公園門口" },
          { time: "1-2", content: "貓看到溜滑梯，特寫溜滑梯，高度101公分" },
          { time: "2-3", content: "特寫貓表情，眼神有自信，嘴角上揚，非常有自信爬上溜滑梯至高點" },
          { time: "3-4", content: "特寫貓臉部表情，在溜滑梯的隧道內、非常驚訝" },
          { time: "5-6", content: "手腳開始亂抓，一直想停住，但是停不下來" },
          { time: "6-7", content: "貓來不及反應，就滑出溜滑梯，飛在天空" },
          { time: "7-8", content: "天空出現好多小鳥" },
          { time: "8-9", content: "小鳥就抓著貓往遠方飛走了" },
          { time: "9-10", content: "特寫貓的表情，眼中含淚，無助又害怕的神情" }
        ],
        extras: ["電影級運鏡", "8K超高解析度", "無浮水印", "比例9:16"]
      }
    ]
  },

  // --- 貝貝賓 ---
  {
    category: '貝貝賓',
    id: 'group-kiki',
    title: '奇奇',
    variations: [
      {
        id: 'babybus-kiki',
        name: '彩色救援',
        config: { duration: '10秒', shotType: '可愛運鏡', ratio: '9:16', scene: '玩具城', quality: '精緻毛皮' },
        rules: ['布料質感'],
        initialLook: '熊貓奇奇跑步。',
        finalGear: ['救援隊戰車'],
        timeline: [
          { time: '0~5秒', content: '揮舞魔法棒，星星光點包圍' },
          { time: '5~10秒', content: '跳上戰車' }
        ],
        extras: ['4K解析度', '無浮水印']
      }
    ]
  },

  // --- AI 山海經 ---
  {
    category: 'AI 山海經',
    id: 'group-nike-shark',
    title: 'Nike 鯊',
    variations: [
      {
        id: 'brainrot-nike-full',
        name: 'Tralalero',
        config: { duration: '10秒', shotType: '畸變廣角', ratio: '9:16', scene: '失真海底', quality: 'Brainrot' },
        rules: ['頻閃效果'],
        initialLook: 'Nike鯊魚跳舞。',
        finalGear: ['Tralalero形態'],
        timeline: [
          { time: '0~5秒', content: '隨音樂擺頭' },
          { time: '5~10秒', content: '噴出運動鞋粒子' }
        ],
        extras: ['電影級運鏡', '8K解析度', '無浮水印']
      }
    ]
  }
];
