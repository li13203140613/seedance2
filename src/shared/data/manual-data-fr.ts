import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Seedance 2.0 est officiellement disponible sur JiMeng ! Kill the game !',
    intro: [
      'Depuis le jour ou nous ne pouvions raconter des histoires qu\'avec du texte et des images de debut/fin, nous voulions creer un modele video qui comprenne vraiment vos expressions. Aujourd\'hui, il est enfin la !',
      'JiMeng Seedance 2.0 prend desormais en charge quatre types d\'entrees : images, videos, audio et texte, offrant des moyens d\'expression plus riches et un controle plus precis de la generation.',
      'Vous pouvez definir le style visuel avec une image, specifier les mouvements des personnages et les changements de camera avec une video, creer le rythme et l\'ambiance avec quelques secondes d\'audio... Combine avec des prompts, le processus creatif devient plus naturel, plus efficace, et s\'apparente davantage au travail d\'un veritable "realisateur".',
      'Dans cette mise a jour, la "capacite de reference" est le point fort majeur :',
    ],
    highlights: [
      'L\'image de reference permet de reproduire fidelement la composition et les details des personnages',
      'La video de reference prend en charge le langage cinematographique, les rythmes d\'action complexes et la reproduction d\'effets creatifs',
      'Les videos supportent l\'extension fluide et la connexion, permettant de generer des plans continus selon les indications de l\'utilisateur - pas seulement generer, mais aussi "continuer a filmer"',
      'Les capacites d\'edition sont egalement renforcees, avec le remplacement, la suppression et l\'ajout de personnages dans les videos existantes',
    ],
  },
  params: [
    { key: 'Entree d\'images', value: '9 maximum' },
    { key: 'Entree de videos', value: '3 maximum, duree totale ne depassant pas 15s (un peu plus cher avec des videos de reference)' },
    { key: 'Entree audio', value: 'Upload MP3 pris en charge, 3 maximum, duree totale ne depassant pas 15s' },
    { key: 'Entree de texte', value: 'Langage naturel' },
    { key: 'Duree de generation', value: '15s maximum, choix libre entre 4 et 15s' },
    { key: 'Sortie sonore', value: 'Effets sonores/musique inclus' },
  ],
  paramsNote: 'Limite d\'interaction : la limite totale actuelle d\'entrees mixtes est de 12 fichiers. Il est recommande de telecharger en priorite les materiaux ayant le plus d\'impact sur l\'image ou le rythme, et de repartir judicieusement le nombre de fichiers entre les differentes modalites.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 prend en charge les entrees "Premiere/Derniere image" et "Reference omnipotente". Le multi-images intelligent et la reference de sujet ne sont pas selectionnables. Si vous ne telechargez qu\'une premiere image + prompt, utilisez l\'entree Premiere/Derniere image ; pour des entrees multimodales (image, video, audio, texte), utilisez l\'entree Reference omnipotente.',
      'Le mode d\'interaction actuel consiste a specifier l\'utilisation de chaque image, video et audio via "@nom_du_materiau", par exemple : @image1 comme premiere image, @video1 pour referencer le langage cinematographique, @audio1 pour la musique de fond.',
    ],
    steps: [
      {
        title: 'Interface principale',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Entree : Seedance 2.0 - Reference omnipotente/Premiere et derniere image', 'Ouvrir la boite de dialogue des fichiers locaux', 'Selectionner les fichiers et les ajouter a la zone de saisie'],
      },
      {
        title: 'Comment utiliser @ en mode Reference omnipotente',
        description: 'Methode 1 : Tapez "@" pour invoquer une reference',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['Tapez "@"', 'Selectionnez la reference, inseree dans la zone de saisie', 'Saisissez le prompt'],
      },
      {
        title: 'Methode 2 : Cliquez sur l\'outil parametres "@" pour invoquer une reference',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['Cliquez sur "@" pour selectionner la reference', 'Saisissez le prompt'],
      },
    ],
    previewNote: 'Apres le telechargement des materiaux, les images, videos et audios prennent tous en charge l\'apercu au survol.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'Voici quelques utilisations et astuces dans differents scenarios pour vous aider a mieux comprendre les ameliorations de Seedance 2.0 en termes de qualite de generation, de capacites de controle et d\'expression creative. Si vous ne savez pas par ou commencer, jetez d\'abord un oeil a ces exemples pour trouver l\'inspiration~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Capacites de base considerablement renforcees : plus stable, plus fluide, plus realiste !',
      level: 2,
      description: 'Au-dela du multimodal, Seedance 2.0 est significativement ameliore au niveau fondamental : les lois physiques sont plus coherentes, les mouvements plus naturels et fluides, la comprehension des instructions plus precise, et le maintien du style plus stable. Non seulement il realise de maniere fiable des taches de generation complexes comme les mouvements elabores et continus, mais l\'effet video global est aussi plus realiste et plus lisse. C\'est une evolution complete des capacites de base !',
      cases: [
        {
          prompt: 'Une fille etend elegamment le linge. Apres avoir fini, elle prend un autre vetement dans le seau et le secoue vigoureusement.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'Le personnage dans le tableau a une expression coupable, regarde a gauche et a droite, puis passe la tete hors du cadre. Il tend rapidement la main pour attraper un cola et en prend une gorgee, puis affiche une expression de pure satisfaction. A ce moment, des bruits de pas se font entendre, et le personnage remet precipitamment le cola a sa place. Un cow-boy arrive et emporte le cola. Enfin, la camera avance et l\'ecran devient progressivement noir avec seulement un eclairage zenithal sur une canette de cola. En bas de l\'ecran apparait un sous-titre artistique et une voix off : "Cola delicieux, a ne pas manquer !"',
          label: 'Ultra-realisme',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'La camera dezoome legerement (revelant la vue panoramique de la rue) et suit l\'heroine. Le vent fait flotter sa jupe tandis qu\'elle marche dans les rues de Londres au XIXe siecle. En marchant, un vehicule a vapeur arrive de la rue de droite et passe rapidement devant elle, le vent soulevant sa jupe. L\'heroine, choquee, se precipite pour maintenir sa jupe avec les deux mains. Sons d\'ambiance : pas, foule, vehicules, etc.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'La camera suit l\'homme en noir dans sa fuite rapide, un groupe le poursuit. La camera passe en suivi lateral, le personnage panique renverse un etal de fruits au bord de la route, se releve et continue a fuir. Bruits de foule en panique.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Mise a niveau multimodale complete : la creation video entre dans l\'ere de la "combinaison libre" !',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Introduction au multimodal Seedance 2.0',
          level: 3,
          description: 'Seedance 2.0 = Capacite de reference multimodale (peut tout referencer) + Generation creative puissante + Reponse precise aux instructions (excellente comprehension)\n\nPrend en charge le telechargement de texte, images, videos et audio. Ces materiaux peuvent etre utilises comme objets d\'utilisation ou de reference. Vous pouvez referencer les mouvements, effets speciaux, formats, mouvements de camera, personnages, scenes et sons de n\'importe quel contenu. Tant que le prompt est clair, le modele comprendra.\n\nDecrivez simplement en langage naturel l\'image et les mouvements souhaites. Precisez s\'il s\'agit d\'une reference ou d\'une edition~ Quand il y a beaucoup de materiaux, verifiez bien que chaque @objet est correctement etiquete. Ne confondez pas images, videos et personnages.',
        },
        {
          id: 'special-usage',
          title: '2.2 Usages speciaux (sans limites, a titre indicatif)',
          level: 3,
          description: 'Vous avez une image de premiere/derniere image ? Vous voulez aussi referencer les mouvements d\'une video ?\n-> Ecrivez clairement dans le prompt, par exemple : "@image1 comme premiere image, referencer les mouvements de combat de @video1"\n\nVous voulez prolonger une video existante ?\n-> Precisez la duree de prolongation, par exemple : "Prolonger @video1 de 5s". Note : la duree de generation choisie doit correspondre a la duree de la "partie ajoutee"\n\nVous voulez fusionner plusieurs videos ?\n-> Expliquez la logique de fusion dans le prompt, par exemple : "Je veux ajouter une scene entre @video1 et @video2, le contenu est xxx"\n\nPas de materiau audio ? Vous pouvez directement referencer le son d\'une video\n\nVous voulez generer des mouvements continus ?\n-> Ajoutez une description de continuite dans le prompt, par exemple : "Le personnage passe directement du saut a la roulade, en maintenant des mouvements fluides et continus" @image1@image2@image3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Ces problemes video qui ont toujours ete difficiles sont enfin resolus !',
          level: 3,
          description: 'En creation video, on rencontre toujours des problemes frustrants : le visage change, les mouvements ne correspondent pas, l\'extension video est artificielle, et le rythme general se degrade lors des modifications... Cette mise a jour multimodale resout tous ces "vieux problemes" d\'un coup. Voici les cas d\'utilisation concrets.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Coherence globalement amelioree',
              level: 4,
              description: 'Vous avez peut-etre rencontre ces frustrations : les personnages changent d\'apparence d\'un plan a l\'autre, les details du produit se perdent, les petits textes deviennent flous, les scenes changent brusquement, le style de camera ne peut pas etre unifie... Ces problemes de coherence courants en creation sont desormais resolus dans la version 2.0. Du visage aux vetements en passant par les details typographiques, la coherence globale est plus stable et plus precise.',
              cases: [
                {
                  prompt: 'L\'homme @image1 rentre du travail fatigue, marche dans le couloir, ses pas ralentissent, et il s\'arrete finalement devant sa porte. Gros plan sur le visage, l\'homme prend une grande inspiration, ajuste ses emotions, range ses sentiments negatifs et se detend. Puis gros plan sur la recherche des cles, insertion dans la serrure. En entrant, sa petite fille et un chien de compagnie courent joyeusement pour l\'accueillir et le serrer dans leurs bras. L\'interieur est tres chaleureux, conversation naturelle tout au long.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Remplacer la femme dans @video1 par une actrice d\'opera chinois (huadan), la scene se deroule sur une scene magnifique. Referencer les mouvements de camera et les transitions de @video1, en utilisant la camera pour suivre les mouvements du personnage, pour une esthetique scenique ultime et un impact visuel renforce.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Referencer toutes les transitions et mouvements de camera de @video1, en plan-sequence, en commencant par un echiquier.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2 secondes : flash-cut rapide en quatre cases, quatre noeuds papillon rouge, rose, violet et leopard se figent tour a tour.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Realiser une presentation commerciale du sac de @image2. Le cote du sac reference @image1, la texture de surface reference @image3. Tous les details du sac doivent etre presentes. Musique de fond majestueuse et grandiose.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: 'Utiliser @image1 comme premiere image, vue a la premiere personne, referencer les mouvements de camera de @video1, la scene du haut reference @image2, la scene de gauche reference @image3, la scene de droite reference @image4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Camera premiere image',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Reproduction des mouvements de camera',
              level: 4,
              description: 'Avant, pour faire imiter au modele les deplacements, mouvements de camera ou actions complexes d\'un film, il fallait soit ecrire des tonnes de details dans le prompt, soit c\'etait tout simplement impossible. Maintenant, il suffit de telecharger une video de reference.',
              cases: [
                {
                  prompt: 'Referencer l\'apparence de l\'homme de @image1, il est dans l\'ascenseur de @image2, reproduire entierement tous les mouvements de camera et les expressions faciales du protagoniste de @video1.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Referencer l\'apparence de l\'homme de @image1, il est dans le couloir de @image2, reproduire entierement tous les mouvements de camera de @video1.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'La tablette de @image1 comme sujet principal, mouvements de camera references sur @video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Rotation focale',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'L\'actrice de @image1 comme sujet principal, referencer le style de camera de @video1 pour des mouvements de zoom, travelling et panoramique rythmes.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Danse zoom',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Referencer @image1@image2 pour le personnage a la lance, @image3@image4 pour le personnage aux doubles sabres, imiter les mouvements de @video1, combat dans la foret d\'erables de @image5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Referencer les mouvements des personnages de la video1, referencer le langage cinematographique de rotation de la video2, generer une scene de combat entre le personnage1 et le personnage2.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Referencer les mouvements de camera et le rythme de transition de la video1, reproduire avec la supercar rouge de l\'image1.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Camera automobile',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Templates creatifs / Reproduction precise d\'effets complexes',
              level: 4,
              description: 'Au-dela de la generation d\'images et de l\'ecriture d\'histoires, Seedance 2.0 prend egalement en charge l\'imitation — transitions creatives, publicites completes, extraits de films, montages complexes. Tant que vous avez une image ou video de reference, le modele peut identifier le rythme des mouvements, le langage cinematographique et la structure visuelle, puis les reproduire avec precision.',
              cases: [
                {
                  prompt: 'Remplacer le personnage de @video1 par @image1, @image1 comme premiere image, le personnage porte des lunettes de science-fiction virtuelles, referencer les mouvements de camera de @video1.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Referencer les traits du visage du mannequin de la premiere image. Le mannequin porte successivement les tenues des images de reference 2 a 6 et s\'approche de la camera.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Utiliser le concept publicitaire de la video de reference, avec les images de doudoune fournies et le slogan publicitaire pour generer une nouvelle video publicitaire de doudoune.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Style encre noir et blanc, le personnage de @image1 reference les effets speciaux et mouvements de @video1, pour une demonstration de tai-chi a l\'encre.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Remplacer le personnage de la premiere image de @video1 par @image1, reproduire entierement les effets speciaux et mouvements de @video1.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Transformation',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Commencer par le plafond de @image1, transition utilisant l\'effet de puzzle brise de @video1.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Ouverture sur ecran noir, referencer les effets de particules et textures de la video1, grains de sable dores en texture plaquee or.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'Intro AE',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'Le personnage de @image1 reference les mouvements et changements d\'expression de @video1, montrant l\'acte abstrait de manger des nouilles instantanees.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Creativite du modele et capacite de completion narrative',
              level: 4,
              cases: [
                {
                  prompt: 'Animer @image1 en bande dessinee, de gauche a droite et de haut en bas.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'En referencant le storyboard de @image1, creer un generique d\'ouverture apaisant de 15s sur le theme "Les quatre saisons de l\'enfance".',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Referencer l\'audio de la video1, s\'inspirer des images 1 a 5 pour creer librement une video emotionnelle.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Extension de video',
              level: 4,
              cases: [
                {
                  prompt: 'Prolonger la video de 15s, referencer l\'image de l\'ane sur la moto de @image1 et @image2, completer avec une publicite imaginative.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Prolonger la video de 6s, de la musique de guitare electrique intense apparait, et le texte publicitaire "JUST DO IT" apparait au milieu de la video.',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: 'Prolonger @video1 de 15 secondes. 1-5 secondes : la lumiere et les ombres glissent lentement a travers les stores venitiennes sur la table en bois et la surface de la tasse.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Prolonger vers l\'avant de 10s, dans la chaude lumiere d\'apres-midi, la camera commence par les auvents au coin de la rue agites par la brise.',
                  duration: '10s',
                  label: 'Trottinette tournesol',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Timbre plus precis, son plus realiste',
              level: 4,
              cases: [
                {
                  prompt: 'Camera fixe, objectif fish-eye central regardant vers le bas a travers un trou circulaire.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'A partir des photos promotionnelles d\'immeubles de bureaux fournies, generer un documentaire immobilier de 15 secondes au style cinematographique realiste.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'Un dialogue humoristique dans le "Talk-show chat et chien", avec des emotions riches et dans le style d\'un spectacle de stand-up.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'L\'accompagnement du passage classique de l\'opera du Henan "L\'affaire du Prince Chen Shimei" retentit.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Generer un clip MV de 15 secondes. Mots-cles : composition stable / leger zoom / angle bas heroique / documentaire mais haut de gamme.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'La fille au chapeau au centre de l\'image chante doucement "I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Camera fixe. L\'homme costaud debout (le capitaine) serre le poing et agite le bras en disant en espagnol : "Assaut dans trois minutes !"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 secondes : au debut le reveil sonne, l\'image1 apparait dans un flou.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'Le singe de @image1 marche vers le comptoir du salon de the, la camera le suit par derriere.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Dans un style et un timbre de vulgarisation scientifique, mettre en scene le contenu de l\'image1.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Continuite des plans (plan-sequence) amelioree',
              level: 4,
              cases: [
                {
                  prompt: '@image1-5, plan-sequence de poursuite, suivant le coureur depuis la rue en montant les escaliers, traversant le couloir, atteignant le toit, pour finalement contempler la ville en contrebas.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: 'Avec @image1 comme premiere image, le cadre s\'elargit jusqu\'a la vue par le hublot de l\'avion.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Style film d\'espionnage, @image1 comme premiere image, la camera suit de face l\'espionne en manteau rouge.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'A partir du plan exterieur de @image1, vue subjective a la premiere personne avec zoom rapide vers l\'interieur de la cabane en bois.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@image1-5, plan-sequence subjectif d\'un tour de montagnes russes palpitant.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Edition video hautement exploitable',
              level: 4,
              description: 'Parfois, vous avez deja une video et ne voulez pas repartir de zero pour chercher des images ou tout refaire. Vous souhaitez simplement ajuster un petit mouvement, prolonger de quelques secondes, ou rapprocher le jeu du personnage de votre vision. Desormais, vous pouvez utiliser directement une video existante comme entree et effectuer des modifications ciblees sur des segments, mouvements ou rythmes specifiques sans alterer le reste.',
              cases: [
                {
                  prompt: 'Bouleverser l\'intrigue de @video1, le regard de l\'homme passe instantanement de doux a glacial et impitoyable.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Bouleverser toute l\'intrigue de @video1. 0-3 secondes : l\'homme en costume est assis dans un bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Remplacer la chanteuse principale de la video1 par le chanteur principal de l\'image1, les mouvements imitent completement la video originale.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Changer la coiffure de la femme dans la video1 en longs cheveux rouges, le grand requin blanc de l\'image1 emerge lentement.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'La video1 fait un panoramique a droite, le patron du poulet frit s\'affaire a servir le poulet frit aux clients faisant la queue.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Synchronisation musicale possible',
              level: 4,
              cases: [
                {
                  prompt: 'La fille sur l\'affiche change constamment de tenue, les vetements referencent le style de @image1 et @image2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Synchro musicale',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'Les images @image1-7 se synchronisent aux images cles de @video.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'Les paysages de @image1-6 se synchronisent au rythme visuel de @video.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: 'Extrait de combat anime strategique de 8 secondes, en accord avec le theme de la vengeance.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Meilleure interpretation des emotions',
              level: 4,
              cases: [
                {
                  prompt: 'La femme de @image1 s\'approche du miroir, se regarde, reflechit un moment puis s\'effondre soudainement en criant.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'C\'est une publicite pour une hotte aspirante. @image1 comme premiere image, une femme cuisine elegamment.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@image1 comme premiere image, la camera pivote et zoome, le personnage leve soudainement la tete et commence a rugir.',
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
    title: 'Un dernier mot',
    content: [
      'Les capacites multimodales de Seedance 2.0 sont en constante evolution. Nous continuerons a mettre a jour les fonctionnalites et a prendre en charge davantage de combinaisons d\'entrees. Nous esperons que ce guide d\'utilisation vous aidera a exprimer votre creativite plus librement !',
      'Si vous rencontrez un bug, ou si vous avez des suggestions d\'utilisation ou des besoins specifiques, n\'hesitez pas a nous laisser un commentaire ou un message prive ! Nous continuerons a optimiser pour faire de JiMeng un veritable outil de productivite qui vous rende heureux et facilite votre travail.',
    ],
  },
};
