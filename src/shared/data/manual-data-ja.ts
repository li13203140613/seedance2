import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: '動画 Seedance 2.0 がJiMengに正式リリース！Kill the game！',
    intro: [
      'テキストと最初/最後のフレームだけで「ストーリーを語る」ことしかできなかったあの日から、私たちはあなたの表現を本当に理解できる動画モデルを作りたいと思っていました。そして今日、ついに実現しました！',
      'JiMeng Seedance 2.0 は画像・動画・音声・テキストの4つのモダリティ入力に対応し、表現方法がより豊かになり、生成のコントロール性も向上しました。',
      '1枚の画像で画面のスタイルを決め、1本の動画でキャラクターの動きやカメラワークを指定し、数秒の音声でリズムや雰囲気を演出……プロンプトと組み合わせることで、制作プロセスがより自然で効率的になり、まさに本物の「監督」のような体験ができます。',
      '今回のアップグレードで、「参照機能」が最大の目玉です：',
    ],
    highlights: [
      '参照画像で画面構図やキャラクターの細部を精密に再現',
      '参照動画でカメラワーク、複雑なアクションリズム、クリエイティブエフェクトの再現に対応',
      '動画のスムーズな延長・接続に対応し、ユーザーの指示に基づいて連続カットを生成可能。生成するだけでなく「続きを撮る」こともできます',
      '編集機能も同時に強化され、既存動画のキャラクター差し替え・削除・追加に対応',
    ],
  },
  params: [
    { key: '画像入力', value: '9枚以下' },
    { key: '動画入力', value: '3本以下、合計再生時間15s以内（参照動画がある場合は少し高くなります）' },
    { key: '音声入力', value: 'MP3アップロード対応、3ファイル以下、合計再生時間15s以内' },
    { key: 'テキスト入力', value: '自然言語' },
    { key: '生成時間', value: '15s以内、4〜15sの間で自由に選択可能' },
    { key: '音声出力', value: '効果音/BGM自動付与' },
  ],
  paramsNote: 'インタラクション制限：現在サポートされている混合入力の合計上限は12ファイルです。画面やリズムに最も影響を与える素材を優先的にアップロードし、各モダリティのファイル数を適切に配分することをお勧めします。',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 は「先頭/末尾フレーム」と「万能参照」の入口に対応しています。スマートマルチフレームとサブジェクト参照は選択できません。先頭フレーム画像＋プロンプトのみをアップロードする場合は先頭/末尾フレーム入口を使用できます。マルチモーダル（画像・動画・音声・テキスト）の組み合わせ入力が必要な場合は、万能参照入口に進んでください。',
      '現在サポートされているインタラクション方式は「@素材名」で各画像・動画・音声の用途を指定する方法です。例：@画像1 を先頭フレームとして使用、@動画1 のカメラワークを参照、@音声1 をBGMとして使用',
    ],
    steps: [
      {
        title: 'メインインターフェース',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['入口：Seedance 2.0 - 万能参照/先頭末尾フレーム', 'ローカルファイル選択ダイアログを開く', 'ファイルを選択し、入力欄に追加'],
      },
      {
        title: '万能参照モードでの@の使い方',
        description: '方法1：「@」を入力して参照呼び出し',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['「@」を入力', '参照を選択し、入力欄に配置', 'プロンプトを入力'],
      },
      {
        title: '方法2：パラメータツールの「@」をクリックして参照呼び出し',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['「@」をクリックして参照を選択', 'プロンプトを入力'],
      },
    ],
    previewNote: '素材をアップロードすると、画像・動画・音声すべてホバープレビューに対応しています。',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: '以下は、さまざまなシーンでの使い方や活用法です。Seedance 2.0 の生成品質・制御能力・クリエイティブ表現の進化をより深く理解するのに役立ちます。どこから始めればいいかわからない方は、まずこれらの例を見てインスピレーションを得てみてください〜',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. 基礎能力が大幅に強化：より安定、よりスムーズ、よりリアルに！',
      level: 2,
      description: 'マルチモーダルだけではありません。Seedance 2.0 は基礎レベルで大幅に強化されています。物理法則がより合理的に、動作表現がより自然でスムーズに、指示理解がより正確に、スタイル維持がより安定しました。複雑な動作や連続運動などの高難度な生成タスクを安定して完了できるだけでなく、全体的な動画効果がよりリアルでスムーズになり、基盤能力の全面的な進化を遂げました！',
      cases: [
        {
          prompt: '女の子が優雅に洗濯物を干していて、干し終わったら桶からもう一枚取り出し、力強く衣服を振る。',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: '絵の中の人物がそわそわした表情で、目を左右にキョロキョロさせてから絵のフレームから顔を覗かせ、素早く手をフレームの外に伸ばしてコーラを掴んで一口飲み、満足げな表情を浮かべる。その時足音が聞こえ、絵の中の人物は急いでコーラを元の場所に戻す。すると西部のカウボーイがやってきてカップのコーラを持って去っていく。最後にカメラが前進し、画面が徐々に真っ黒な背景になり、トップライトだけが照らす缶入りコーラが映し出され、画面下部にアート感のある字幕とナレーション：「イーコウコーラ、飲まずにはいられない！」',
          label: '超リアル感',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'カメラが少しズームアウト（街並みの全景を映す）しながら主人公の女性を追い、風が彼女のスカートの裾を揺らしている。主人公は19世紀のロンドンの大通りを歩いている。歩いていると右側の通りから蒸気自動車が走ってきて、主人公のそばを素早く通り過ぎ、風でスカートの裾がめくれあがり、主人公は驚いて慌てて両手でスカートを押さえる。背景音は足音、群衆の声、車の音など。',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'カメラが黒い服の男を追いかけ、後ろから大勢が追いかけてくる。カメラが横からの追跡撮影に切り替わり、人物は慌てて路上のフルーツ屋台にぶつかって倒れ、起き上がって逃げ続ける。群衆の騒然とした声。',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. マルチモーダル全面アップグレード：動画制作が「自由な組み合わせ」の時代へ！',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Seedance 2.0 マルチモーダル紹介',
          level: 3,
          description: 'Seedance 2.0 = マルチモーダル参照機能（あらゆるものを参照可能） + 強力なクリエイティブ生成 + 正確な指示応答（理解力が優秀）\n\nテキスト・画像・動画・音声のアップロードに対応しており、これらの素材はすべて使用対象または参照対象として利用できます。あらゆるコンテンツの動作・エフェクト・形式・カメラワーク・人物・シーン・音声を参照できます。プロンプトが明確に書かれていれば、モデルはすべて理解できます。\n\n自然言語であなたが望む画面や動作を記述するだけでOKです。参照なのか編集なのかを明確にしてください〜素材が多い場合は、各@オブジェクトが正しくラベル付けされているか確認することをお勧めします。画像・動画・キャラクターを混同しないようにしましょう。',
        },
        {
          id: 'special-usage',
          title: '2.2 特殊な使い方（制限なし、参考まで）',
          level: 3,
          description: '先頭/末尾フレーム画像がある場合、さらに参照動画のアクションも参照したい？\n→ プロンプトに明確に記述してください。例：「@画像1を先頭フレームとして使用し、@動画1の格闘アクションを参照」\n\n既存の動画を延長したい場合\n→ 延長時間を明記してください。例：「@動画1を5s延長」。注意：この場合、選択する生成時間は「追加部分」の長さです。\n\n複数の動画を融合したい場合\n→ プロンプトに合成ロジックを説明してください。例：「@動画1と@動画2の間にシーンを追加したい、内容はxxxです」\n\n音声素材がない場合、動画の音声を直接参照できます。\n\n連続アクションを生成したい場合\n→ プロンプトに連続性の記述を追加できます。例：「キャラクターがジャンプからそのまま回転に移行し、動作の連続性と滑らかさを維持」@画像1@画像2@画像3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 これまで難しかった動画の問題が、今は本当に解決できます！',
          level: 3,
          description: '動画制作では頭を悩ませることがよくあります。例えば、人物の顔が変わってしまう、動きが似ていない、動画の延長が不自然、編集しているうちにリズム全体が変わってしまう……今回のマルチモーダル機能で、これらの「長年の難題」を一気に解決できます。以下が具体的な使用例です。',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 一貫性の全面的な向上',
              level: 4,
              description: 'こんな悩みはありませんか？画面の中の人物が前後で違って見える、商品の細部が失われる、小さな文字がぼやける、シーンが急に変わる、カメラのスタイルを統一できない……こうした制作でよくある一貫性の問題が、2.0ではすべて解決されています。顔から服装、フォントの細部まで、全体的な一貫性がより安定し、より正確になりました。',
              cases: [
                {
                  prompt: '男性@画像1が仕事帰りに疲れた様子で廊下を歩き、足取りが遅くなり、最後に自宅のドアの前で立ち止まる。顔のクローズアップ、男性が深呼吸して気持ちを整え、ネガティブな感情を収めてリラックスした表情になる。それからクローズアップで鍵を探し出し、鍵穴に差し込む。家に入ると、小さな娘とペットの犬が嬉しそうに駆け寄ってきて抱きつく。室内はとても温かい雰囲気で、全編自然な会話。',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: '@動画1の中の女性を京劇の花旦に差し替え、シーンは精緻な舞台の上で、@動画1のカメラワークとトランジション効果を参照し、カメラで人物の動きに合わせ、究極の舞台美を演出し、視覚的インパクトを高める。',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: '@動画1のすべてのトランジションとカメラワークを参照し、ワンカット撮影で、画面は将棋の対局からスタート。',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0〜2秒の画面：高速4コマフラッシュカット、赤・ピンク・紫・レオパード柄の4種類のリボンが順番に静止画で表示。',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: '@画像2のバッグを商業的な映像演出で紹介し、バッグの側面は@画像1を参照、バッグの表面素材は@画像3を参照。バッグの細部をすべて見せることが求められ、壮大で荘厳なBGM。',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: '@画像1を画面の先頭フレームとし、一人称視点で、@動画1のカメラワーク効果を参照し、上方のシーンは@画像2を参照、左側のシーンは@画像3を参照、右側のシーンは@画像4を参照。',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: '先頭フレームカメラワーク',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 カメラワークの再現',
              level: 4,
              description: '以前は映画のような動き・カメラワーク・複雑なアクションをモデルに模倣させようとすると、大量の詳細なプロンプトを書くか、そもそも実現不可能でした。しかし今は、参照動画を1本アップロードするだけで済みます。',
              cases: [
                {
                  prompt: '@画像1の男性の外見を参照し、@画像2のエレベーターの中で、@動画1のすべてのカメラワーク効果と主人公の表情を完全に参照。',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: '@画像1の男性の外見を参照し、@画像2の廊下の中で、@動画1のすべてのカメラワーク効果を完全に参照。',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: '@画像1のタブレットを主体とし、カメラワークは@動画1を参照。',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'フォーカス回転',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: '@画像1の女優を主体とし、@動画1のカメラワーク方式を参照してリズミカルなプッシュ・プル・パン・ドリーを行う。',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'プッシュプルダンス',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: '@画像1@画像2の長槍キャラクター、@画像3@画像4の双刀キャラクターを参照し、@動画1の動きを模倣して、@画像5の紅葉の森の中で戦闘。',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: '参照動画1の人物の動作を参照し、参照動画2の回り込みカメラワークの映像言語で、キャラクター1とキャラクター2の格闘シーンを生成。',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: '動画1のカメラワーク・画面切り替えリズムを参照し、画像1の赤いスーパーカーで再現。',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: '自動車カメラワーク',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 クリエイティブテンプレート / 複雑エフェクトの精密再現',
              level: 4,
              description: '画像生成やストーリー作成だけではありません。Seedance 2.0 は「お手本通りに模倣する」ことにも対応しています。クリエイティブなトランジション、広告完成動画、映画のワンシーン、複雑な編集でも、参照画像や動画があれば、モデルがアクションリズム・カメラワーク・ビジュアル構造を認識し、精密に再現します。',
              cases: [
                {
                  prompt: '@動画1の人物を@画像1に差し替え、@画像1を先頭フレームとし、人物にバーチャルSFゴーグルを装着させ、@動画1のカメラワークを参照。',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: '1枚目の画像のモデルの顔立ちを参照。モデルが2〜6枚目の参照画像の衣装を着てカメラに近づく。',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: '参照動画の広告クリエイティブを参考に、提供されたダウンジャケットの画像を使い、広告コピーを付けて新しいダウンジャケットの広告動画を生成。',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: '白黒水墨画スタイル、@画像1の人物が@動画1のエフェクトと動作を参照し、水墨太極拳を演じる。',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: '@動画1の先頭フレームの人物を@画像1に差し替え、@参照動画1のエフェクトと動作を完全に参照。',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: '衣装チェンジ',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: '@画像1の天井から始まり、@動画1のパズル崩壊エフェクトを参照してトランジション。',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: '黒い画面から始まり、動画1のパーティクルエフェクトと質感を参照し、金色の流金質感の砂粒。',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'AEオープニング',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: '@画像1の人物が@動画1の中の動作と表情変化を参照し、カップ麺を食べるシュールな行動を演出。',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 モデルの創造性・ストーリー補完能力',
              level: 4,
              cases: [
                {
                  prompt: '@画像1を左から右、上から下の順番で漫画として演出。',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: '@画像1の番組の絵コンテを参考に、「少年時代の四季」をテーマにした15秒の癒し系オープニングを制作。',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: '動画1の音声を参照し、画像1〜5をインスピレーションとして、感情表現を重視した映像を自由に展開。',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 動画の延長',
              level: 4,
              cases: [
                {
                  prompt: '15sに動画を延長し、@画像1・@画像2のロバがバイクに乗っている姿を参照して、ぶっ飛んだ広告を追加。',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: '動画を6s延長し、エレキギターの熱い音楽が流れ、動画の中央に「JUST DO IT」の広告フォントが出現。',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: '@動画1を15秒延長。1〜5秒：光と影がブラインド越しに木のテーブルやカップの表面をゆっくりと滑っていく。',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: '前方に10s延長、温かい午後の光の中、カメラはまず街角の微風に揺れる日除けから始まる。',
                  duration: '10s',
                  label: 'ひまわりスクーター',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 音色がより正確に、音声がよりリアルに',
              level: 4,
              cases: [
                {
                  prompt: '固定カメラ、中央の魚眼レンズで円形の穴を通して下を覗き込む。',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: '提供されたオフィスビルのプロモーション写真を元に、15秒の映画級リアリスティックスタイルの不動産ドキュメンタリーを生成。',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: '「犬猫ツッコミ部屋」でのツッコミ対話。感情豊かで、スタンダップコメディのパフォーマンスに合った表現が求められる。',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: '豫劇の名場面《鍘美案》の伴奏が流れ始める。',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: '15秒のMV動画を生成。キーワード：安定した構図 / 軽いプッシュプル / ローアングルのヒーロー感 / ドキュメンタリーだが上質',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: '画面中央の帽子をかぶった女の子が優しく歌いながら「I\'m so proud of my family!」と言う。',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: '固定カメラ。立っている大柄な男（隊長）が拳を握り腕を振りながらスペイン語で「3分後に突入だ！」と言う。',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0〜3秒：冒頭で目覚まし時計が鳴り、画面がぼんやりとした中に画面1が映し出される。',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: '@画像1のサルがタピオカ店のカウンターに向かって歩き、カメラが背後から追従。',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: '科学解説風のスタイルと声色で、画像1の内容を映像化。',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 カメラの連続性（ワンカット撮影）がさらに強力に',
              level: 4,
              cases: [
                {
                  prompt: '@画像1〜5、ワンカットの追跡ショットで、街頭からランナーを追いかけて階段を上り、廊下を抜け、屋上に出て、最終的に都市を見下ろす。',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: '@画像1を先頭フレームとし、画面が飛行機の窓の外にズームアップ。',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'スパイ映画風、@画像1を先頭フレーム画面とし、カメラが正面から赤いトレンチコートの女スパイを追跡撮影。',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: '@画像1の外景のカットから、一人称主観視点でカメラが素早く前進して山小屋の中に入る。',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@画像1〜5、主観視点によるワンカットのスリル満点のジェットコースターのカット。',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 動画編集の実用性が高い',
              level: 4,
              description: '既に動画があって、最初から画像を探したり作り直したりせずに、ある部分のアクションを調整したり、数秒延長したり、キャラクターの表現をもっと自分のイメージに近づけたいということがあるでしょう。今なら既存の動画を直接入力として使用し、他のコンテンツを変えずに、特定のセグメント・アクション・リズムをピンポイントで修正できます。',
              cases: [
                {
                  prompt: '@動画1のストーリーを覆し、男性の目つきが優しさから一瞬で冷酷で凶暴なものに変わる。',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: '@動画1のストーリー全体を覆す。0〜3秒の画面：スーツの男がバーに座っている。',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: '動画1の女性ボーカルを画像1の男性ボーカルに差し替え、動作は完全に元の動画を模倣。',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: '動画1の女性の髪型を赤いロングヘアに変更し、画像1の大型ホオジロザメがゆっくりと浮上。',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: '動画1でカメラが右にパンし、フライドチキン店のオーナーが忙しそうにフライドチキンを並んでいる客に手渡す。',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 音楽のビートに合わせた映像制作が可能',
              level: 4,
              cases: [
                {
                  prompt: 'ポスターの女の子が次々と衣装を着替え、衣装は@画像1@画像2のスタイルを参照。',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'ビートシンク',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: '@画像1〜7の画像を@動画のキーフレームに合わせてビートシンク。',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: '@画像1〜6の風景写真を、@動画の画面リズムに合わせてビートシンク。',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8秒の知略バトル式戦闘アニメクリップ、復讐テーマにマッチさせて。',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 感情表現がさらに向上',
              level: 4,
              cases: [
                {
                  prompt: '@画像1の女性が鏡の前に歩いていき、鏡の中の自分を見つめ、しばらく考え込んだ後、突然崩壊して叫び出す。',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'これはレンジフードの広告です。@画像1を先頭フレーム画面として、女性が優雅に料理をしている。',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@画像1を画面の先頭フレームとし、カメラが回転しながらクローズアップ、人物が突然顔を上げて大声で咆哮し始める。',
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
    title: '最後に',
    content: [
      'Seedance 2.0 のマルチモーダル機能は進化し続けています。今後も機能を更新し、より多くの入力組み合わせ方式をサポートしていきます。このユーザーマニュアルがあなたの創造力をより自由に発揮する助けになれば幸いです！',
      'バグを発見した場合や、使い方の提案・ニーズがありましたら、コメント・DM・どんな方法でもお気軽にお知らせください！継続的に最適化を行い、JiMengを皆さんにとって本当に楽しく便利な制作ツールにしていきます。',
    ],
  },
};
