import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Seedance 2.0 ja esta disponivel no JiMeng! Kill the game!',
    intro: [
      'Desde aquele dia em que so podiamos "contar historias" com texto e quadros inicial/final, sempre quisemos criar um modelo de video que realmente entendesse sua expressao. Hoje, ele finalmente chegou!',
      'JiMeng Seedance 2.0 agora suporta quatro tipos de entrada: imagem, video, audio e texto, oferecendo formas de expressao mais ricas e uma geracao mais controlavel.',
      'Voce pode usar uma imagem para definir o estilo visual, um video para especificar movimentos de personagens e mudancas de camera, e alguns segundos de audio para definir o ritmo e a atmosfera... Combinado com instrucoes de texto, o processo criativo se torna mais natural, mais eficiente e mais parecido com ser um verdadeiro "diretor".',
      'Nesta atualizacao, a "capacidade de referencia" e o maior destaque:',
    ],
    highlights: [
      'Imagens de referencia podem reproduzir com precisao a composicao e os detalhes dos personagens',
      'Videos de referencia suportam a replicacao da linguagem cinematografica, ritmos de acao complexos e efeitos criativos',
      'Videos suportam extensao e emenda fluida, gerando tomadas continuas conforme as instrucoes do usuario: nao so gera, mas tambem pode "continuar filmando"',
      'As capacidades de edicao foram aprimoradas simultaneamente, suportando a substituicao, remocao e adicao de personagens em videos existentes',
    ],
  },
  params: [
    { key: 'Entrada de imagem', value: '<= 9 imagens' },
    { key: 'Entrada de video', value: '<= 3 videos, duracao total nao superior a 15s (com video de referencia custara um pouco mais)' },
    { key: 'Entrada de audio', value: 'Suporta upload de MP3, quantidade <= 3, duracao total nao superior a 15s' },
    { key: 'Entrada de texto', value: 'Linguagem natural' },
    { key: 'Duracao gerada', value: '<= 15s, selecao livre entre 4-15s' },
    { key: 'Saida de som', value: 'Efeitos sonoros/musica de fundo incluidos' },
  ],
  paramsNote: 'Limite de interacao: O limite maximo atual de entrada mista e de 12 arquivos. Recomenda-se priorizar o upload de materiais que tenham maior impacto na imagem ou no ritmo, e distribuir razoavelmente o numero de arquivos entre as diferentes modalidades.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 suporta as entradas "Quadro inicial/final" e "Referencia integral". Os modos de multi-quadro inteligente e referencia de sujeito nao estao disponiveis. Se voce enviar apenas uma imagem de quadro inicial + prompt, pode usar a entrada de quadro inicial/final; se precisar de entrada combinada multimodal (imagem, video, audio, texto), deve usar a entrada de referencia integral.',
      'O metodo de interacao atual consiste em especificar o uso de cada imagem, video e audio atraves de "@nome do material", por exemplo: @imagem1 como quadro inicial, @video1 referencia de linguagem cinematografica, @audio1 para musica de fundo.',
    ],
    steps: [
      {
        title: 'Interface principal',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Entrada: Seedance 2.0 - Referencia integral/Quadro inicial-final', 'Abrir dialogo de arquivo local', 'Selecionar arquivo e adicionar ao campo de entrada'],
      },
      {
        title: 'Como usar @ no modo de referencia integral',
        description: 'Metodo 1: Digitar "@" para invocar a referencia',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['Digitar "@"', 'Selecionar referencia, adicionada ao campo de entrada', 'Digitar o prompt'],
      },
      {
        title: 'Metodo 2: Clicar na ferramenta de parametros "@" para invocar a referencia',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['Clicar em "@" para selecionar referencia', 'Digitar o prompt'],
      },
    ],
    previewNote: 'Apos o upload dos materiais, imagens, videos e audios suportam pre-visualizacao ao passar o cursor.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'A seguir estao alguns usos e tecnicas em diferentes cenarios, para ajuda-lo a entender melhor as melhorias do Seedance 2.0 em qualidade de geracao, capacidade de controle e expressao criativa. Se voce ainda nao sabe por onde comecar, de uma olhada nestes exemplos para se inspirar~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Melhorias significativas nas capacidades basicas: mais estavel, mais fluido, mais realista!',
      level: 2,
      description: 'Nao e so multimodal: o Seedance 2.0 melhora significativamente no nivel fundamental. As leis fisicas sao mais razoaveis, os movimentos sao mais naturais e fluidos, a compreensao de instrucoes e mais precisa e o estilo se mantem mais estavel. Nao so pode completar de forma estavel tarefas de geracao de alta dificuldade como acoes complexas e movimentos continuos, mas tambem torna o efeito geral do video mais realista e suave. E uma evolucao integral das capacidades fundamentais!',
      cases: [
        {
          prompt: 'Uma garota estende a roupa com elegancia, termina de pendurar uma peca e pega outra do balde, sacudindo-a com forca.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'O personagem do quadro tem uma expressao nervosa, olha para a esquerda e direita, espia para fora da moldura, rapidamente estende a mao para fora da moldura para pegar uma Coca-Cola e toma um gole, depois mostra uma expressao de satisfacao. Nesse momento, ouvem-se passos, o personagem do quadro rapidamente devolve a Coca-Cola ao lugar. Um cowboy do oeste pega a Coca-Cola do copo e vai embora. Finalmente, a camera avanca, a tela escurece gradualmente deixando apenas uma lata de Coca-Cola iluminada por cima, e na parte inferior aparecem legendas artisticas e narracao: "Coca-Cola, imperdivel!"',
          label: 'Realismo extremo',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'A camera se afasta ligeiramente (revelando a vista completa da rua) e segue o movimento da protagonista. O vento agita a saia da protagonista enquanto ela caminha pelas ruas de Londres do seculo XIX. Enquanto caminha, um veiculo a vapor aparece pela rua da direita, passa rapidamente ao lado dela, o vento levanta sua saia e ela, surpresa, rapidamente a segura com ambas as maos. Os efeitos sonoros de fundo incluem passos, multidoes e veiculos.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'A camera segue o homem de preto que foge rapidamente, um grupo de pessoas o persegue. A camera muda para acompanhamento lateral, o personagem, apavorado, bate em uma barraca de frutas, levanta-se e continua fugindo. Ouvem-se sons de multidao em panico.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Atualizacao multimodal completa: a criacao de video entra na era da "combinacao livre"!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Introducao multimodal do Seedance 2.0',
          level: 3,
          description: 'Seedance 2.0 = Capacidade de referencia multimodal (pode referenciar qualquer coisa) + Geracao criativa poderosa + Resposta precisa a instrucoes (excelente compreensao)\n\nSuporta o upload de texto, imagens, video e audio. Todos esses materiais podem ser usados como objeto de uso ou de referencia. Voce pode referenciar movimentos, efeitos especiais, formas, movimentos de camera, personagens, cenas e sons de qualquer conteudo. Desde que as instrucoes estejam claras, o modelo pode entender.\n\nBasta descrever com linguagem natural a cena e os movimentos que deseja. Especifique claramente se e uma referencia ou uma edicao~ Quando houver muitos materiais, recomendamos verificar se cada @objeto esta corretamente rotulado, para nao confundir imagens, videos e personagens.',
        },
        {
          id: 'special-usage',
          title: '2.2 Modos de uso especiais (sem limitacoes, apenas como referencia)',
          level: 3,
          description: 'Tem um quadro inicial/final? Quer referenciar movimentos de um video?\n-> Especifique claramente no prompt, por exemplo: "@imagem1 como quadro inicial, referenciar os movimentos de luta de @video1"\n\nQuer estender um video existente?\n-> Indique o tempo de extensao, por exemplo: "Estender @video1 por 5s". Nota: a duracao de geracao selecionada deve ser a do "segmento novo"\n\nQuer fundir varios videos?\n-> Explique a logica de combinacao no prompt, por exemplo: "Quero adicionar uma cena entre @video1 e @video2, com conteudo xxx"\n\nNao tem material de audio? Voce pode referenciar diretamente o som do video.\n\nQuer gerar acoes continuas?\n-> Voce pode adicionar descricoes de continuidade no prompt, por exemplo: "O personagem passa diretamente do salto para a cambalhota, mantendo os movimentos fluidos e coerentes" @imagem1@imagem2@imagem3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Aqueles problemas de video que sempre foram dificeis, agora realmente podem ser resolvidos!',
          level: 3,
          description: 'Ao fazer videos sempre ha problemas frustrantes: rostos que mudam, movimentos que nao combinam, extensoes de video pouco naturais, ritmos que se alteram ao editar... Desta vez, a capacidade multimodal resolve todos esses "problemas persistentes" de uma vez. A seguir estao casos de uso especificos.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Melhoria integral da consistencia',
              level: 4,
              description: 'Talvez voce ja tenha passado por essas frustracoes: personagens que parecem diferentes entre tomadas, detalhes de produtos perdidos, texto pequeno borrado, mudancas bruscas de cena, estilos de camera impossiveis de unificar... Esses problemas comuns de consistencia na criacao agora podem ser resolvidos na versao 2.0. De rostos a vestimentas e detalhes tipograficos, a consistencia geral e mais estavel e precisa.',
              cases: [
                {
                  prompt: 'O homem @imagem1 caminha cansado pelo corredor apos o trabalho, seus passos diminuem e finalmente ele para na porta de casa. Close-up do rosto, o homem respira fundo, ajusta suas emocoes, deixa a negatividade de lado e relaxa. Depois, em close-up, procura as chaves, insere na fechadura. Ao entrar em casa, sua filhinha e um cachorro correm alegremente para recebe-lo com um abraco. O interior e muito aconchegante. Conversa natural durante toda a cena.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Substituir a garota no @video1 por uma atriz de opera chinesa, em um belo palco. Referenciar os movimentos de camera e efeitos de transicao do @video1, usar a camera para acompanhar os movimentos do personagem, com maxima estetica cenografica e maior impacto visual.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Referenciar todas as transicoes e movimentos de camera do @video1, em uma unica tomada continua, comecando com uma partida de xadrez.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2 segundos: Corte rapido em quatro quadros, lacos de borboleta em vermelho, rosa, roxo e oncinha aparecem congelados sucessivamente.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Realizar uma apresentacao comercial da bolsa da @imagem2, o lateral da bolsa referencia @imagem1, a textura da superficie referencia @imagem3. Mostrar todos os detalhes da bolsa com musica de fundo grandiosa e majestosa.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: 'Usar @imagem1 como quadro inicial, perspectiva em primeira pessoa, referenciar o movimento de camera do @video1, cena superior referencia @imagem2, cena esquerda referencia @imagem3, cena direita referencia @imagem4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Quadro inicial + movimento de camera',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Replicacao de movimentos de camera',
              level: 4,
              description: 'Antes, para que o modelo imitasse os movimentos, a camera ou as acoes complexas de um filme, era preciso escrever montes de instrucoes detalhadas, ou simplesmente era impossivel. Agora, basta enviar um video de referencia e pronto.',
              cases: [
                {
                  prompt: 'Referenciar a imagem do homem em @imagem1, ele esta no elevador de @imagem2, replicar completamente todos os movimentos de camera e expressoes faciais do protagonista do @video1.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Referenciar a imagem do homem em @imagem1, ele esta no corredor de @imagem2, replicar completamente todos os movimentos de camera do @video1.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'O tablet da @imagem1 como sujeito principal, movimento de camera referenciando @video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Rotacao com foco',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'A estrela da @imagem1 como sujeito principal, referenciar o estilo de camera do @video1 para realizar movimentos ritmicos de aproximacao, afastamento e panoramica.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Danca com zoom',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Referenciar @imagem1@imagem2 para o personagem com lanca, @imagem3@imagem4 para o personagem com espadas duplas, imitar os movimentos do @video1, combatendo na floresta de bordos da @imagem5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Referenciar os movimentos dos personagens do video1, referenciar o movimento de camera envolvente do video2, gerar uma cena de combate entre o personagem1 e o personagem2.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Referenciar os movimentos de camera e o ritmo de troca de cena do video1, replicar com o superesportivo vermelho da imagem1.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Movimento de camera de carro',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Templates criativos / Replicacao precisa de efeitos complexos',
              level: 4,
              description: 'Nao so gera imagens e escreve historias. O Seedance 2.0 tambem suporta "imitar com precisao": transicoes criativas, anuncios finalizados, fragmentos de filmes, edicoes complexas. Basta ter imagens ou videos de referencia, e o modelo pode identificar o ritmo da acao, a linguagem cinematografica e a estrutura visual, replicando-os com precisao.',
              cases: [
                {
                  prompt: 'Substituir o personagem do @video1 por @imagem1, usar @imagem1 como quadro inicial, o personagem coloca oculos de realidade virtual futuristas, referenciar o movimento de camera do @video1.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Referenciar os tracos faciais da modelo na primeira imagem. A modelo se aproxima da camera vestindo sucessivamente as roupas das imagens de referencia 2-6.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Referenciar a criatividade publicitaria do video, usar as imagens de jaqueta de penas fornecidas, combinadas com slogan publicitario para gerar um novo video publicitario de jaqueta de penas.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Estilo de tinta preto e branco, o personagem da @imagem1 referencia os efeitos especiais e movimentos do @video1, representando uma sequencia de Tai Chi em estilo de pintura a tinta.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Substituir o personagem do primeiro quadro do @video1 por @imagem1, replicar completamente os efeitos especiais e movimentos do @video1.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Troca de figurino',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Comecando pelo teto da @imagem1, referenciar o efeito de quebra-cabeca fragmentado do @video1 para a transicao.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Comecar com tela preta, referenciar os efeitos de particulas e texturas do video1, areia com textura dourada e brilhante.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'Intro estilo AE',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'O personagem da @imagem1 referencia os movimentos e mudancas de expressao do @video1, mostrando o comportamento abstrato de comer miojo.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Criatividade do modelo e capacidade de completar tramas',
              level: 4,
              cases: [
                {
                  prompt: 'Interpretar @imagem1 como quadrinho, na ordem da esquerda para a direita e de cima para baixo.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'Referenciar o roteiro de storyboard do especial da @imagem1, criar uma abertura de 15s de estilo reconfortante sobre "As quatro estacoes da infancia".',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Referenciar o audio do video1, usando as imagens 1-5 como inspiracao, criar um video de estilo emocional.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Extensao de video',
              level: 4,
              cases: [
                {
                  prompt: 'Estender o video 15s, referenciar a imagem do burro de motocicleta da @imagem1 e @imagem2, adicionar um segmento de anuncio criativo.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Estender o video 6s, aparece musica intensa de guitarra eletrica, no meio do video aparece a tipografia publicitaria "JUST DO IT".',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: 'Estender @video1 15 segundos. 1-5 segundos: A luz e as sombras deslizam lentamente pelas persianas sobre a mesa de madeira e a xicara.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Estender para frente 10s. Na luz quente da tarde, a camera comeca pelos toldos da esquina agitados pela brisa.',
                  duration: '10s',
                  label: 'Girassol na lambreta',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Tom mais preciso, som mais realista',
              level: 4,
              cases: [
                {
                  prompt: 'Camera fixa, lente olho de peixe central olhando para baixo atraves de um orificio circular.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'A partir das fotos promocionais do edificio comercial fornecidas, gerar um documentario imobiliario de 15 segundos com estilo cinematografico realista.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'Um dialogo de critica no "Salao de Reclamacoes de Gatos e Cachorros", exigindo emocoes intensas, no estilo de um show de stand-up comedy.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'Comeca o acompanhamento do segmento anterior a "A Execucao de Chen Shimei" da Opera Yu.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Gerar um video musical de 15 segundos. Palavras-chave: Composicao estavel / Zoom suave / Angulo baixo heroico / Documental porem elegante.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'A garota de chapeu no centro da tela canta suavemente dizendo "I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Camera fixa. O homem robusto em pe (capitao) ergue o punho e diz em espanhol: "Assalto em tres minutos!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 segundos: No inicio toca o despertador, a tela aparece borrada mostrando a imagem 1.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'O macaco da @imagem1 caminha ate o balcao da loja de cha com leite, a camera o segue por tras.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Com estilo e tom de divulgacao cientifica, interpretar o conteudo da imagem 1.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Maior continuidade de tomada (plano-sequencia)',
              level: 4,
              cases: [
                {
                  prompt: '@imagem1-5, tomada de acompanhamento em plano-sequencia, seguindo o corredor desde a rua subindo escadas, atravessando um corredor, entrando no terrace, e finalmente contemplando a cidade do alto.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: 'Com @imagem1 como quadro inicial, a imagem amplia para o exterior da janela do aviao.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Estilo de filme de espionagem, @imagem1 como quadro inicial, a camera segue frontalmente a agente secreta de casaco vermelho.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'A partir da tomada externa da @imagem1, perspectiva subjetiva em primeira pessoa com zoom rapido para o interior da cabana de madeira.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@imagem1-5, tomada subjetiva em plano-sequencia de uma emocionante montanha-russa.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Alta usabilidade na edicao de video',
              level: 4,
              description: 'As vezes voce ja tem um video e nao quer procurar imagens do zero nem refazer tudo, so quer ajustar um pequeno trecho de acao, estende-lo alguns segundos, ou fazer o personagem ficar mais proximo do que voce imagina. Agora voce pode usar diretamente um video existente como entrada e, sem alterar o restante do conteudo, especificar o trecho, a acao ou o ritmo para realizar modificacoes direcionadas.',
              cases: [
                {
                  prompt: 'Subverter a trama do @video1, o olhar do homem muda instantaneamente de ternura para frieza impiedosa.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Subverter toda a trama do @video1. 0-3 segundos: Um homem de terno sentado em um bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Substituir a cantora do video1 pelo cantor masculino da imagem1, imitando completamente os movimentos do video original.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Mudar o penteado da mulher do video1 para cabelo longo vermelho, o grande tubarao branco da imagem1 emerge lentamente.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'A camera do video1 se desloca para a direita, o dono da loja de frango frito atende ocupado entregando frango aos clientes na fila.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Sincronizacao com musica',
              level: 4,
              cases: [
                {
                  prompt: 'A garota do poster troca de roupa continuamente, o vestuario referencia os estilos da @imagem1 e @imagem2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Sincronizacao musical',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'As imagens da @imagem1-7 se sincronizam com os quadros-chave do @video.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'As imagens de paisagem da @imagem1-6 se sincronizam com o ritmo visual do @video.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: 'Fragmento de anime de batalha de 8 segundos com estrategia inteligente, alinhado com o tema de vinganca.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Melhor interpretacao emocional',
              level: 4,
              cases: [
                {
                  prompt: 'A mulher da @imagem1 caminha ate o espelho, olha para si mesma, reflete por um momento e de repente comeca a gritar descontroladamente.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'Este e um anuncio de coifa, @imagem1 como quadro inicial, uma mulher cozinha com elegancia.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@imagem1 como quadro inicial, a camera gira e se aproxima, o personagem levanta a cabeca de repente e comeca a rugir com forca.',
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
    title: 'Palavras finais',
    content: [
      'As capacidades multimodais do Seedance 2.0 estao em constante evolucao. Continuaremos atualizando as funcionalidades e suportando mais combinacoes de entrada. Esperamos que este manual de uso ajude voce a expressar sua criatividade com mais liberdade!',
      'Se voce encontrar algum bug, ou tiver sugestoes de uso ou necessidades especificas, nao hesite em deixar um comentario, nos enviar uma mensagem ou nos avisar de qualquer forma. Continuaremos otimizando para fazer do JiMeng uma ferramenta de produtividade que realmente te faca feliz e facilite seu trabalho.',
    ],
  },
};
