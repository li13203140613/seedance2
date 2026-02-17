import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: '영상 Seedance 2.0 정식 출시! Kill the game!',
    intro: [
      '텍스트와 첫/마지막 프레임으로만 "이야기를 전하던" 그때부터, 우리는 여러분의 표현을 진정으로 이해하는 영상 모델을 만들고 싶었습니다. 그리고 오늘, 드디어 완성했습니다!',
      '즈멍(即梦) Seedance 2.0은 이미지, 영상, 오디오, 텍스트 4가지 모달리티 입력을 지원하여 더 풍부한 표현과 더 정밀한 제어가 가능합니다.',
      '한 장의 이미지로 화면 스타일을 정하고, 영상 하나로 캐릭터 동작과 카메라 움직임을 지정하고, 몇 초의 오디오로 리듬과 분위기를 조성하세요... 프롬프트와 함께 사용하면 창작 과정이 더 자연스럽고, 효율적이며, 진정한 "감독"의 작업에 가까워집니다.',
      '이번 업그레이드에서 "참조 기능"이 가장 큰 하이라이트입니다:',
    ],
    highlights: [
      '참조 이미지로 화면 구도와 캐릭터 디테일을 정확하게 재현',
      '참조 영상으로 카메라 워크, 복잡한 동작 리듬, 크리에이티브 특수효과 재현 지원',
      '영상의 부드러운 연장 및 연결 지원, 사용자 프롬프트에 따라 연속 장면 생성 가능 - 생성뿐만 아니라 "이어서 촬영"도 가능',
      '편집 기능 동시 강화, 기존 영상에서 캐릭터 교체, 삭제, 추가 지원',
    ],
  },
  params: [
    { key: '이미지 입력', value: '최대 9장' },
    { key: '영상 입력', value: '최대 3개, 총 길이 15초 이하 (참조 영상이 있으면 비용이 조금 더 들어요)' },
    { key: '오디오 입력', value: 'MP3 업로드 지원, 최대 3개, 총 길이 15초 이하' },
    { key: '텍스트 입력', value: '자연어' },
    { key: '생성 길이', value: '최대 15초, 4-15초 자유 선택 가능' },
    { key: '사운드 출력', value: '음향 효과/배경음악 자동 포함' },
  ],
  paramsNote: '상호작용 제한: 현재 지원되는 혼합 입력 총 상한은 12개 파일입니다. 화면이나 리듬에 가장 큰 영향을 주는 소재를 우선 업로드하고, 각 모달리티의 파일 수를 적절히 배분하는 것을 권장합니다.',
  interaction: {
    notes: [
      '즈멍 Seedance 2.0은 "첫/마지막 프레임"과 "올인원 참조" 입구를 지원하며, 스마트 멀티프레임과 주체 참조는 선택할 수 없습니다. 첫 프레임 이미지 + 프롬프트만 업로드하면 첫/마지막 프레임 입구로 진행됩니다. 멀티모달(이미지, 영상, 오디오, 텍스트) 조합 입력이 필요하면 올인원 참조 입구로 진입해야 합니다.',
      '현재 지원되는 상호작용 방식은 "@소재명"을 통해 각 이미지, 영상, 오디오의 용도를 지정하는 것입니다. 예: @이미지1을 첫 프레임으로, @영상1을 카메라 워크 참조로, @오디오1을 배경음악으로',
    ],
    steps: [
      {
        title: '메인 화면',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['입구: Seedance 2.0 - 올인원 참조/첫마지막 프레임', '로컬 파일 대화상자 열기', '파일 선택 후 입력창에 추가'],
      },
      {
        title: '올인원 참조 모드에서 @ 사용법',
        description: '방법 1: "@"을 입력하여 참조 호출',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['"@" 입력', '참조 선택, 입력창에 배치', '프롬프트 입력'],
      },
      {
        title: '방법 2: 매개변수 도구 "@"을 클릭하여 참조 호출',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['"@"을 클릭하여 참조 선택', '프롬프트 입력'],
      },
    ],
    previewNote: '소재 업로드 후, 이미지, 영상, 오디오 모두 호버 미리보기를 지원합니다.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: '아래는 다양한 시나리오에서의 사용법과 활용 방법입니다. Seedance 2.0의 생성 품질, 제어 능력, 크리에이티브 표현력 업그레이드를 더 잘 이해하는 데 도움이 될 것입니다. 어디서 시작해야 할지 모르겠다면, 먼저 이 예시들을 살펴보며 영감을 얻어보세요~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. 기본 성능 대폭 강화: 더 안정적이고, 더 부드럽고, 더 사실적으로!',
      level: 2,
      description: '멀티모달뿐만 아니라, Seedance 2.0은 기초 레벨에서도 크게 향상되었습니다. 물리 법칙이 더 합리적이고, 동작 표현이 더 자연스럽고 유연하며, 명령 이해가 더 정확하고, 스타일 유지가 더 안정적입니다. 복잡한 동작과 연속 움직임 등 고난이도 생성 작업을 안정적으로 수행할 뿐만 아니라, 전반적인 영상 효과가 더 사실적이고 매끄럽습니다. 기본 성능의 전면적 진화입니다!',
      cases: [
        {
          prompt: '소녀가 우아하게 빨래를 널고 있다. 다 널고 나서 통에서 다른 옷을 꺼내 힘껏 탈탈 턴다.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: '그림 속 인물이 불안한 표정으로 눈을 좌우로 두리번거리다가 그림 프레임 밖으로 고개를 내밀고, 재빨리 손을 내밀어 콜라를 집어 한 모금 마신 뒤 만족스러운 표정을 짓는다. 이때 발자국 소리가 들리자 그림 속 인물은 서둘러 콜라를 원래 자리에 놓고, 이때 서부 카우보이가 와서 컵에 든 콜라를 가져간다. 마지막으로 카메라가 전진하며 화면이 서서히 순수한 검은 배경에 탑 라이트만 비추는 캔 콜라가 되고, 화면 하단에 예술적인 자막과 내레이션이 나타난다: "마실수록 좋은 콜라, 꼭 한번 드셔보세요!"',
          label: '초강력 사실감',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: '카메라가 소폭 줌아웃(거리 전경 노출)하며 여주인공을 따라 이동한다. 바람이 여주인공의 치마를 날리고, 여주인공이 19세기 런던 거리를 걷고 있다. 걷다가 오른쪽 도로에서 증기 기관차가 나타나 여주인공 옆을 빠르게 지나가며 바람에 치마가 들린다. 여주인공이 놀라며 급히 양손으로 치마를 누른다. 배경 음향은 발자국 소리, 군중 소리, 자동차 소리 등.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: '카메라가 검은 옷의 남자를 따라 빠르게 도주하는 장면, 뒤에서 무리가 쫓아온다. 카메라가 측면 추적 촬영으로 전환되고, 인물이 당황하여 길가의 과일 가판대를 넘어뜨린 뒤 일어나서 계속 도주한다. 군중의 소란스러운 소리.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. 멀티모달 전면 업그레이드: 영상 창작이 "자유 조합" 시대로!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Seedance 2.0 멀티모달 소개',
          level: 3,
          description: 'Seedance 2.0 = 멀티모달 참조 기능(만물을 참조 가능) + 강력한 크리에이티브 생성 + 정밀한 명령 응답(뛰어난 이해력)\n\n텍스트, 이미지, 영상, 오디오 업로드를 지원하며, 이 소재들은 사용 대상 또는 참조 대상으로 활용할 수 있습니다. 동작, 특수효과, 형식, 카메라 워크, 인물, 장면, 사운드 등 모든 콘텐츠를 참조할 수 있으며, 프롬프트만 명확하게 작성하면 모델이 모두 이해할 수 있습니다.\n\n자연어로 원하는 화면과 동작을 설명하면 됩니다. 참조인지 편집인지를 명확히 해주세요~ 소재가 많을 때는 각 @대상이 제대로 표시되어 있는지 확인하세요. 이미지, 영상, 캐릭터를 혼동하지 마세요.',
        },
        {
          id: 'special-usage',
          title: '2.2 특수 사용 방법 (제한 없음, 참고용)',
          level: 3,
          description: '첫 프레임/마지막 프레임 이미지가 있나요? 영상 동작도 참조하고 싶나요?\n→ 프롬프트에 명확히 작성하세요. 예: "@이미지1을 첫 프레임으로, @영상1의 격투 동작 참조"\n\n기존 영상을 연장하고 싶나요?\n→ 연장 시간을 명시하세요. 예: "@영상1을 5초 연장". 참고: 이때 선택하는 생성 길이는 "추가 부분"의 길이여야 합니다.\n\n여러 영상을 합성하고 싶나요?\n→ 프롬프트에 합성 로직을 설명하세요. 예: "@영상1과 @영상2 사이에 장면을 추가하고 싶습니다. 내용은 xxx"\n\n오디오 소재가 없나요? 영상 속 사운드를 직접 참조할 수 있습니다.\n\n연속 동작을 생성하고 싶나요?\n→ 프롬프트에 연속성 설명을 추가하세요. 예: "캐릭터가 점프에서 바로 구르기로 전환하며, 동작이 매끄럽고 유연하게 이어집니다" @이미지1@이미지2@이미지3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 그동안 정말 어려웠던 영상 문제들, 이제 진짜 해결됩니다!',
          level: 3,
          description: '영상 작업을 하다 보면 골치 아픈 부분이 있습니다: 얼굴이 바뀌거나, 동작이 안 닮거나, 영상 연장이 부자연스럽거나, 수정하다 보면 전체 리듬이 변해버리거나... 이번 멀티모달 업그레이드로 이런 "오래된 난제"들을 한꺼번에 해결했습니다. 아래는 구체적인 사용 사례입니다.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 일관성 전면 향상',
              level: 4,
              description: '이런 고민을 겪어보셨을 겁니다: 화면 속 인물이 앞뒤로 다르게 생기거나, 상품 디테일이 사라지거나, 작은 글씨가 흐려지거나, 장면이 갑자기 바뀌거나, 카메라 스타일을 통일할 수 없거나... 이런 창작 과정에서 흔한 일관성 문제들이 이제 2.0에서 해결됩니다. 얼굴부터 의상, 글자 디테일까지 전체적인 일관성이 더 안정적이고 정확합니다.',
              cases: [
                {
                  prompt: '남자 @이미지1이 퇴근 후 피곤한 모습으로 복도를 걸으며 발걸음이 느려지다가 마침내 현관 앞에 멈춘다. 얼굴 클로즈업, 남자가 심호흡을 하며 감정을 정리하고 부정적인 기분을 거두며 편안해진 뒤, 클로즈업으로 열쇠를 꺼내 자물쇠에 꽂는다. 집 안에 들어가자 어린 딸과 반려견이 기뻐하며 달려와 포옹한다. 실내는 매우 따뜻한 분위기, 전체적으로 자연스러운 대화.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: '@영상1의 여성을 경극 꽃단(花旦)으로 교체하고, 장면은 정교한 무대 위로 설정한다. @영상1의 카메라 워크와 전환 효과를 참조하며, 카메라로 인물의 동작에 맞추어 극한의 무대 미학과 강렬한 시각적 임팩트를 표현한다.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: '@영상1의 모든 전환과 카메라 워크를 참조하여, 원테이크로 바둑판을 시작 화면으로 한다.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2초 화면: 빠른 4분할 플래시컷, 빨강, 핑크, 보라, 레오파드 프린트 4종 리본이 차례로 정지 화면으로.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: '@이미지2의 가방을 상업적 촬영 방식으로 전시한다. 가방 측면은 @이미지1을 참조하고, 표면 소재는 @이미지3을 참조한다. 가방의 디테일을 모두 보여주며, 배경 음악은 웅장하고 대기 있게.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: '@이미지1을 화면의 첫 프레임으로 사용, 1인칭 시점, @영상1의 카메라 워크 효과 참조, 위쪽 장면은 @이미지2 참조, 왼쪽 장면은 @이미지3 참조, 오른쪽 장면은 @이미지4 참조.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: '첫 프레임 카메라 워크',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 카메라 워크 재현',
              level: 4,
              description: '이전에는 모델에게 영화의 동선, 카메라 워크나 복잡한 동작을 모방하게 하려면 세부 프롬프트를 길게 작성하거나 아예 불가능했습니다. 이제는 참조 영상 하나만 업로드하면 됩니다.',
              cases: [
                {
                  prompt: '@이미지1의 남자 형상을 참조, 그가 @이미지2의 엘리베이터 안에 있으며, @영상1의 모든 카메라 워크 효과와 주인공의 표정을 완전히 참조.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: '@이미지1의 남자 형상을 참조, 그가 @이미지2의 복도에 있으며, @영상1의 모든 카메라 워크 효과를 완전히 참조.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: '@이미지1의 태블릿 PC를 주체로, 카메라 워크는 @영상1을 참조.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: '포커스 회전',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: '@이미지1의 여배우를 주체로, @영상1의 카메라 워크 방식을 참조하여 리듬감 있는 줌인/줌아웃/패닝/틸팅 수행.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: '줌인아웃 댄스',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: '@이미지1@이미지2의 장창 캐릭터, @이미지3@이미지4의 쌍도 캐릭터를 참조하여, @영상1의 동작을 모방하며 @이미지5의 단풍나무 숲에서 격투.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: '영상1의 인물 동작 참조, 영상2의 회전 카메라 워크 참조, 캐릭터1과 캐릭터2의 격투 장면 생성.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: '영상1의 카메라 워크와 화면 전환 리듬을 참조하여, 이미지1의 빨간 슈퍼카로 재현.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: '자동차 카메라 워크',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 크리에이티브 템플릿 / 복잡한 특수효과 정밀 재현',
              level: 4,
              description: '이미지 생성과 스토리 작성뿐만 아니라, Seedance 2.0은 "따라 만들기"도 지원합니다 - 크리에이티브 전환, 광고 완성본, 영화 장면, 복잡한 편집까지, 참조 이미지나 영상만 있으면 모델이 동작 리듬, 카메라 언어, 시각적 구조를 인식하고 정밀하게 재현합니다.',
              cases: [
                {
                  prompt: '@영상1의 인물을 @이미지1로 교체, @이미지1을 첫 프레임으로, 인물이 가상 SF 안경을 착용, @영상1의 카메라 워크 참조.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: '첫 번째 이미지의 모델 이목구비를 참조. 모델이 2-6번째 참조 이미지의 의상을 차례로 입고 카메라에 다가옴.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: '참조 영상의 광고 컨셉을 사용하여, 제공된 패딩 이미지와 광고 문구를 활용해 새로운 패딩 광고 영상 생성.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: '흑백 수묵화 스타일, @이미지1의 인물이 @영상1의 특수효과와 동작을 참조하여 수묵 태극권 공연.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: '@영상1의 첫 프레임 인물을 @이미지1로 교체, @영상1의 특수효과와 동작을 완전히 참조.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: '변신',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: '@이미지1의 천장에서 시작하여, @영상1의 퍼즐 파편 효과로 전환.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: '블랙 스크린으로 시작, 영상1의 파티클 특수효과와 재질 참조, 금색 유금(鎏金) 재질의 모래 입자.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'AE 인트로',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: '@이미지1의 인물이 @영상1의 동작과 표정 변화를 참조하여, 라면 먹는 추상적 행위를 연출.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 모델의 창의성, 스토리 완성 능력',
              level: 4,
              cases: [
                {
                  prompt: '@이미지1을 왼쪽에서 오른쪽, 위에서 아래 순서로 만화 연출.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: '@이미지1의 전문 영상 스토리보드를 참조하여, 15초 분량의 "어린 시절의 사계절" 힐링 오프닝 제작.',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: '영상1의 오디오를 참조하고, 이미지1-5를 영감 소스로 활용하여 감성적인 영상 한 편을 자유롭게 제작.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 영상 연장',
              level: 4,
              cases: [
                {
                  prompt: '영상 15초 연장, @이미지1, @이미지2의 당나귀가 오토바이를 타는 이미지를 참조하여 기발한 광고 보충.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: '영상을 6초 연장, 일렉트릭 기타의 열정적인 음악이 나오고, 영상 중간에 "JUST DO IT" 광고 폰트가 나타남.',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: '@영상1을 15초 연장. 1-5초: 빛과 그림자가 블라인드를 통해 나무 테이블과 컵 표면 위를 천천히 지나감.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: '앞으로 10초 연장, 따뜻한 오후 햇살 속에서 카메라가 먼저 미풍에 펄럭이는 거리 모퉁이의 차양막부터 시작.',
                  duration: '10s',
                  label: '해바라기 스쿠터',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 더 정확한 음색, 더 사실적인 사운드',
              level: 4,
              cases: [
                {
                  prompt: '고정 카메라, 중앙 어안 렌즈가 원형 구멍을 통해 아래를 내려다봄.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: '제공된 오피스 빌딩 홍보 사진을 기반으로, 15초 영화급 사실적 스타일의 부동산 다큐멘터리 생성.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: '"고양이와 강아지의 토크쇼"에서의 한 토크 대화. 감정이 풍부하고 스탠드업 코미디 공연에 부합해야 함.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: '예극(豫劇) 경전 장면 "참미안(鍘美案)"의 반주가 울려 퍼짐.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: '15초 MV 영상 생성. 키워드: 안정적 구도 / 부드러운 줌인아웃 / 로우앵글 영웅 느낌 / 다큐멘터리적이면서 고급스러움.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: '화면 중앙의 모자를 쓴 소녀가 부드럽게 노래하며 "I\'m so proud of my family!"라고 말함.',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: '고정 카메라. 서 있는 건장한 남자(대장)가 주먹을 쥐고 팔을 휘두르며 스페인어로 말한다: "3분 후 기습!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3초: 오프닝에서 알람 시계가 울리고, 흐릿한 화면 속에 이미지1이 나타남.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: '@이미지1의 원숭이가 밀크티 가게 카운터로 걸어가고, 카메라가 뒤에서 따라감.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: '과학 교양 스타일과 음색으로 이미지1의 내용을 연출.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 장면 연속성(원테이크) 강화',
              level: 4,
              cases: [
                {
                  prompt: '@이미지1-5, 원테이크 추적 카메라, 거리에서 러너를 따라 계단을 오르고, 복도를 지나, 옥상에 도달하여 도시를 내려다봄.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: '@이미지1을 첫 프레임으로, 화면이 비행기 창문 밖으로 확대.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: '첩보 영화 스타일, @이미지1을 첫 프레임으로, 카메라가 정면에서 빨간 코트를 입은 여성 첩보원을 추적 촬영.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: '@이미지1 외부 경관의 카메라에서, 1인칭 주관 시점으로 빠르게 목조 오두막 안으로 줌인.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@이미지1-5, 주관 시점 원테이크 스릴 넘치는 롤러코스터 장면.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 영상 편집 실용성 향상',
              level: 4,
              description: '때로는 이미 영상이 있어서 처음부터 이미지를 찾거나 다시 만들고 싶지 않고, 단지 일부 동작을 조정하거나, 몇 초 연장하거나, 캐릭터 연기를 더 원하는 방향에 가깝게 하고 싶을 뿐입니다. 이제 기존 영상을 직접 입력으로 사용하여, 다른 내용을 변경하지 않고 특정 구간, 동작 또는 리듬을 타겟 수정할 수 있습니다.',
              cases: [
                {
                  prompt: '@영상1의 줄거리를 뒤집어, 남자의 눈빛이 온화한 것에서 순식간에 차갑고 무자비하게 변함.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: '@영상1의 전체 줄거리를 뒤집어. 0-3초 화면: 양복 남자가 바에 앉아 있음.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: '영상1의 여자 보컬을 이미지1의 남자 보컬로 교체, 동작은 원본 영상을 완전히 모방.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: '영상1의 여자 헤어스타일을 빨간 긴 머리로 변경, 이미지1의 백상아리가 천천히 떠오름.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: '영상1 카메라 오른쪽으로 패닝, 치킨집 사장이 바쁘게 줄 선 손님에게 치킨을 건네줌.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 음악 비트 싱크 가능',
              level: 4,
              cases: [
                {
                  prompt: '포스터의 여성이 끊임없이 의상을 교체하며, 의상은 @이미지1@이미지2의 스타일을 참조.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: '음악 비트 싱크',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: '@이미지1-7의 이미지를 @영상의 키프레임에 맞춰 비트 싱크.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: '@이미지1-6의 풍경 장면 이미지를 @영상의 화면 리듬에 맞춰 비트 싱크.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8초 지적 두뇌 대결식 전투 애니메이션 장면, 복수 테마에 부합.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 감정 연기 향상',
              level: 4,
              cases: [
                {
                  prompt: '@이미지1의 여자가 거울 앞으로 걸어가서 거울 속 자신을 바라보다가, 잠시 생각에 잠긴 후 갑자기 무너지며 비명을 지름.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: '이것은 레인지후드 광고입니다. @이미지1을 첫 프레임으로, 여성이 우아하게 요리하고 있음.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@이미지1을 첫 프레임으로, 카메라가 회전하며 클로즈업, 인물이 갑자기 고개를 들고 크게 포효하기 시작.',
                  inputImages: [`${CDN}/image_325.png`, `${CDN}/image_326.png`, `${CDN}/image_327.png`, `${CDN}/image_328.png`],
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
    title: '마지막으로 한마디',
    content: [
      'Seedance 2.0의 멀티모달 기능은 계속 진화하고 있으며, 더 많은 입력 조합 방식을 지원하도록 지속적으로 업데이트할 예정입니다. 이 사용 매뉴얼이 여러분의 창작 자유에 도움이 되길 바랍니다!',
      '버그를 발견하셨거나, 사용법 제안이나 필요한 기능이 있으시면 댓글, DM으로 알려주세요! 지속적으로 최적화하여 즈멍을 여러분이 정말 즐겁고 편리하게 사용할 수 있는 생산성 도구로 만들어 가겠습니다.',
    ],
  },
};
