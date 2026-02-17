import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Seedance 2.0 ya esta disponible en JiMeng. Kill the game!',
    intro: [
      'Desde aquel dia en que solo podiamos "contar historias" con texto y fotogramas inicial/final, siempre quisimos crear un modelo de video que realmente entendiera tu expresion. Hoy, por fin ha llegado!',
      'JiMeng Seedance 2.0 ahora soporta cuatro tipos de entrada: imagen, video, audio y texto, ofreciendo formas de expresion mas ricas y una generacion mas controlable.',
      'Puedes usar una imagen para definir el estilo visual, un video para especificar movimientos de personajes y cambios de camara, y unos segundos de audio para establecer el ritmo y la atmosfera... Combinado con instrucciones de texto, el proceso creativo se vuelve mas natural, mas eficiente y mas parecido a ser un verdadero "director".',
      'En esta actualizacion, la "capacidad de referencia" es el punto mas destacado:',
    ],
    highlights: [
      'Las imagenes de referencia pueden reproducir con precision la composicion y los detalles de los personajes',
      'Los videos de referencia soportan la replicacion del lenguaje cinematografico, ritmos de accion complejos y efectos creativos',
      'Los videos soportan extension y empalme fluido, generando tomas continuas segun las instrucciones del usuario: no solo genera, sino que tambien puede "seguir filmando"',
      'Las capacidades de edicion se han mejorado simultaneamente, soportando el reemplazo, eliminacion y adicion de personajes en videos existentes',
    ],
  },
  params: [
    { key: 'Entrada de imagen', value: '<= 9 imagenes' },
    { key: 'Entrada de video', value: '<= 3 videos, duracion total no superior a 15s (con video de referencia costara un poco mas)' },
    { key: 'Entrada de audio', value: 'Soporta carga de MP3, cantidad <= 3, duracion total no superior a 15s' },
    { key: 'Entrada de texto', value: 'Lenguaje natural' },
    { key: 'Duracion generada', value: '<= 15s, seleccion libre entre 4-15s' },
    { key: 'Salida de sonido', value: 'Efectos de sonido/musica de fondo incluidos' },
  ],
  paramsNote: 'Limite de interaccion: El limite maximo actual de entrada mixta es de 12 archivos. Se recomienda priorizar la carga de materiales que tengan mayor impacto en la imagen o el ritmo, y distribuir razonablemente el numero de archivos entre las diferentes modalidades.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 soporta las entradas "Fotograma inicial/final" y "Referencia integral". Los modos de multi-fotograma inteligente y referencia de sujeto no estan disponibles. Si solo subes una imagen de fotograma inicial + prompt, puedes usar la entrada de fotograma inicial/final; si necesitas entrada combinada multimodal (imagen, video, audio, texto), debes usar la entrada de referencia integral.',
      'El metodo de interaccion actual consiste en especificar el uso de cada imagen, video y audio mediante "@nombre del material", por ejemplo: @imagen1 como fotograma inicial, @video1 referencia de lenguaje cinematografico, @audio1 para musica de fondo.',
    ],
    steps: [
      {
        title: 'Interfaz principal',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Entrada: Seedance 2.0 - Referencia integral/Fotograma inicial-final', 'Abrir dialogo de archivo local', 'Seleccionar archivo y agregar al campo de entrada'],
      },
      {
        title: 'Como usar @ en modo de referencia integral',
        description: 'Metodo 1: Escribir "@" para invocar la referencia',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['Escribir "@"', 'Seleccionar referencia, se agrega al campo de entrada', 'Escribir el prompt'],
      },
      {
        title: 'Metodo 2: Hacer clic en la herramienta de parametros "@" para invocar la referencia',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['Hacer clic en "@" para seleccionar referencia', 'Escribir el prompt'],
      },
    ],
    previewNote: 'Despues de cargar materiales, las imagenes, videos y audios soportan vista previa al pasar el cursor.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'A continuacion se presentan algunos usos y tecnicas en diferentes escenarios, para ayudarte a entender mejor las mejoras de Seedance 2.0 en calidad de generacion, capacidad de control y expresion creativa. Si aun no sabes por donde empezar, echa un vistazo a estos ejemplos para inspirarte~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Mejoras significativas en capacidades basicas: mas estable, mas fluido, mas realista!',
      level: 2,
      description: 'No solo es multimodal: Seedance 2.0 mejora significativamente a nivel fundamental. Las leyes fisicas son mas razonables, los movimientos son mas naturales y fluidos, la comprension de instrucciones es mas precisa y el estilo se mantiene mas estable. No solo puede completar de forma estable tareas de generacion de alta dificultad como acciones complejas y movimientos continuos, sino que tambien hace que el efecto general del video sea mas realista y suave. Es una evolucion integral de las capacidades fundamentales!',
      cases: [
        {
          prompt: 'Una chica tiende la ropa con elegancia, termina de colgar una prenda y saca otra del cubo, sacudiendola con fuerza.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'El personaje del cuadro tiene una expresion nerviosa, mira a izquierda y derecha, asoma la cabeza fuera del marco, rapidamente extiende la mano fuera del marco para agarrar una Coca-Cola y toma un sorbo, luego muestra una expresion de satisfaccion. En ese momento se escuchan pasos, el personaje del cuadro rapidamente devuelve la Coca-Cola a su lugar. Un vaquero del oeste toma la Coca-Cola del vaso y se va. Finalmente la camara avanza, la pantalla se oscurece gradualmente dejando solo una lata de Coca-Cola iluminada desde arriba, y en la parte inferior aparecen subtitulos artisticos y narracion: "Coca-Cola, imperdible!"',
          label: 'Realismo extremo',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'La camara se aleja ligeramente (revelando la vista completa de la calle) y sigue el movimiento de la protagonista. El viento agita la falda de la protagonista mientras camina por las calles de Londres del siglo XIX. Mientras camina, un vehiculo de vapor aparece desde la calle derecha, pasa rapidamente junto a ella, el viento levanta su falda y ella, sorprendida, rapidamente la sujeta con ambas manos. Los efectos de sonido de fondo incluyen pasos, multitudes y vehiculos.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'La camara sigue al hombre de negro que huye rapidamente, un grupo de personas lo persigue. La camara cambia a seguimiento lateral, el personaje choca aterrorizado contra un puesto de frutas, se levanta y sigue huyendo. Se escuchan sonidos de multitud en panico.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Actualizacion multimodal completa: la creacion de video entra en la era de la "combinacion libre"!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Introduccion multimodal de Seedance 2.0',
          level: 3,
          description: 'Seedance 2.0 = Capacidad de referencia multimodal (puede referenciar cualquier cosa) + Generacion creativa potente + Respuesta precisa a instrucciones (excelente comprension)\n\nSoporta la carga de texto, imagenes, video y audio. Todos estos materiales pueden usarse como objeto de uso o de referencia. Puedes referenciar movimientos, efectos especiales, formas, movimientos de camara, personajes, escenas y sonidos de cualquier contenido. Siempre que las instrucciones esten claras, el modelo puede entenderlo.\n\nSimplemente describe con lenguaje natural la escena y los movimientos que deseas. Especifica claramente si es una referencia o una edicion~ Cuando haya muchos materiales, te recomendamos verificar que cada @objeto este correctamente etiquetado, para no confundir imagenes, videos y personajes.',
        },
        {
          id: 'special-usage',
          title: '2.2 Modos de uso especiales (sin limitaciones, solo como referencia)',
          level: 3,
          description: 'Tienes un fotograma inicial/final? Quieres referenciar movimientos de un video?\n-> Especificalo claramente en el prompt, por ejemplo: "@imagen1 como fotograma inicial, referenciar los movimientos de lucha de @video1"\n\nQuieres extender un video existente?\n-> Indica el tiempo de extension, por ejemplo: "Extender @video1 por 5s". Nota: la duracion de generacion seleccionada debe ser la del "segmento nuevo"\n\nQuieres fusionar varios videos?\n-> Explica la logica de combinacion en el prompt, por ejemplo: "Quiero agregar una escena entre @video1 y @video2, con contenido xxx"\n\nNo tienes material de audio? Puedes referenciar directamente el sonido del video.\n\nQuieres generar acciones continuas?\n-> Puedes agregar descripciones de continuidad en el prompt, por ejemplo: "El personaje pasa directamente del salto a la voltereta, manteniendo los movimientos fluidos y coherentes" @imagen1@imagen2@imagen3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Esos problemas de video que siempre fueron dificiles, ahora realmente se pueden resolver!',
          level: 3,
          description: 'Al hacer videos siempre hay problemas frustrantes: rostros que cambian, movimientos que no coinciden, extensiones de video poco naturales, ritmos que se alteran al editar... Esta vez, la capacidad multimodal resuelve todos estos "problemas persistentes" de una vez. A continuacion se presentan casos de uso especificos.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Mejora integral de la consistencia',
              level: 4,
              description: 'Quizas has experimentado estas frustraciones: personajes que lucen diferentes entre tomas, detalles de productos perdidos, texto pequeno borroso, cambios bruscos de escena, estilos de camara imposibles de unificar... Estos problemas comunes de consistencia en la creacion ahora se pueden resolver en la version 2.0. Desde rostros hasta vestimenta y detalles tipograficos, la consistencia general es mas estable y precisa.',
              cases: [
                {
                  prompt: 'El hombre @imagen1 camina cansado por el pasillo despues del trabajo, sus pasos se ralentizan y finalmente se detiene frente a la puerta de su casa. Primer plano del rostro, el hombre respira profundamente, ajusta sus emociones, deja de lado la negatividad y se relaja. Luego, en primer plano, busca las llaves, las inserta en la cerradura. Al entrar a casa, su pequena hija y un perro corren alegremente a recibirlo con un abrazo. El interior es muy acogedor. Conversacion natural durante toda la escena.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Reemplazar a la chica en @video1 por una actriz de opera china, en un escenario hermoso. Referenciar los movimientos de camara y efectos de transicion de @video1, usar la camara para acompanar los movimientos del personaje, con maxima estetica escenografica y mayor impacto visual.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Referenciar todas las transiciones y movimientos de camara de @video1, en una sola toma continua, comenzando con una partida de ajedrez.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2 segundos: Corte rapido en cuatro cuadros, lazos de mariposa en rojo, rosa, purpura y leopardo aparecen congelados sucesivamente.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Realizar una presentacion comercial del bolso de @imagen2, el lateral del bolso referencia @imagen1, la textura de la superficie referencia @imagen3. Mostrar todos los detalles del bolso con musica de fondo grandiosa y majestuosa.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: 'Usar @imagen1 como fotograma inicial, perspectiva en primera persona, referenciar el movimiento de camara de @video1, escena superior referencia @imagen2, escena izquierda referencia @imagen3, escena derecha referencia @imagen4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Fotograma inicial + movimiento de camara',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Replicacion de movimientos de camara',
              level: 4,
              description: 'Antes, para que el modelo imitara los movimientos, la camara o las acciones complejas de una pelicula, habia que escribir montones de instrucciones detalladas, o simplemente era imposible. Ahora, solo necesitas subir un video de referencia y listo.',
              cases: [
                {
                  prompt: 'Referenciar la imagen del hombre en @imagen1, esta en el ascensor de @imagen2, replicar completamente todos los movimientos de camara y expresiones faciales del protagonista de @video1.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Referenciar la imagen del hombre en @imagen1, esta en el pasillo de @imagen2, replicar completamente todos los movimientos de camara de @video1.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'La tableta de @imagen1 como sujeto principal, movimiento de camara referenciando @video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Rotacion con enfoque',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'La estrella de @imagen1 como sujeto principal, referenciar el estilo de camara de @video1 para realizar movimientos ritmicos de acercamiento, alejamiento y panoramica.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Danza con zoom',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Referenciar @imagen1@imagen2 para el personaje con lanza, @imagen3@imagen4 para el personaje con espadas dobles, imitar los movimientos de @video1, combatiendo en el bosque de arces de @imagen5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Referenciar los movimientos de los personajes del video1, referenciar el movimiento de camara envolvente del video2, generar una escena de combate entre el personaje1 y el personaje2.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Referenciar los movimientos de camara y el ritmo de cambio de escena del video1, replicar con el superdeportivo rojo de la imagen1.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Movimiento de camara de auto',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Plantillas creativas / Replicacion precisa de efectos complejos',
              level: 4,
              description: 'No solo genera imagenes y escribe historias. Seedance 2.0 tambien soporta "imitar con precision": transiciones creativas, anuncios terminados, fragmentos de peliculas, ediciones complejas. Solo necesitas tener imagenes o videos de referencia, y el modelo puede identificar el ritmo de la accion, el lenguaje cinematografico y la estructura visual, replicandolos con precision.',
              cases: [
                {
                  prompt: 'Reemplazar al personaje de @video1 por @imagen1, usar @imagen1 como fotograma inicial, el personaje se pone gafas de realidad virtual futuristas, referenciar el movimiento de camara de @video1.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Referenciar los rasgos faciales de la modelo en la primera imagen. La modelo se acerca a la camara vistiendo sucesivamente la ropa de las imagenes de referencia 2-6.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Referenciar la creatividad publicitaria del video, usar las imagenes de chaqueta de plumas proporcionadas, combinadas con eslogan publicitario para generar un nuevo video publicitario de chaqueta de plumas.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Estilo de tinta blanco y negro, el personaje de @imagen1 referencia los efectos especiales y movimientos de @video1, representando una secuencia de Tai Chi en estilo de pintura de tinta.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Reemplazar al personaje del primer fotograma de @video1 por @imagen1, replicar completamente los efectos especiales y movimientos de @video1.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Cambio de vestuario',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Comenzando desde el techo de @imagen1, referenciar el efecto de rompecabezas fragmentado de @video1 para la transicion.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Comenzar con pantalla negra, referenciar los efectos de particulas y texturas del video1, arena con textura dorada y brillante.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'Intro estilo AE',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'El personaje de @imagen1 referencia los movimientos y cambios de expresion de @video1, mostrando el comportamiento abstracto de comer fideos instantaneos.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Creatividad del modelo y capacidad de completar tramas',
              level: 4,
              cases: [
                {
                  prompt: 'Interpretar @imagen1 como comic, en orden de izquierda a derecha y de arriba a abajo.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'Referenciar el guion de storyboard del especial de @imagen1, crear una introduccion de 15s de estilo reconfortante sobre "Las cuatro estaciones de la infancia".',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Referenciar el audio del video1, usando las imagenes 1-5 como inspiracion, crear un video de estilo emocional.',
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
                  prompt: 'Extender el video 15s, referenciar la imagen del burro en motocicleta de @imagen1 y @imagen2, agregar un segmento de anuncio creativo.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Extender el video 6s, aparece musica intensa de guitarra electrica, en el medio del video aparece la tipografia publicitaria "JUST DO IT".',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: 'Extender @video1 15 segundos. 1-5 segundos: La luz y las sombras se deslizan lentamente a traves de las persianas sobre la mesa de madera y la taza.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Extender hacia adelante 10s. En la calida luz de la tarde, la camara comienza desde los toldos de la esquina agitados por la brisa.',
                  duration: '10s',
                  label: 'Girasol en scooter',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Tono mas preciso, sonido mas realista',
              level: 4,
              cases: [
                {
                  prompt: 'Camara fija, lente ojo de pez central mirando hacia abajo a traves de un orificio circular.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'A partir de las fotos promocionales del edificio de oficinas proporcionadas, generar un documental inmobiliario de 15 segundos con estilo cinematografico realista.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'Un dialogo de critica en el "Salon de Quejas de Gatos y Perros", requiriendo emociones intensas, acorde con un espectaculo de stand-up comedy.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'Comienza el acompanamiento del segmento previo a "La Ejecucion de Chen Shimei" de la Opera Yu.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Generar un video musical de 15 segundos. Palabras clave: Composicion estable / Zoom suave / Angulo bajo heroico / Documental pero elegante.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'La chica con sombrero en el centro de la pantalla canta suavemente diciendo "I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Camara fija. El hombre robusto de pie (capitan) levanta el puno y dice en espanol: "Asalto en tres minutos!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 segundos: Al inicio suena el despertador, la pantalla aparece borrosa mostrando la imagen 1.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'El mono de @imagen1 camina hacia el mostrador de la tienda de te con leche, la camara lo sigue desde atras.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Con estilo y tono de divulgacion cientifica, interpretar el contenido de la imagen 1.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Mayor continuidad de toma (plano secuencia)',
              level: 4,
              cases: [
                {
                  prompt: '@imagen1-5, toma de seguimiento en plano secuencia, siguiendo al corredor desde la calle subiendo escaleras, atravesando un pasillo, entrando a la azotea, y finalmente contemplando la ciudad desde arriba.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: 'Con @imagen1 como fotograma inicial, la imagen se amplifica hacia el exterior de la ventanilla del avion.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Estilo de pelicula de espias, @imagen1 como fotograma inicial, la camara sigue frontalmente a la agente secreta con abrigo rojo.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'Desde la toma exterior de @imagen1, perspectiva subjetiva en primera persona con zoom rapido hacia el interior de la cabana de madera.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@imagen1-5, toma subjetiva en plano secuencia de una emocionante montana rusa.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Alta usabilidad en edicion de video',
              level: 4,
              description: 'A veces ya tienes un video y no quieres buscar imagenes desde cero ni rehacerlo todo, solo quieres ajustar un pequeno segmento de accion, extenderlo unos segundos, o hacer que el personaje se acerque mas a lo que imaginas. Ahora puedes usar directamente un video existente como entrada y, sin cambiar el resto del contenido, especificar el segmento, la accion o el ritmo para realizar modificaciones dirigidas.',
              cases: [
                {
                  prompt: 'Subvertir la trama de @video1, la mirada del hombre cambia instantaneamente de ternura a frialdad despiadada.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Subvertir toda la trama de @video1. 0-3 segundos: Un hombre de traje sentado en un bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Reemplazar a la cantante del video1 por el cantante masculino de la imagen1, imitando completamente los movimientos del video original.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Cambiar el peinado de la mujer del video1 a cabello largo rojo, el gran tiburon blanco de la imagen1 emerge lentamente.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'La camara del video1 se desplaza a la derecha, el dueno de la tienda de pollo frito atiende ocupado entregando pollo a los clientes en fila.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Sincronizacion con musica',
              level: 4,
              cases: [
                {
                  prompt: 'La chica del poster cambia de ropa continuamente, la vestimenta referencia los estilos de @imagen1 y @imagen2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Sincronizacion musical',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'Las imagenes de @imagen1-7 se sincronizan con los fotogramas clave de @video.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'Las imagenes de paisajes de @imagen1-6 se sincronizan con el ritmo visual de @video.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: 'Fragmento de anime de batalla de 8 segundos con estrategia inteligente, acorde con el tema de venganza.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Mejor interpretacion emocional',
              level: 4,
              cases: [
                {
                  prompt: 'La mujer de @imagen1 camina hacia el espejo, se mira a si misma, reflexiona un momento y de repente comienza a gritar descontroladamente.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'Este es un anuncio de campana extractora, @imagen1 como fotograma inicial, una mujer cocina con elegancia.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@imagen1 como fotograma inicial, la camara gira y se acerca, el personaje levanta la cabeza de repente y comienza a rugir con fuerza.',
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
    title: 'Unas palabras finales',
    content: [
      'Las capacidades multimodales de Seedance 2.0 estan en constante evolucion. Continuaremos actualizando las funcionalidades y soportando mas combinaciones de entrada. Esperamos que este manual de uso te ayude a expresar tu creatividad con mayor libertad!',
      'Si encuentras algun error, o tienes sugerencias de uso o necesidades especificas, no dudes en dejarnos un comentario, enviarnos un mensaje o hacernos saber de cualquier manera. Seguiremos optimizando para hacer de JiMeng una herramienta de productividad que realmente te haga feliz y te facilite el trabajo.',
    ],
  },
};
