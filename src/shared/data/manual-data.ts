const CDN = 'https://image.agent-skills.cc/uploads/manual';

export interface ManualCase {
  prompt: string;
  inputImages?: string[];
  inputVideos?: string[];
  resultVideos?: string[];
  resultScreenshots?: string[];
  label?: string;
  duration?: string;
  images?: string[];
}

export interface ManualSection {
  id: string;
  title: string;
  level: 2 | 3 | 4 | 5;
  description?: string;
  images?: string[];
  cases?: ManualCase[];
  subsections?: ManualSection[];
}

export interface ManualData {
  hero: {
    title: string;
    intro: string[];
    highlights: string[];
  };
  params: { key: string; value: string }[];
  paramsNote: string;
  interaction: {
    notes: string[];
    steps: {
      title: string;
      description?: string;
      images: string[];
      captions?: string[];
    }[];
    previewNote: string;
    previewImages: string[];
  };
  transitionText: string;
  sections: ManualSection[];
  footer: {
    title: string;
    content: string[];
  };
}

export const manualData: ManualData = {
  hero: {
    title: '视频 Seedance 2.0 正式上线即梦！Kill the game！',
    intro: [
      '还记得从只能用文字和首/尾帧「讲故事」的那天起，我们就想做出一个真正听得懂你表达的视频模型。今天，它真的来了！',
      '即梦Seedance 2.0 现在支持图像、视频、音频、文本四种模态输入，表达方式更丰富，生成也更可控',
      '你可以用一张图定下画面风格，用一个视频指定角色的动作和镜头的变化，再用几秒音频带起节奏氛围……搭配提示词，让创作过程变得更自然、更高效，也更像真正的"导演"。',
      '这次升级中，"参考能力"是最大亮点：',
    ],
    highlights: [
      '参考图像可精准还原画面构图、角色细节',
      '参考视频支持镜头语言、复杂的动作节奏、创意特效的复刻',
      '视频支持平滑延长与衔接，可按用户提示生成连续镜头，不止生成，还能"接着拍"',
      '编辑能力同步增强，支持对已有视频进行角色更替、删减、增加',
    ],
  },
  params: [
    { key: '图片输入', value: '≤ 9 张' },
    { key: '视频输入', value: '≤ 3 个，总时长不超过15s（有参考视频会贵一点哦）' },
    { key: '音频输入', value: '支持 MP3 上传，数量≤ 3 个，总时长不超过15s' },
    { key: '文本输入', value: '自然语言' },
    { key: '生成时长', value: '≤ 15s，可自由选择4-15s' },
    { key: '声音输出', value: '自带音效/配乐' },
  ],
  paramsNote: '交互限制：目前支持的混合输入总上限是 12 个文件。建议优先上传对画面或节奏影响最大的素材，合理分配不同模态的文件数量',
  interaction: {
    notes: [
      '即梦Seedance 2.0 支持「首尾帧」和「全能参考」入口，智能多帧和主体参考无法选中。若你只上传首帧图 + prompt，可走首尾帧入口；如需多模态（图、视频、音频、文本）组合输入，则需进入全能参考入口',
      '当前支持的交互方式是通过"@素材名"来指定每个图片、视频、音频的用途，例如：@图片1 作为首帧，@视频1 参考镜头语言，@音频1 用于配乐',
    ],
    steps: [
      {
        title: '主界面',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['入口：Seedance 2.0 - 全能参考/首尾帧', '唤起本地文件弹窗', '选定文件，添加至输入框'],
      },
      {
        title: '全能参考模式下如何@',
        description: '方法1：输入"@"唤起参考调用',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['输入"@"', '选择参考，落入输入框', '输入prompt'],
      },
      {
        title: '方法2：点击参数工具"@"唤起参考调用',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['点击"@"选择参考', '输入prompt'],
      },
    ],
    previewNote: '上传素材后，图片、视频、音频都支持悬停预览',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: '下面是一些不同场景下的用法和玩法，帮助你更好地理解 Seedance 2.0 在生成质量上、控制能力和创意表现上的升级。如果你还不知道从哪开始，不如先看看这些例子，激发灵感～',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. 基础能力显著增强：更稳、更顺、更像真的！',
      level: 2,
      description: '不只是多模态，Seedance 2.0 在基础层面显著增强，物理规律更合理、动作表现更自然流畅、指令理解更精准、风格保持更稳定，不仅能稳定完成复杂动作、连续运动等高难度生成任务，也让整体视频效果更真实、更顺滑，是一次底层能力的全面进化！',
      cases: [
        {
          prompt: '女孩在优雅的晒衣服，晒完接着在桶里拿出另一件，用力抖一抖衣服。',
          resultScreenshots: [`${CDN}/image_015.jpg`],
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: '画里面的人物心虚的表情，眼睛左右看了看探出画框，快速的将手伸出画框拿起可乐喝了一口，然后露出一脸满足的表情，这时传来脚步声，画中的人物赶紧将可乐放回原位，此时一位西部牛仔拿起杯子里的可乐走了，最后镜头前推画面慢慢变得纯黑背景只有顶光照耀的罐装可乐，画面最下方出现艺术感字幕和旁白："宜口可乐，不可不尝！"',
          inputImages: [`${CDN}/image_018.jpg`],
          label: '超强真实感',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: '镜头小幅度拉远（露出街头全景）并跟随女主移动，风吹拂着女主的裙摆，女主走在19世纪的伦敦大街上；女主走着走着右边街道驶来一辆蒸汽机车，快速驶过女主身旁，风将女主的裙摆吹起，女主一脸震惊的赶忙用双手向下捂住裙摆；背景音效为走路声，人群声，汽车声等等',
          inputImages: [`${CDN}/image_020.jpg`],
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: '镜头跟随黑衣男子快速逃亡，后面一群人在追，镜头转为侧面跟拍，人物惊慌撞倒路边的水果摊爬起来继续逃，人群慌乱的声音。',
          inputImages: [`${CDN}/image_022.jpg`],
          resultScreenshots: [],
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. 多模态全面升级：视频创作进入"自由组合"时代！',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Seedance 2.0 多模态介绍',
          level: 3,
          description: 'Seedance 2.0 = 多模态参考能力（可参考万物） + 强创意生成 + 指令响应精准（理解力很棒）\n\n支持上传文本、图片、视频、音频，这些素材都可以被用作使用对象或参考对象。你可以参考任何内容的动作、特效、形式、运镜、人物、场景、声音，只要提示词写得清楚，模型都能理解。\n\n用自然语言描述你想要的画面和动作就可以啦，明确是参考，还是编辑～素材多的时候，建议你多检查一下各个 @对象有没有标清楚，别把图、视频、角色搞混了哦',
        },
        {
          id: 'special-usage',
          title: '2.2 特殊使用方式（不设限，仅供参考）',
          level: 3,
          description: '有首帧/尾帧图？还想参考视频动作？\n→ 提示词中写清楚，如："@图1为首帧，参考@视频1的打斗动作"\n\n想延长一个已有的视频？\n→ 说明延长时间，如"将@视频1延长 5s"，注意：此时选择的生成时长应为"新增部分"的时长\n\n想融合多个视频？\n→ 提示词中说明合成逻辑，如："我要在@视频1和@视频2之间加一个场景，内容为xxx"\n\n没音频素材？可以直接参考视频里的声音\n\n想生成连续动作？\n→ 可以在提示词中加入连续性描述，如："角色从跳跃直接过渡到翻滚，保持动作连贯流畅"@图1@图2@图3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 那些一直很难做的视频问题，现在真的能搞定了！',
          level: 3,
          description: '做视频总会碰到一些让人头疼的地方：比如人脸换了、动作不像、视频延长不自然、改着改着整个节奏都变了……这次多模态能把这些"老大难"问题一口气解决了，下面就是具体的使用案例',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 一致性全面提升',
              level: 4,
              description: '你可能遇到过这些烦恼：画面里人物前后长得不一样、商品细节丢了、小字模糊、场景跳变、镜头风格无法统一……这些在创作中常见的一致性问题，现在在 2.0 中都能被解决。从人脸到服装，再到字体细节，整体一致性更稳、更准',
              cases: [
                {
                  prompt: '男人@图片1下班后疲惫的走在走廊，脚步变缓，最后停在家门口，脸部特写镜头，男人深呼吸，调整情绪，收起了负面情绪，变得轻松，然后特写翻找出钥匙，插入门锁，进入家里后，他的小女儿和一只宠物狗，欢快的跑过来迎接拥抱，室内非常的温馨，全程自然对话',
                  inputImages: [`${CDN}/image_027.jpg`],
                  resultScreenshots: [`${CDN}/image_029.jpg`],
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: '将@视频1中的女生换成戏曲花旦，场景在一个精美的舞台上，参考@视频1的运镜和转场效果，利用镜头匹配人物的动作，极致的舞台美感，增强视觉冲击力',
                  resultScreenshots: [`${CDN}/image_030.jpg`, `${CDN}/image_031.jpg`],
                  resultVideos: [`${CDN}/v2_006.mp4`, `${CDN}/v2_007.mp4`],
                },
                {
                  prompt: '参考 @视频1的所有转场和运镜，一镜到底，画面以棋局为起始',
                  resultScreenshots: [`${CDN}/image_032.jpg`],
                  resultVideos: [`${CDN}/v2_008.mp4`, `${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2秒画面：快速四格闪切，红、粉、紫、豹纹四款蝴蝶结依次定格',
                  inputImages: [`${CDN}/image_034.jpg`],
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: '对@图片2的包包进行商业化的摄像展示，包包的侧面参考@图片1，包包的表面材质参考@图片3，要求将包包的细节均有所展示，背景音恢宏大气',
                  inputImages: [`${CDN}/image_041.png`, `${CDN}/image_043.jpg`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: '把@图片1作为画面的首帧图，第一人称视角，参考@视频1的运镜效果，上方场景参考@图片2，左边场景参考@图片3，右边场景参考@图片4。',
                  inputImages: [`${CDN}/image_049.jpg`, `${CDN}/image_050.jpg`],
                  label: '首帧运镜',
                  resultVideos: [`${CDN}/v2_012.mp4`, `${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 运镜复刻',
              level: 4,
              description: '以前想让模型模仿电影里的走位、运镜或者复杂动作，要么写一堆细节提示词，要么干脆做不到。而现在，只需要上传一段参考视频，就可以了',
              cases: [
                {
                  prompt: '参考@图1的男人形象，他在@图2的电梯中，完全参考@视频1的所有运镜效果还有主角的面部表情',
                  resultScreenshots: [`${CDN}/image_057.jpg`],
                  resultVideos: [`${CDN}/v2_014.mp4`, `${CDN}/v2_015.mp4`],
                },
                {
                  prompt: '参考@图1的男人形象，他在@图2的走廊中，完全参考@视频1的所有运镜效果',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`, `${CDN}/image_063.jpg`],
                  resultScreenshots: [`${CDN}/image_064.jpg`],
                  resultVideos: [`${CDN}/v2_016.mp4`, `${CDN}/v2_017.mp4`],
                },
                {
                  prompt: '@图片1的平板电脑作为主体，运镜参考@视频1',
                  inputImages: [`${CDN}/image_070.jpg`],
                  resultScreenshots: [`${CDN}/image_071.jpg`, `${CDN}/image_072.png`],
                  label: '聚焦旋转',
                  resultVideos: [`${CDN}/v2_018.mp4`, `${CDN}/v2_019.mp4`],
                },
                {
                  prompt: '@图片1的女星作为主体，参考@视频1的运镜方式进行有节奏的推拉摇移',
                  inputImages: [`${CDN}/image_073.jpg`],
                  resultScreenshots: [`${CDN}/image_074.jpg`],
                  label: '推拉舞蹈',
                  resultVideos: [`${CDN}/v2_020.mp4`, `${CDN}/v2_021.mp4`],
                },
                {
                  prompt: '参考@图1@图2长枪角色，@图3@图4双刀角色，模仿@视频1的动作，在@图5的枫叶林中打斗',
                  inputImages: [`${CDN}/image_084.jpg`],
                  resultScreenshots: [`${CDN}/image_085.jpg`, `${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_022.mp4`, `${CDN}/v2_023.mp4`],
                },
                {
                  prompt: '参考视频1的人物动作，参考视频2的环绕运镜镜头语言，生成角色1和角色2的打斗场面',
                  inputImages: [`${CDN}/image_087.png`, `${CDN}/image_088.jpg`],
                  resultScreenshots: [`${CDN}/image_089.jpg`, `${CDN}/image_090.jpg`, `${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`, `${CDN}/v2_026.mp4`],
                },
                {
                  prompt: '参考视频1的运镜、画面切换节奏，拿图片1的红色超跑进行复刻。',
                  inputImages: [`${CDN}/image_097.jpg`],
                  resultScreenshots: [`${CDN}/image_098.jpg`],
                  label: '汽车运镜',
                  resultVideos: [`${CDN}/v2_027.mp4`, `${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 创意模版 / 复杂特效精准复刻',
              level: 4,
              description: '不止能生图写故事，Seedance 2.0 还支持"照着模仿"——创意转场、广告成片、电影片段、复杂剪辑，只要你有参考图或视频，模型就能识别动作节奏、镜头语言、视觉结构，并精准复刻出来。',
              cases: [
                {
                  prompt: '将@视频1的人物换成@图片1，@图片1为首帧，人物带上虚拟科幻眼镜，参考@视频1的运镜',
                  inputImages: [`${CDN}/image_105.jpg`],
                  resultScreenshots: [`${CDN}/image_106.jpg`, `${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_029.mp4`, `${CDN}/v2_030.mp4`],
                },
                {
                  prompt: '参考第一张图片里模特的五官长相。模特分别穿着第2-6张参考图里的服装凑近镜头',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`, `${CDN}/image_115.jpg`],
                  resultScreenshots: [`${CDN}/image_116.jpg`],
                  resultVideos: [`${CDN}/v2_031.mp4`, `${CDN}/v2_032.mp4`],
                },
                {
                  prompt: '参考视频的广告创意，用提供的羽绒服图片，搭配广告词生成新的羽绒服广告视频。',
                  resultScreenshots: [`${CDN}/image_123.jpg`],
                  resultVideos: [`${CDN}/v2_033.mp4`, `${CDN}/v2_034.mp4`],
                },
                {
                  prompt: '黑白水墨风格，@图片1的人物参考@视频1的特效和动作，上演一段水墨太极功夫',
                  inputImages: [`${CDN}/image_125.jpg`],
                  resultScreenshots: [`${CDN}/image_126.jpg`],
                  resultVideos: [`${CDN}/v2_035.mp4`, `${CDN}/v2_036.mp4`],
                },
                {
                  prompt: '将@视频1的首帧人物替换成@图片1，完全@参考视频1的特效和动作',
                  inputImages: [`${CDN}/image_133.jpg`],
                  resultScreenshots: [`${CDN}/image_134.jpg`, `${CDN}/image_137.png`],
                  label: '变装',
                  resultVideos: [`${CDN}/v2_037.mp4`, `${CDN}/v2_038.mp4`],
                },
                {
                  prompt: '由@图片1的天花板开始，参考@视频1的拼图破碎效果进行转场',
                  inputImages: [`${CDN}/image_138.png`, `${CDN}/image_139.jpg`],
                  resultScreenshots: [`${CDN}/image_140.jpg`, `${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_039.mp4`, `${CDN}/v2_040.mp4`],
                },
                {
                  prompt: '以黑幕开场，参考视频1的粒子特效和材质，金色鎏金材质的沙砾',
                  inputImages: [`${CDN}/image_142.jpg`],
                  resultScreenshots: [`${CDN}/image_143.jpg`, `${CDN}/image_144.png`],
                  label: 'AE片头',
                  resultVideos: [`${CDN}/v2_041.mp4`, `${CDN}/v2_042.mp4`],
                },
                {
                  prompt: '@图片1的人物参考@视频1中的动作和表情变化，展示吃泡面的抽象行为',
                  inputImages: [`${CDN}/image_145.jpg`],
                  resultScreenshots: [`${CDN}/image_146.jpg`, `${CDN}/image_153.jpg`],
                  resultVideos: [`${CDN}/v2_043.mp4`, `${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 模型的创意性、剧情补全能力',
              level: 4,
              cases: [
                {
                  prompt: '将@图1以从左到右从上到下的顺序进行漫画演绎',
                  inputImages: [`${CDN}/image_154.jpg`],
                  resultScreenshots: [`${CDN}/image_155.jpg`, `${CDN}/image_156.jpg`, `${CDN}/image_157.jpg`, `${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_045.mp4`, `${CDN}/v2_046.mp4`],
                },
                {
                  prompt: '参考@图片1的专题片的分镜头脚本，创作一段15s的关于"童年的四季"的治愈系片头',
                  inputImages: [`${CDN}/image_159.jpg`],
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: '参考视频1的音频，根据图1-5为灵感，发散出一条情绪向的视频。',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`, `${CDN}/image_165.jpg`],
                  resultScreenshots: [`${CDN}/image_166.jpg`, `${CDN}/image_167.jpg`, `${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 视频延长',
              level: 4,
              cases: [
                {
                  prompt: '延长15s视频，参考@图片1、@图片2的驴骑摩托车的形象，补充一段脑洞广告',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`, `${CDN}/image_170.jpg`],
                  resultScreenshots: [`${CDN}/image_171.jpg`, `${CDN}/image_172.png`],
                  resultVideos: [`${CDN}/v2_049.mp4`, `${CDN}/v2_050.mp4`],
                },
                {
                  prompt: '将视频延长6s，出现电吉他的激昂音乐，视频中间出现"JUST DO IT"的广告字体',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`, `${CDN}/image_174.jpg`],
                  resultScreenshots: [`${CDN}/image_175.jpg`, `${CDN}/image_176.jpg`, `${CDN}/image_177.jpg`, `${CDN}/image_178.jpg`, `${CDN}/image_179.jpg`, `${CDN}/image_180.jpg`],
                  resultVideos: [`${CDN}/v2_051.mp4`, `${CDN}/v2_052.mp4`],
                },
                {
                  prompt: '将@视频1延长15秒。1-5秒：光影透过百叶窗在木桌、杯身上缓缓滑过',
                  duration: '15s',
                  resultScreenshots: [`${CDN}/image_181.jpg`, `${CDN}/image_182.jpg`],
                  resultVideos: [`${CDN}/v2_053.mp4`, `${CDN}/v2_054.mp4`],
                },
                {
                  prompt: '向前延长10s，温暖的午后光线里，镜头先从街角那排被微风掀动的遮阳篷开始',
                  duration: '10s',
                  resultScreenshots: [`${CDN}/image_183.jpg`, `${CDN}/image_184.jpg`, `${CDN}/image_185.jpg`, `${CDN}/image_186.jpg`, `${CDN}/image_187.jpg`],
                  label: '向日葵滑板车',
                  resultVideos: [`${CDN}/v2_055.mp4`, `${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 音色更准，声音更真',
              level: 4,
              cases: [
                {
                  prompt: '固定镜头，中央鱼眼镜头透过圆形孔洞向下窥视',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultScreenshots: [`${CDN}/image_188.jpg`, `${CDN}/image_189.jpg`, `${CDN}/image_190.jpg`, `${CDN}/image_191.jpg`, `${CDN}/image_192.jpg`, `${CDN}/image_193.jpg`, `${CDN}/image_194.jpg`, `${CDN}/image_195.jpg`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: '根据提供的写字楼宣传照，生成一段15秒电影级写实风格的地产纪录片',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultScreenshots: [`${CDN}/image_199.jpg`, `${CDN}/image_200.jpg`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: '在"猫狗吐槽间"里的一段吐槽对话，要求情感丰沛，符合脱口秀表演',
                  inputImages: [`${CDN}/image_201.png`],
                  resultScreenshots: [`${CDN}/image_202.jpg`, `${CDN}/image_203.jpg`, `${CDN}/image_204.jpg`, `${CDN}/image_205.jpg`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: '豫剧经前桥段《铡美案》的伴奏响起',
                  inputImages: [`${CDN}/image_206.png`],
                  resultScreenshots: [`${CDN}/image_207.jpg`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: '生成一个15秒的MV视频。关键词：稳重构图 / 轻推拉 / 低角度英雄感 / 纪实但高级',
                  inputImages: [`${CDN}/image_208.png`],
                  resultScreenshots: [`${CDN}/image_209.jpg`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: '画面中间戴帽子的女孩温柔地唱着说"I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultScreenshots: [`${CDN}/image_211.jpg`, `${CDN}/image_212.jpg`, `${CDN}/image_213.jpg`, `${CDN}/image_214.jpg`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: '固定镜头。站着的壮汉（队长）握拳挥臂用西班牙语说着："三分钟后突袭！"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultScreenshots: [`${CDN}/image_216.jpg`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3秒：开头闹钟响起来，画面朦胧中出现画面1',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultScreenshots: [`${CDN}/image_219.jpg`, `${CDN}/image_220.jpg`, `${CDN}/image_221.jpg`, `${CDN}/image_222.jpg`, `${CDN}/image_223.jpg`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: '@图片1的猴子走向奶茶店柜台，镜头跟随在他身后',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultScreenshots: [`${CDN}/image_227.jpg`, `${CDN}/image_228.jpg`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: '用科普风格和音色，将图片1中的内容演绎出来',
                  inputImages: [`${CDN}/image_229.jpg`],
                  resultScreenshots: [`${CDN}/image_230.jpg`],
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 镜头连贯性（一镜到底）更强',
              level: 4,
              cases: [
                {
                  prompt: '@图片1-5，一镜到底的追踪镜头，从街头跟随跑步者上楼梯、穿过走廊、进入屋顶，最终俯瞰城市。',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultScreenshots: [`${CDN}/image_236.jpg`, `${CDN}/image_237.jpg`, `${CDN}/image_238.jpg`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: '以@图片1为首帧，画面放大至飞机舷窗外',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultScreenshots: [`${CDN}/image_242.jpg`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: '谍战片风格，@图片1作为首帧画面，镜头正面跟拍穿着红风衣的女特工',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultScreenshots: [`${CDN}/image_247.jpg`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: '根据@图片1外景的镜头，第一人称主观视角快推镜头到木屋内',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultScreenshots: [`${CDN}/image_252.jpg`, `${CDN}/image_253.jpg`, `${CDN}/image_254.jpg`, `${CDN}/image_255.jpg`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@图片1-5，主观视角一镜到底的惊险过山车的镜头',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultScreenshots: [`${CDN}/image_261.jpg`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 视频编辑可用度高',
              level: 4,
              description: '有时候你已经有了一段视频，不想从头再找图或重做一遍，只是希望调整其中一小段动作、延长几秒钟，或让角色表现更贴近你的想法。现在你可以直接用已有视频作为输入，在不改变其它内容的前提下，指定片段、动作或节奏进行定向修改。',
              images: [`${CDN}/image_262.jpg`],
              cases: [
                {
                  prompt: '颠覆@视频1里的剧情，男人眼神从温柔瞬间转为冰冷狠厉',
                  resultScreenshots: [`${CDN}/image_263.jpg`, `${CDN}/image_264.jpg`],
                  resultVideos: [`${CDN}/v2_077.mp4`, `${CDN}/v2_078.mp4`],
                },
                {
                  prompt: '颠覆@视频1的整个剧情 0–3秒画面：西装男坐在酒吧',
                  resultScreenshots: [`${CDN}/image_265.jpg`, `${CDN}/image_266.jpg`, `${CDN}/image_267.jpg`, `${CDN}/image_268.jpg`, `${CDN}/image_269.jpg`, `${CDN}/image_270.jpg`],
                  resultVideos: [`${CDN}/v2_079.mp4`, `${CDN}/v2_080.mp4`],
                },
                {
                  prompt: '视频1中的女主唱换成图片1的男主唱，动作完全模仿原视频',
                  inputImages: [`${CDN}/image_271.png`],
                  resultScreenshots: [`${CDN}/image_272.jpg`, `${CDN}/image_273.jpg`],
                  resultVideos: [`${CDN}/v2_081.mp4`, `${CDN}/v2_082.mp4`],
                },
                {
                  prompt: '将视频1女人发型变成红色长发，图片1中的大白鲨缓缓浮出',
                  inputImages: [`${CDN}/image_274.png`],
                  resultScreenshots: [`${CDN}/image_275.jpg`, `${CDN}/image_276.jpg`, `${CDN}/image_277.jpg`, `${CDN}/image_278.jpg`, `${CDN}/image_279.jpg`, `${CDN}/image_280.jpg`],
                  resultVideos: [`${CDN}/v2_083.mp4`, `${CDN}/v2_084.mp4`],
                },
                {
                  prompt: '视频1镜头右摇，炸鸡老板忙碌地将炸鸡递给排队的客户',
                  inputImages: [`${CDN}/image_281.png`],
                  resultScreenshots: [`${CDN}/image_282.jpg`, `${CDN}/image_283.jpg`, `${CDN}/image_284.jpg`, `${CDN}/image_285.jpg`],
                  resultVideos: [`${CDN}/v2_085.mp4`, `${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 可进行音乐卡点',
              level: 4,
              cases: [
                {
                  prompt: '海报中的女生在不停的换装，服装参考@图片1@图片2的样式',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  resultScreenshots: [`${CDN}/image_290.jpg`, `${CDN}/image_291.jpg`, `${CDN}/image_292.jpg`, `${CDN}/image_293.jpg`],
                  label: '音乐卡点',
                  resultVideos: [`${CDN}/v2_087.mp4`, `${CDN}/v2_088.mp4`],
                },
                {
                  prompt: '@图片1-7中的图片根据@视频中的画面关键帧进行卡点',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  resultScreenshots: [`${CDN}/image_300.jpg`, `${CDN}/image_301.jpg`],
                  resultVideos: [`${CDN}/v2_089.mp4`, `${CDN}/v2_090.mp4`],
                },
                {
                  prompt: '@图片1-6的风光场景图，参考@视频中的画面节奏进行卡点',
                  resultScreenshots: [`${CDN}/image_308.jpg`, `${CDN}/image_309.jpg`, `${CDN}/image_310.jpg`, `${CDN}/image_311.jpg`, `${CDN}/image_312.jpg`, `${CDN}/image_313.jpg`],
                  resultVideos: [`${CDN}/v2_091.mp4`, `${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8秒智性博弈式战斗动漫片段，贴合复仇主题',
                  resultScreenshots: [`${CDN}/image_314.jpg`],
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 情绪演绎更好',
              level: 4,
              images: [`${CDN}/image_315.jpg`],
              cases: [
                {
                  prompt: '@图片1的女子走到镜子前，看着镜子里面的自己，沉思了一会突然开始崩溃大叫',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  resultScreenshots: [`${CDN}/image_318.jpg`, `${CDN}/image_319.jpg`],
                  resultVideos: [`${CDN}/v2_094.mp4`, `${CDN}/v2_095.mp4`],
                },
                {
                  prompt: '这是一个油烟机广告，@图片1作为首帧画面，女人在优雅的做饭',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultScreenshots: [`${CDN}/image_324.jpg`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@图片1作为画面的首帧图，镜头旋转推近，人物突然抬头，开始大声咆哮',
                  inputImages: [`${CDN}/image_325.png`, `${CDN}/image_326.png`, `${CDN}/image_327.png`, `${CDN}/image_328.png`],
                  resultScreenshots: [`${CDN}/image_329.jpg`, `${CDN}/image_330.jpg`, `${CDN}/image_331.jpg`, `${CDN}/image_332.jpg`, `${CDN}/image_333.jpg`],
                  resultVideos: [`${CDN}/v2_097.mp4`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  footer: {
    title: '最后说两句',
    content: [
      'Seedance 2.0 的多模态能力正处于不断进化中，我们会持续更新能力、支持更多种输入组合方式。希望这份使用手册能帮你更自由地发挥创意！',
      '如果你遇到了 Bug，或者有用法建议、需求场景，欢迎留言、私信、敲锣打鼓告诉我们！我们会持续优化，一起把即梦变成真正让你们开心、方便的生产力工具',
    ],
  },
};
