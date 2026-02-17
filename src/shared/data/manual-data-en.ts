import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Seedance 2.0 is Now Live on JiMeng! Kill the Game!',
    intro: [
      'Ever since the days when we could only "tell stories" with text and first/last frames, we\'ve dreamed of building a video model that truly understands what you want to express. Today, it\'s finally here!',
      'JiMeng Seedance 2.0 now supports four input modalities — image, video, audio, and text — giving you richer ways to express yourself with more controllable generation.',
      'You can use an image to set the visual style, a video to define character motion and camera movement, a few seconds of audio to establish rhythm and atmosphere... combine these with text prompts to make your creative process more natural, more efficient, and more like being a real "director."',
      'In this upgrade, "reference capability" is the biggest highlight:',
    ],
    highlights: [
      'Reference images can precisely reproduce composition, character details',
      'Reference videos support camera language, complex motion rhythms, and creative effects replication',
      'Videos support smooth extension and continuation, generating consecutive shots based on user prompts — not just generating, but "keep shooting"',
      'Editing capabilities are also enhanced, supporting character replacement, removal, and addition in existing videos',
    ],
  },
  params: [
    { key: 'Image Input', value: '≤ 9 images' },
    { key: 'Video Input', value: '≤ 3 videos, total duration no more than 15s (reference videos cost a bit more)' },
    { key: 'Audio Input', value: 'Supports MP3 upload, ≤ 3 files, total duration no more than 15s' },
    { key: 'Text Input', value: 'Natural language' },
    { key: 'Generation Duration', value: '≤ 15s, freely selectable from 4-15s' },
    { key: 'Sound Output', value: 'Built-in sound effects / background music' },
  ],
  paramsNote: 'Interaction limit: The current maximum for mixed input is 12 files total. We recommend prioritizing uploads that have the greatest impact on visuals or rhythm, and allocating file counts wisely across different modalities.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 supports "First/Last Frame" and "Universal Reference" entry points. Smart Multi-Frame and Subject Reference cannot be selected. If you only upload a first frame image + prompt, you can use the First/Last Frame entry; for multimodal (image, video, audio, text) combined input, use the Universal Reference entry.',
      'The current interaction method uses "@material-name" to specify the purpose of each image, video, and audio. For example: @Image1 as first frame, @Video1 reference camera language, @Audio1 for background music.',
    ],
    steps: [
      {
        title: 'Main Interface',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Entry: Seedance 2.0 - Universal Reference / First & Last Frame', 'Open local file dialog', 'Select files and add to input box'],
      },
      {
        title: 'How to Use @ in Universal Reference Mode',
        description: 'Method 1: Type "@" to invoke reference',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['Type "@"', 'Select reference, drops into input box', 'Enter prompt'],
      },
      {
        title: 'Method 2: Click the "@" parameter tool to invoke reference',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['Click "@" to select reference', 'Enter prompt'],
      },
    ],
    previewNote: 'After uploading materials, images, videos, and audio all support hover preview.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'Below are some use cases and creative approaches for different scenarios, to help you better understand how Seedance 2.0 has improved in generation quality, control capabilities, and creative expression. If you\'re not sure where to start, check out these examples for inspiration!',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Significantly Enhanced Fundamentals: More Stable, Smoother, More Realistic!',
      level: 2,
      description: 'Beyond multimodality, Seedance 2.0 has made significant improvements at the foundational level — physics are more realistic, motions are more natural and fluid, instruction comprehension is more precise, and style consistency is more stable. It can now reliably handle complex actions, continuous motion, and other challenging generation tasks, making overall video output more realistic and smoother. This is a comprehensive evolution of core capabilities!',
      cases: [
        {
          prompt: 'A girl elegantly hanging laundry, after hanging one piece she reaches into the basket for another, giving it a firm shake.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'The character in the painting has a guilty expression, eyes darting left and right as they peek out of the frame, quickly reaching out to grab a cola and take a sip, then showing a look of pure satisfaction. Then footsteps are heard, and the character hurriedly puts the cola back. A cowboy picks up the cola and walks away. Finally the camera pushes in as the screen fades to black with only a spotlight illuminating a canned cola, with stylish subtitles appearing at the bottom: "Yi Kou Cola — A Taste Not to Be Missed!"',
          label: 'Ultra Realism',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'Camera slowly pulls back (revealing the full street view) and follows the heroine as she walks along a 19th-century London street, the wind ruffling her skirt. A steam-powered car comes speeding from the right side of the street, rushing past her — the gust lifts her skirt and she gasps in shock, quickly pressing it down with both hands. Background sounds include footsteps, crowd noise, and car sounds.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'Camera follows a man in black sprinting away, a crowd chasing behind him. Camera switches to a side tracking shot as he panics and crashes into a fruit stand, scrambles to his feet and keeps running. Sounds of a frantic crowd.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Comprehensive Multimodal Upgrade: Video Creation Enters the "Free Combination" Era!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Introduction to Seedance 2.0 Multimodal',
          level: 3,
          description: 'Seedance 2.0 = Multimodal Reference (reference anything) + Strong Creative Generation + Precise Instruction Response (excellent comprehension)\n\nSupports uploading text, images, videos, and audio — all of which can be used as subjects or references. You can reference anything\'s motion, effects, style, camera movement, characters, scenes, and sound. As long as your prompt is clear, the model can understand it.\n\nJust describe the visuals and actions you want in natural language — be clear about whether it\'s a reference or an edit. When you have multiple materials, we recommend double-checking that each @reference is properly labeled so images, videos, and characters don\'t get mixed up.',
        },
        {
          id: 'special-usage',
          title: '2.2 Special Usage Patterns (No Limits, Just Suggestions)',
          level: 3,
          description: 'Have a first/last frame image? Also want to reference video actions?\n→ Write it clearly in the prompt, e.g.: "@Image1 as first frame, reference @Video1\'s fighting actions"\n\nWant to extend an existing video?\n→ Specify the extension duration, e.g. "Extend @Video1 by 5s". Note: the selected generation duration should be for the "new portion" only.\n\nWant to merge multiple videos?\n→ Describe the composition logic in the prompt, e.g.: "I want to add a scene between @Video1 and @Video2, with content about xxx"\n\nNo audio files? You can directly reference the sound from a video.\n\nWant to generate continuous action?\n→ Add continuity descriptions to the prompt, e.g.: "The character transitions from a jump directly into a roll, keeping the motion smooth and fluid" @Image1 @Image2 @Image3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Those Persistently Difficult Video Problems? Now Actually Solvable!',
          level: 3,
          description: 'Making videos always comes with headaches: faces changing mid-shot, motions not matching, unnatural video extensions, editing that throws off the entire rhythm... This multimodal upgrade tackles all these "long-standing pain points" at once. Below are specific use cases.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Comprehensive Consistency Improvement',
              level: 4,
              description: 'You\'ve probably experienced these frustrations: characters looking different between shots, product details getting lost, small text becoming blurry, scene jumps, inconsistent camera styles... These common consistency issues in creative work can now all be resolved in 2.0. From faces to clothing to font details, overall consistency is more stable and accurate.',
              cases: [
                {
                  prompt: 'The man @Image1 walks tiredly down a hallway after work, his steps slowing, finally stopping at his front door. Close-up on his face — he takes a deep breath, adjusts his emotions, lets go of the negativity and relaxes. Then a close-up of him fishing out his keys, inserting them into the lock. After entering, his little daughter and a pet dog run over joyfully to greet him with hugs. The interior is very warm and cozy. Natural dialogue throughout.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Replace the woman in @Video1 with a Chinese opera huadan performer on an elaborate stage. Reference @Video1\'s camera work and transitions, matching the camera to the character\'s movements for ultimate stage beauty and enhanced visual impact.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Reference all transitions and camera movements from @Video1, one continuous take, starting with a chess game.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2 seconds: Rapid four-panel flash cuts — red, pink, purple, and leopard-print bows each frozen in frame.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Create a commercial-style showcase of the handbag in @Image2. The side of the bag references @Image1, the surface texture references @Image3. All bag details should be displayed. Grand and majestic background music.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: 'Use @Image1 as the first frame. First-person perspective, reference @Video1\'s camera movements. Upper scene references @Image2, left scene references @Image3, right scene references @Image4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'First Frame Camera Work',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Camera Movement Replication',
              level: 4,
              description: 'Previously, getting the model to mimic cinematic blocking, camera work, or complex actions required either writing extremely detailed prompts or was simply impossible. Now, just upload a reference video and you\'re set.',
              cases: [
                {
                  prompt: 'Reference the man\'s appearance from @Image1, he is in the elevator from @Image2, fully replicate all camera movements and the protagonist\'s facial expressions from @Video1.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Reference the man\'s appearance from @Image1, he is in the corridor from @Image2, fully replicate all camera movements from @Video1.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'The tablet from @Image1 as the main subject, camera movements reference @Video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Focus Rotation',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'The female star from @Image1 as the main subject, reference @Video1\'s camera style for rhythmic push-pull-pan movements.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Push-Pull Dance',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Reference @Image1 @Image2 for the spear-wielding character, @Image3 @Image4 for the dual-blade character. Mimic @Video1\'s actions, fighting in the maple leaf forest from @Image5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Reference Video1\'s character actions, reference Video2\'s orbiting camera language, generate a fighting scene between Character 1 and Character 2.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Reference Video1\'s camera movements and scene transition rhythm, replicate using the red supercar from Image1.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Car Camera Work',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Creative Templates / Precise Complex Effects Replication',
              level: 4,
              description: 'Beyond generating images and writing stories, Seedance 2.0 also supports "follow-the-reference" — creative transitions, finished ads, film clips, complex edits. As long as you have reference images or videos, the model can identify action rhythms, camera language, visual structure, and precisely replicate them.',
              cases: [
                {
                  prompt: 'Replace the person in @Video1 with @Image1. @Image1 as first frame, the person wearing virtual sci-fi glasses. Reference @Video1\'s camera work.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Reference the model\'s facial features from the first image. The model wears the outfits from reference images 2-6 while approaching the camera.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Reference the video\'s ad concept, use the provided down jacket images with ad copy to generate a new down jacket commercial.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Black and white ink wash style. The character from @Image1 references @Video1\'s effects and movements, performing a segment of ink wash tai chi kung fu.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Replace the first frame character in @Video1 with @Image1, fully reference @Video1\'s effects and movements.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Outfit Change',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Starting from the ceiling in @Image1, reference @Video1\'s jigsaw-shattering effect for the transition.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Open with a black screen, reference Video1\'s particle effects and material, golden gilded sand particles.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'AE Intro',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'The character from @Image1 references @Video1\'s actions and expression changes, showcasing an exaggerated instant noodle eating performance.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Model Creativity and Story Completion',
              level: 4,
              cases: [
                {
                  prompt: 'Animate @Image1 as a comic strip, reading left to right, top to bottom.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'Reference the storyboard from @Image1, create a 15s healing-style opening sequence about "The Four Seasons of Childhood."',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Reference Video1\'s audio, use Images 1-5 as inspiration to create an emotion-driven video.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Video Extension',
              level: 4,
              cases: [
                {
                  prompt: 'Extend 15s of video. Reference the donkey-riding-motorcycle character from @Image1 and @Image2, add a whimsical ad segment.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Extend the video by 6s. An intense electric guitar riff kicks in, with "JUST DO IT" ad text appearing in the center of the video.',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: 'Extend @Video1 by 15 seconds. 1-5 seconds: Light and shadow slowly glide through venetian blinds across the wooden table and cup.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Extend backward by 10s. In the warm afternoon light, the camera begins at the row of awnings on the street corner, gently fluttering in the breeze.',
                  duration: '10s',
                  label: 'Sunflower Scooter',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 More Accurate Tone, More Realistic Sound',
              level: 4,
              cases: [
                {
                  prompt: 'Fixed camera, center fisheye lens peering downward through a circular opening.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'Based on the provided office building promotional photos, generate a 15-second cinematic-realistic style real estate documentary.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'A roast-style dialogue in the "Cat & Dog Roast Room," with rich emotions matching a stand-up comedy performance.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'The opening instrumental of the classic Yu Opera segment "The Case of Chen Shimei" begins to play.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Generate a 15-second music video. Keywords: steady composition / gentle push-pull / low-angle heroic feel / documentary but premium.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'The girl with a hat in the center of frame gently sings "I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Fixed camera. The standing muscular man (captain) clenches his fist, waves his arm and says in Spanish: "Assault in three minutes!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 seconds: Opening with an alarm clock ringing, the blurry image fades in to reveal Image 1.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'The monkey from @Image1 walks toward the bubble tea shop counter, camera following behind him.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'In a science-explainer style and tone, bring the content of Image 1 to life.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Stronger Shot Continuity (One-Take Shots)',
              level: 4,
              cases: [
                {
                  prompt: '@Image1-5, a continuous one-take tracking shot, following a runner from the street up stairs, through a corridor, onto the rooftop, finally overlooking the city.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: 'Starting with @Image1 as the first frame, the view zooms out to outside an airplane window.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Spy thriller style. @Image1 as the first frame, camera tracking the female spy in a red trench coat from the front.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'From the exterior shot of @Image1, first-person POV with a fast push into the wooden cabin interior.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@Image1-5, a thrilling roller coaster ride from a first-person POV in one continuous take.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Highly Usable Video Editing',
              level: 4,
              description: 'Sometimes you already have a video and don\'t want to start over finding images or rebuilding from scratch — you just want to tweak a motion segment, extend a few seconds, or make a character\'s performance better match your vision. Now you can directly use existing video as input and make targeted modifications to specific segments, actions, or rhythms without changing anything else.',
              cases: [
                {
                  prompt: 'Subvert the storyline in @Video1 — the man\'s gaze shifts from tender to ice-cold and ruthless.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Subvert the entire storyline of @Video1. 0-3 seconds: A man in a suit sits at a bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Replace the female lead singer in Video1 with the male lead singer from Image1, movements fully mimicking the original video.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Change the woman\'s hairstyle in Video1 to long red hair. The great white shark from Image1 slowly emerges.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'Video1 camera pans right, the fried chicken shop owner busily hands fried chicken to customers in line.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Music Beat Syncing',
              level: 4,
              cases: [
                {
                  prompt: 'The girl in the poster keeps changing outfits, clothing styles reference @Image1 and @Image2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Music Beat Sync',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'Images from @Image1-7 sync to keyframes in @Video\'s visuals for beat-matching.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'Scenic landscape images from @Image1-6, synced to @Video\'s visual rhythm for beat-matching.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8-second strategic-battle anime clip, matching a revenge theme.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Better Emotional Performance',
              level: 4,
              cases: [
                {
                  prompt: 'The woman from @Image1 walks to a mirror, looks at her reflection, pauses in thought, then suddenly breaks down screaming.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'This is a range hood commercial. @Image1 as the first frame, a woman elegantly cooking.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@Image1 as the first frame, camera rotates and pushes in, the character suddenly looks up and begins roaring.',
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
    title: 'A Few Final Words',
    content: [
      'Seedance 2.0\'s multimodal capabilities are continuously evolving. We will keep updating features and supporting more input combination methods. We hope this user manual helps you unleash your creativity more freely!',
      'If you encounter any bugs, or have usage suggestions or scenario requests, feel free to leave a comment, send a message, or shout it from the rooftops! We\'ll keep optimizing and work together to make JiMeng a tool that truly brings you joy and productivity.',
    ],
  },
};
