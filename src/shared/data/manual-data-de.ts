import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Video Seedance 2.0 ist offiziell bei JiMeng gestartet! Kill the game!',
    intro: [
      'Erinnern Sie sich noch? Seit dem Tag, an dem wir nur mit Text und Anfangs-/Endframe „Geschichten erzählen" konnten, wollten wir ein Videomodell schaffen, das Ihren Ausdruck wirklich versteht. Heute ist es endlich da!',
      'JiMeng Seedance 2.0 unterstützt jetzt vier Eingabemodalitäten: Bilder, Videos, Audio und Text — vielfältigere Ausdrucksmöglichkeiten und bessere Steuerbarkeit bei der Generierung.',
      'Sie können mit einem Bild den visuellen Stil festlegen, mit einem Video die Bewegungen der Figur und Kamerawechsel vorgeben, mit wenigen Sekunden Audio Rhythmus und Atmosphäre setzen… Zusammen mit Textprompts wird der kreative Prozess natürlicher, effizienter und fühlt sich wirklich wie „Regie führen" an.',
      'Bei diesem Upgrade sind die „Referenzfähigkeiten" das größte Highlight:',
    ],
    highlights: [
      'Referenzbilder reproduzieren präzise Bildkomposition und Figurendetails',
      'Referenzvideos unterstützen Kamerasprache, komplexe Bewegungsrhythmen und Reproduktion kreativer Effekte',
      'Videos unterstützen fließende Verlängerung und Anschlüsse — fortlaufende Einstellungen nach Ihren Vorgaben generieren, nicht nur erstellen, sondern auch „weiterdrehen"',
      'Bearbeitungsfähigkeiten erweitert: Unterstützung für Figurenaustausch, -entfernung und -hinzufügung in bestehenden Videos',
    ],
  },
  params: [
    { key: 'Bildeingabe', value: '≤ 9 Stück' },
    { key: 'Videoeingabe', value: '≤ 3 Stück, Gesamtdauer max. 15 s (mit Referenzvideo etwas teurer)' },
    { key: 'Audioeingabe', value: 'MP3-Upload unterstützt, Anzahl ≤ 3, Gesamtdauer max. 15 s' },
    { key: 'Texteingabe', value: 'Natürliche Sprache' },
    { key: 'Generierungsdauer', value: '≤ 15 s, frei wählbar von 4 bis 15 s' },
    { key: 'Tonausgabe', value: 'Integrierte Soundeffekte / Hintergrundmusik' },
  ],
  paramsNote: 'Interaktionsbeschränkungen: Das aktuelle Obergrenze für gemischte Eingaben beträgt 12 Dateien. Es wird empfohlen, vorrangig Materialien hochzuladen, die den größten Einfluss auf Bild oder Rhythmus haben, und die Dateianzahl zwischen den verschiedenen Modalitäten sinnvoll zu verteilen.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 unterstützt die Eingänge „Anfangs-/Endframe" und „Universal-Referenz". Intelligenter Multiframe und Subjektreferenz sind nicht verfügbar. Wenn Sie nur ein Anfangsframe + Prompt hochladen, nutzen Sie den Eingang „Anfangs-/Endframe"; für multimodale Eingaben (Bild, Video, Audio, Text) verwenden Sie den Eingang „Universal-Referenz".',
      'Die aktuelle Interaktionsmethode besteht darin, den Verwendungszweck jedes Bildes, Videos und Audios über „@Materialname" anzugeben, z. B.: @Bild1 als Anfangsframe, @Video1 Referenz für Kamerasprache, @Audio1 für Hintergrundmusik.',
    ],
    steps: [
      {
        title: 'Hauptoberfläche',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Eingang: Seedance 2.0 — Universal-Referenz / Anfangs-Endframe', 'Lokales Dateiauswahlfenster öffnen', 'Dateien auswählen und zum Eingabefeld hinzufügen'],
      },
      {
        title: 'Wie man @ im Universal-Referenz-Modus verwendet',
        description: 'Methode 1: „@" eingeben, um Referenz aufzurufen',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['„@" eingeben', 'Referenz auswählen — sie erscheint im Eingabefeld', 'Prompt eingeben'],
      },
      {
        title: 'Methode 2: Auf die „@"-Schaltfläche in der Parameterwerkzeugleiste klicken',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['„@" klicken, um Referenz auszuwählen', 'Prompt eingeben'],
      },
    ],
    previewNote: 'Nach dem Hochladen von Materialien unterstützen Bilder, Videos und Audio eine Hover-Vorschau.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'Im Folgenden finden Sie Anwendungsbeispiele und Tipps für verschiedene Szenarien, die Ihnen helfen, die Verbesserungen von Seedance 2.0 bei Generierungsqualität, Steuerbarkeit und kreativem Ausdruck besser zu verstehen. Wenn Sie nicht wissen, wo Sie anfangen sollen, schauen Sie sich einfach diese Beispiele zur Inspiration an~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Deutlich verstärkte Grundfähigkeiten: stabiler, flüssiger, realistischer!',
      level: 2,
      description: 'Nicht nur Multimodalität — Seedance 2.0 wurde auf fundamentaler Ebene deutlich verbessert: realistischere Physik, natürlichere und flüssigere Bewegungen, präziseres Befehlsverständnis, stabilere Stilbeibehaltung. Das Modell bewältigt zuverlässig komplexe Bewegungen und kontinuierliche Aktionen, und die Gesamtvideoqualität ist realistischer und geschmeidiger geworden — eine umfassende Evolution der Grundfähigkeiten!',
      cases: [
        {
          prompt: 'Ein Mädchen hängt elegant Wäsche auf, nimmt nach einem Kleidungsstück das nächste aus dem Korb und schüttelt es kräftig aus.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'Die Figur im Bild schaut mit schuldbewusstem Gesichtsausdruck nach links und rechts, lehnt sich aus dem Rahmen, greift schnell nach draußen, schnappt sich die Cola und nimmt einen Schluck, dann zeigt sie einen zufriedenen Gesichtsausdruck. In diesem Moment sind Schritte zu hören, die Figur stellt die Cola hastig zurück. Ein Western-Cowboy nimmt das Glas Cola und geht. Zum Schluss fährt die Kamera heran, der Hintergrund wird allmählich schwarz, nur ein Oberlicht beleuchtet die Coladose, am unteren Bildrand erscheint ein künstlerischer Untertitel mit Stimme aus dem Off: „Yikou Cola — unbedingt probieren!"',
          label: 'Ultrarealistisch',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'Die Kamera zieht leicht zurück (zeigt das Straßenpanorama) und folgt der Protagonistin. Der Wind weht den Rocksaum der Protagonistin, die durch eine Londoner Straße des 19. Jahrhunderts geht. Von rechts kommt ein Dampfwagen, rast schnell an ihr vorbei, der Windstoß hebt ihren Rock. Schockiert drückt sie hastig den Rock mit beiden Händen herunter. Hintergrundgeräusche: Schritte, Menschenmenge, Autogeräusche usw.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'Die Kamera folgt dem Mann in Schwarz bei seiner rasanten Flucht, eine Menschenmenge verfolgt ihn. Die Kamera wechselt zur seitlichen Begleitung, die Figur stößt panisch einen Obststand am Straßenrand um, steht auf und rennt weiter. Aufgeregte Menschenmengengeräusche.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Umfassendes Multimodalitäts-Upgrade: Videoerstellung tritt in die Ära der „freien Kombination" ein!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Einführung in die Multimodalität von Seedance 2.0',
          level: 3,
          description: 'Seedance 2.0 = Multimodale Referenzfähigkeiten (alles kann referenziert werden) + starke kreative Generierung + präzise Befehlsausführung (hervorragendes Verständnis)\n\nEs werden Text, Bilder, Videos und Audio zum Hochladen unterstützt — alle diese Materialien können als Nutzungsobjekte oder Referenzobjekte dienen. Sie können Bewegungen, Effekte, Stil, Kameraführung, Figuren, Szenen, Klang als Referenz verwenden — alles, solange Sie es im Prompt klar beschreiben, versteht das Modell es.\n\nBeschreiben Sie einfach in natürlicher Sprache das gewünschte Bild und die Aktionen und geben Sie an, was Referenz und was Bearbeitung ist. Bei vielen Materialien empfiehlt es sich, alle @-Objekte nochmals zu prüfen, damit Bilder, Videos und Figuren nicht verwechselt werden.',
        },
        {
          id: 'special-usage',
          title: '2.2 Spezielle Verwendungsmethoden (ohne Einschränkungen, nur als Referenz)',
          level: 3,
          description: 'Haben Sie ein Anfangs-/Endframe? Möchten Sie Bewegungen aus einem Video referenzieren?\n→ Beschreiben Sie es im Prompt, z. B.: „@Bild1 als Anfangsframe, Kampfbewegungen aus @Video1 referenzieren"\n\nMöchten Sie ein vorhandenes Video verlängern?\n→ Geben Sie die Verlängerungszeit an, z. B. „@Video1 um 5 s verlängern". Hinweis: Die gewählte Generierungsdauer sollte der „neuen Passage" entsprechen.\n\nMöchten Sie mehrere Videos zusammenführen?\n→ Beschreiben Sie die Zusammenführungslogik im Prompt, z. B.: „Ich möchte eine Szene zwischen @Video1 und @Video2 einfügen, Inhalt: xxx"\n\nKein Audiomaterial? Sie können den Ton direkt aus dem Video verwenden.\n\nMöchten Sie fortlaufende Aktionen generieren?\n→ Fügen Sie dem Prompt eine Kontinuitätsbeschreibung hinzu, z. B.: „Die Figur geht direkt vom Sprung in eine Rolle über, die Bewegung bleibt durchgehend flüssig" @Bild1 @Bild2 @Bild3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Probleme, die bei Videos schon immer schwierig waren — jetzt lösbar!',
          level: 3,
          description: 'Bei der Videoerstellung gab es immer Kopfschmerzen: Das Gesicht der Figur ändert sich, die Bewegungen stimmen nicht, die Videoverlängerung wirkt unnatürlich, beim Bearbeiten gerät der gesamte Rhythmus durcheinander… Die multimodalen Fähigkeiten lösen all diese „alten Probleme" auf einen Schlag. Nachfolgend konkrete Anwendungsbeispiele.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Umfassend verbesserte Konsistenz',
              level: 4,
              description: 'Kennen Sie diese Probleme? Die Figur sieht in verschiedenen Einstellungen unterschiedlich aus, Produktdetails gehen verloren, kleine Schrift wird unscharf, die Szene springt, der Kamerastil lässt sich nicht vereinheitlichen… All diese typischen Konsistenzprobleme werden jetzt in Version 2.0 gelöst. Von Gesichtern über Kleidung bis hin zu Schriftdetails — die Gesamtkonsistenz ist stabiler und präziser.',
              cases: [
                {
                  prompt: 'Der Mann @Bild1 kommt müde von der Arbeit und geht den Flur entlang, verlangsamt seinen Schritt und bleibt schließlich vor der Haustür stehen. Nahaufnahme des Gesichts: Der Mann atmet tief ein, fasst sich, lässt die negativen Emotionen los und entspannt sich. Dann Nahaufnahme: Er sucht den Schlüssel heraus, steckt ihn ins Schloss. Nach dem Betreten des Hauses rennen ihm seine kleine Tochter und ein Haushund freudig zur Begrüßung und Umarmung entgegen. Die Wohnung ist sehr gemütlich eingerichtet, durchgehend natürlicher Dialog.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Die Frau aus @Video1 durch eine Opern-Huadan ersetzen, die Szene spielt auf einer prachtvollen Bühne. Kameraführung und Übergänge aus @Video1 verwenden, Kamera an die Bewegungen der Figur anpassen für maximale Bühnenästhetik und visuelle Wirkung.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Alle Übergänge und Kameraführungen aus @Video1 verwenden, Plansequenz, Bildanfang ist eine Schachpartie.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0–2 Sekunden: Schneller Vierer-Flashcut — rote, rosa, lila und Leopardenmuster-Schleifen erscheinen nacheinander als Standbild.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Eine kommerzielle Videopräsentation der Tasche aus @Bild2, Seitenansicht der Tasche als Referenz @Bild1, Oberflächentextur als Referenz @Bild3. Alle Details der Tasche sollen gezeigt werden, Hintergrundmusik majestätisch und grandios.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: '@Bild1 als Anfangsframe verwenden. Ego-Perspektive, Kameraführung als Referenz @Video1, obere Szene als Referenz @Bild2, linke Szene als Referenz @Bild3, rechte Szene als Referenz @Bild4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Anfangsframe + Kameraführung',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Reproduktion der Kameraführung',
              level: 4,
              description: 'Früher musste man für die Nachahmung von Kamerabewegungen, Figurenpositionierung oder komplexen Aktionen aus Filmen entweder massenhaft detaillierte Prompts schreiben — oder es war schlicht unmöglich. Jetzt genügt es, ein Referenzvideo hochzuladen.',
              cases: [
                {
                  prompt: 'Das Erscheinungsbild des Mannes aus @Bild1 verwenden, er befindet sich im Aufzug aus @Bild2, Kameraführung und Mimik des Hauptdarstellers aus @Video1 vollständig reproduzieren.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Das Erscheinungsbild des Mannes aus @Bild1 verwenden, er befindet sich im Flur aus @Bild2, alle Kameraführungen aus @Video1 vollständig reproduzieren.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'Tablet aus @Bild1 als Hauptobjekt, Kameraführung als Referenz @Video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Fokus und Rotation',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'Schauspielerin aus @Bild1 als Hauptobjekt, Kameraführung aus @Video1 für rhythmische Zoom-, Schwenk- und Fahrbewegungen verwenden.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Zoom-Tanz',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Speerkämpfer aus @Bild1 und @Bild2, Doppelschwertkämpfer aus @Bild3 und @Bild4, Bewegungen aus @Video1 nachahmen, Kampf im Ahornwald aus @Bild5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Figurenbewegungen aus Video1 verwenden, Orbitalaufnahme-Kamerasprache aus Video2, eine Kampfszene zwischen Figur 1 und Figur 2 generieren.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Kameraführung und Schnittrhythmus aus Video1 verwenden, mit dem roten Supersportwagen aus Bild1 reproduzieren.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Auto-Kameraführung',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Kreative Vorlagen / Präzise Reproduktion komplexer Effekte',
              level: 4,
              description: 'Seedance 2.0 kann nicht nur Bilder generieren und Geschichten erzählen, sondern auch „nach Vorlage nachmachen" — kreative Übergänge, fertige Werbeclips, Filmausschnitte, komplexer Schnitt. Wenn Sie ein Referenzbild oder -video haben, erkennt das Modell den Bewegungsrhythmus, die Kamerasprache und die visuelle Struktur und reproduziert das Ergebnis präzise.',
              cases: [
                {
                  prompt: 'Die Figur aus @Video1 durch @Bild1 ersetzen, @Bild1 als Anfangsframe, die Figur trägt eine virtuelle Sci-Fi-Brille, Kameraführung als Referenz @Video1.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Die Gesichtszüge des Models vom ersten Bild verwenden. Das Model trägt nacheinander die Kleidung aus den Referenzbildern 2–6 und nähert sich der Kamera.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Die kreative Werbeidee aus dem Video verwenden und mit den bereitgestellten Daunenjacken-Bildern und Werbetext ein neues Daunenjacken-Werbevideo erstellen.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Schwarzweißer Tusche-Stil. Die Figur aus @Bild1 verwendet Effekte und Bewegungen aus @Video1, um eine Tusche-Tai-Chi-Kampfkunst-Szene darzustellen.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Die Figur im ersten Frame von @Video1 durch @Bild1 ersetzen, Effekte und Bewegungen aus @Video1 vollständig reproduzieren.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Outfit-Wechsel',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Beginnend mit der Decke aus @Bild1, den Puzzle-Zerfall-Effekt aus @Video1 für den Übergang verwenden.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Schwarzblende als Eröffnung, Partikeleffekt und Textur aus Video1 verwenden — goldene Sandkörner mit vergoldeter Textur.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'AE-Intro',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'Die Figur aus @Bild1 ahmt Aktionen und Mimikänderungen aus @Video1 nach und zeigt das absurde Nudeln-Essen-Verhalten.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Kreativität des Modells und Fähigkeit zur Handlungsvervollständigung',
              level: 4,
              cases: [
                {
                  prompt: '@Bild1 als Comic in der Reihenfolge links nach rechts, oben nach unten zum Leben erwecken.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'Basierend auf dem Storyboard aus @Bild1 einen 15-sekündigen Vorspann im heilsamen Stil zum Thema „Die Jahreszeiten der Kindheit" erstellen.',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Audio aus Video1 als Referenz verwenden, inspiriert von Bildern 1–5, ein emotionales Video erstellen.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Videoverlängerung',
              level: 4,
              cases: [
                {
                  prompt: 'Video um 15 s verlängern, als Referenz @Bild1 und @Bild2 (Esel auf Motorrad), mit einer kreativen Werbung ergänzen.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Video um 6 s verlängern, energische E-Gitarrenmusik ertönt, in der Mitte des Videos erscheint der Werbetext „JUST DO IT".',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: '@Video1 um 15 Sekunden verlängern. 1–5 Sekunden: Licht und Schatten gleiten langsam durch die Jalousien über den Holztisch und die Tasse.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Um 10 s nach vorne verlängern. Im warmen Nachmittagslicht beginnt die Kamera mit einer Reihe von Markisen an der Straßenecke, die im leichten Wind flattern.',
                  duration: '10s',
                  label: 'Sonnenblume auf Roller',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Präzisere Klangfarbe, realistischerer Sound',
              level: 4,
              cases: [
                {
                  prompt: 'Statische Kamera, zentrales Fischaugenobjektiv blickt durch eine runde Öffnung nach unten.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'Basierend auf den bereitgestellten Bürogebäudefotos einen 15-sekündigen kinematografischen Immobilien-Dokumentarfilm im realistischen Stil generieren.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'Ein ironischer Dialog in der „Katze-Hund-Beschwerdeshow", emotionale Ausdrucksstärke im Stand-up-Comedy-Stil gefordert.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'Das Intro der klassischen Yu-Oper „Der Fall Chen Shimei" ertönt.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Ein 15-sekündiges Musikvideo generieren. Schlüsselwörter: stabile Komposition / sanfte Zooms / Niedrigwinkel-Heldenaufnahme / dokumentarisch, aber hochwertig.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'Das Mädchen mit Hut in der Bildmitte singt sanft: „I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Statische Kamera. Der stehende kräftige Mann (Kapitän) ballt die Faust, schwingt den Arm und sagt auf Spanisch: „In drei Minuten — Angriff!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0–3 Sekunden: Am Anfang klingelt der Wecker, im verschwommenen Bild erscheint Bild 1.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'Der Affe aus @Bild1 geht zum Tresen des Bubble-Tea-Shops, die Kamera folgt ihm von hinten.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Im populärwissenschaftlichen Stil und Tonfall den Inhalt von Bild 1 präsentieren.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Verbesserte Einstellungskontinuität (Plansequenz)',
              level: 4,
              cases: [
                {
                  prompt: '@Bilder1–5, durchgehende Verfolgungsaufnahme: Von der Straße dem Läufer die Treppe hinauf folgen, durch den Flur aufs Dach, und abschließend Stadtpanorama von oben.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: '@Bild1 als Anfangsframe verwenden, Kamera zoomt zum Flugzeugfenster hinaus.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Spionagefilm-Stil, @Bild1 als Anfangsframe, Kamera folgt frontal der Geheimagentin im roten Trenchcoat.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'Ausgehend von der Außenaufnahme @Bild1, schnelle Kamerafahrt in Ego-Perspektive ins Innere der Holzhütte.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@Bilder1–5, subjektive Plansequenz einer aufregenden Achterbahnfahrt.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Hohe Praxistauglichkeit der Videobearbeitung',
              level: 4,
              description: 'Manchmal haben Sie bereits ein Video und möchten nicht von vorne anfangen — Sie wollen nur einen Bewegungsausschnitt anpassen, ein paar Sekunden hinzufügen oder die Figur näher an Ihre Vorstellung bringen. Jetzt können Sie ein vorhandenes Video als Eingabe verwenden und gezielt bestimmte Abschnitte, Bewegungen oder den Rhythmus bearbeiten, ohne den Rest zu verändern.',
              cases: [
                {
                  prompt: 'Die Handlung von @Video1 umkehren: Der Blick des Mannes wechselt augenblicklich von sanft zu eiskalt und erbarmungslos.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Die gesamte Handlung von @Video1 umkehren. 0–3 Sekunden: Mann im Anzug sitzt in einer Bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Die Leadsängerin aus Video1 durch den Leadsänger aus Bild1 ersetzen, Bewegungen ahmen das Originalvideo vollständig nach.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Die Frisur der Frau in Video1 in lange rote Haare ändern, der große Weiße Hai aus Bild1 taucht langsam auf.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'Kamera in Video1 schwenkt nach rechts, der Besitzer des Brathähnchenladens reicht geschäftig den wartenden Kunden Brathähnchen.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Musiksynchronisation möglich',
              level: 4,
              cases: [
                {
                  prompt: 'Das Mädchen auf dem Poster wechselt ständig die Outfits, Kleidungsstile als Referenz @Bild1 und @Bild2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Musiksynchronisation',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'Bilder @1–7 werden rhythmisch auf die Keyframes aus @Video synchronisiert.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'Landschaftsfotos @Bilder1–6 werden rhythmisch auf den Bildrhythmus aus @Video synchronisiert.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8-sekündiges Kampfanime-Segment im Stil eines intellektuellen Duells zum Thema Rache.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Verbesserte emotionale Darstellung',
              level: 4,
              cases: [
                {
                  prompt: 'Die Frau aus @Bild1 geht zum Spiegel, betrachtet ihr Spiegelbild, denkt einen Moment nach und bricht dann plötzlich schreiend zusammen.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'Dies ist eine Dunstabzugshauben-Werbung. @Bild1 als Anfangsframe, eine Frau kocht elegant.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@Bild1 als Anfangsframe, Kamera dreht sich und zoomt heran, die Figur hebt plötzlich den Kopf und beginnt wütend zu schreien.',
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
    title: 'Ein paar Worte zum Schluss',
    content: [
      'Die multimodalen Fähigkeiten von Seedance 2.0 entwickeln sich ständig weiter — wir werden die Funktionen kontinuierlich aktualisieren und immer mehr Eingabekombinationen unterstützen. Wir hoffen, dass dieses Handbuch Ihnen hilft, Ihre Kreativität noch freier zu entfalten!',
      'Wenn Sie einen Bug gefunden haben, Vorschläge zur Nutzung oder Ideen für Anwendungsszenarien haben — schreiben Sie uns, hinterlassen Sie einen Kommentar, melden Sie sich auf jedem Weg! Wir werden das Produkt kontinuierlich verbessern, um JiMeng gemeinsam zu einem wirklich praktischen und freudvollen Kreativwerkzeug zu machen.',
    ],
  },
};
