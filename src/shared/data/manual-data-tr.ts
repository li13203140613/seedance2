import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Video Seedance 2.0 resmi olarak JiMeng\'de yayinda! Kill the game!',
    intro: [
      'Sadece metin ve ilk/son karelerle "hikaye anlatabildigimiz" o gunlerden beri, ifadelerinizi gercekten anlayan bir video modeli olusturmak istiyorduk. Bugun, sonunda burada!',
      'JiMeng Seedance 2.0 artik gorsel, video, ses ve metin olmak uzere dort modalite girisini destekliyor; ifade yontemleri daha zengin, uretim daha kontrol edilebilir.',
      'Bir goruntuyle gorsel stili belirleyebilir, bir videoyla karakter hareketlerini ve kamera degisikliklerini belirtebilir, birkac saniyelik bir sesle ritim ve atmosfer olusturabilirsiniz... Istem sozcukleriyle birlestiginde yaratici surec daha dogal, daha verimli ve gercek bir "yonetmen" calismasina daha yakin hale gelir.',
      'Bu guncellemede "referans yetenegi" en buyuk one cikan ozellik:',
    ],
    highlights: [
      'Referans gorsel, goruntuyu ve karakter detaylarini hassas bir sekilde yeniden olusturabilir',
      'Referans video, kamera dili, karmasik hareket ritimleri ve yaratici efektlerin kopyalanmasini destekler',
      'Videolar akici uzatma ve birlestirmeyi destekler, kullanici istemlerine gore surekli sahneler uretebilir - sadece uretmek degil, ayni zamanda "cekime devam etmek"',
      'Duzenleme yetenekleri de guclendirildi; mevcut videolarda karakter degistirme, silme ve ekleme destekleniyor',
    ],
  },
  params: [
    { key: 'Gorsel Girisi', value: 'En fazla 9 adet' },
    { key: 'Video Girisi', value: 'En fazla 3 adet, toplam sure 15 saniyeyi gecemez (referans video varsa biraz daha pahali olur)' },
    { key: 'Ses Girisi', value: 'MP3 yukleme destegi, en fazla 3 adet, toplam sure 15 saniyeyi gecemez' },
    { key: 'Metin Girisi', value: 'Dogal dil' },
    { key: 'Uretim Suresi', value: 'En fazla 15 saniye, 4-15 saniye arasi serbest secim' },
    { key: 'Ses Ciktisi', value: 'Dahili ses efektleri/muzik' },
  ],
  paramsNote: 'Etkilesim siniri: Su anda desteklenen karisik giris ust siniri 12 dosyadir. Goruntu veya ritim uzerinde en fazla etkisi olan materyalleri oncelikli olarak yukleyin ve farkli modalitelerdeki dosya sayisini dengeli dagitin.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0, "Ilk/Son Kare" ve "Evrensel Referans" girislerini destekler; akilli coklu kare ve konu referansi secilemez. Yalnizca ilk kare gorseli + istem yuklerseniz Ilk/Son Kare girisini kullanabilirsiniz; cok modaliteli (gorsel, video, ses, metin) birlesik giris icin Evrensel Referans girisine gecmeniz gerekir.',
      'Su anda desteklenen etkilesim yontemi, her gorsel, video ve sesin kullanimini "@materyal_adi" ile belirtmektir. Ornegin: @gorsel1 ilk kare olarak, @video1 kamera dili referansi icin, @ses1 arka plan muzigi icin',
    ],
    steps: [
      {
        title: 'Ana Arayuz',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Giris: Seedance 2.0 - Evrensel Referans/Ilk ve Son Kare', 'Yerel dosya iletisim kutusunu ac', 'Dosyalari sec ve giris alanina ekle'],
      },
      {
        title: 'Evrensel Referans modunda @ nasil kullanilir',
        description: 'Yontem 1: "@" yazarak referans cagirma',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['"@" yazin', 'Referansi secin, giris alanina yerlestirin', 'Istemi girin'],
      },
      {
        title: 'Yontem 2: Parametre araci "@" tiklanarak referans cagirma',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['"@" tiklayarak referans secin', 'Istemi girin'],
      },
    ],
    previewNote: 'Materyalleri yukledikten sonra gorseller, videolar ve sesler uzerine gelindiginde onizleme desteklenir.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'Asagida farkli senaryolarda kullanim yontemleri ve ipuclari bulunmaktadir. Seedance 2.0\'in uretim kalitesi, kontrol yetenegi ve yaratici ifade gucundeki iyilestirmeleri daha iyi anlamaniza yardimci olacaktir. Nereden baslayacaginizi bilmiyorsaniz, ilham almak icin once bu orneklere goz atin~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Temel Yeteneklerde Belirgin Iyilestirme: Daha Kararli, Daha Akici, Daha Gercekci!',
      level: 2,
      description: 'Sadece cok modaliteli degil, Seedance 2.0 temel duzeyde de onemli olcude guclendirildi. Fizik kurallari daha tutarli, hareket performansi daha dogal ve akici, komut anlama daha hassas, stil tutarliligi daha istikrarli. Karmasik hareketler ve surekli hareket gibi zorlu uretim gorevlerini istikrarli bir sekilde tamamlamanin yani sira, genel video efektleri daha gercekci ve daha puruzsuzdur. Altyapi yeteneklerinde kapsamli bir evrimdir!',
      cases: [
        {
          prompt: 'Kiz zarif bir sekilde camasir asiyor. Bitirdikten sonra kovadan baska bir giysi alip kuvvetce silkiyor.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'Resimdeki karakter suclu bir ifadeyle gozlerini saga sola cevirir, cerceveden disari bakar. Hizla elini uzatip bir kola alir ve bir yudum icer, sonra tatmin olmus bir ifade yapar. Bu sirada ayak sesleri duyulur, resimdeki karakter aceleyle kolayi yerine koyar. Bir kovboy gelip bardaktaki kolayi alir goturur. Son olarak kamera ileri dogru hareket eder, ekran yavas yavas siyah arka plana doner ve sadece tepeden aydinlatmali bir kutu kola gosterilir. Ekranin altinda sanatsal altyazi ve seslendirme belirir: "Lezzetli Kola, kacirmayin!"',
          label: 'Ultra Gercekcilik',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'Kamera hafifce uzaklasir (sokak panoramasini gosterir) ve kadin karakteri takip eder. Ruzgar etegini dalgalandirir, kadin 19. yuzyil Londra sokaklarinda yuruyor. Yururken sag taraftaki sokaktan bir buharkli arac belirir ve yaninden hizla gecer, ruzgar etegini kaldirir. Kadin sok olmus bir sekilde aceleyle iki eliyle etegini asagi tutmaya calisir. Arka plan sesleri: ayak sesleri, kalabaligin uqultusu, araba sesleri vb.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'Kamera siyah giysili adami hizli kacisinda takip eder, arkasinda bir grup insan kovalar. Kamera yan takip cekimine gecer, karakter panige kapilir ve yol kenarindaki meyve tezgahini devirir, kalkar ve kacmaya devam eder. Paniklemisin kalabaligin sesleri.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Cok Modaliteli Kapsamli Yukseltme: Video Yaraticiligi "Serbest Kombinasyon" Cagina Giriyor!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Seedance 2.0 Cok Modaliteli Tanitim',
          level: 3,
          description: 'Seedance 2.0 = Cok modaliteli referans yetenegi (her seye referans verebilir) + Guclu yaratici uretim + Hassas komut yaniti (mukemmel anlama)\n\nMetin, gorsel, video ve ses yuklemesini destekler. Bu materyaller kullanim nesnesi veya referans nesnesi olarak kullanilabilir. Herhangi bir icerigin hareketlerini, ozel efektlerini, formatini, kamera hareketlerini, karakterlerini, sahnelerini ve seslerini referans alabilirsiniz; istem acik yazildigi surece model anlayacaktir.\n\nIstediginiz goruntu ve hareketleri dogal dille tanimlayiniz. Referans mi yoksa duzenleme mi oldugunu belirtin~ Materyal cok oldugunda her @nesnenin dogru etiketlendigini kontrol edin. Gorsel, video ve karakterleri birbiriyle karistirmayin.',
        },
        {
          id: 'special-usage',
          title: '2.2 Ozel Kullanim Yontemleri (sinir yok, yalnizca referans)',
          level: 3,
          description: 'Ilk/son kare gorseliniz mi var? Video hareketlerini de referans almak mi istiyorsunuz?\n-> Istemde acikca yazin, ornegin: "@gorsel1 ilk kare olarak, @video1\'in dovus hareketlerini referans al"\n\nMevcut bir videoyu uzatmak mi istiyorsunuz?\n-> Uzatma suresini belirtin, ornegin: "@video1\'i 5 saniye uzat". Not: Bu durumda secilen uretim suresi "eklenen kismin" suresi olmalidir.\n\nBirden fazla videoyu birlestirmek mi istiyorsunuz?\n-> Istemde birlestirme mantigini aciklayin, ornegin: "@video1 ve @video2 arasina bir sahne eklemek istiyorum, icerigi xxx"\n\nSes materyaliniz yok mu? Videodaki sesi dogrudan referans alabilirsiniz.\n\nSurekli hareketler uretmek mi istiyorsunuz?\n-> Isteme sureklilik aciklamasi ekleyin, ornegin: "Karakter ziplamayi dogrudan yuvarlanmaya geciriyor, hareketleri akici ve surekli" @gorsel1@gorsel2@gorsel3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Hep Cok Zor Olan Video Sorunlari Artik Gercekten Cozuluyor!',
          level: 3,
          description: 'Video yaparken her zaman can sikici sorunlar olur: yuz degisir, hareketler uyusmaz, video uzatma dogal olmaz, duzenleme yaparken genel ritim bozulur... Bu cok modaliteli guncelleme tum bu "kronik sorunlari" bir seferde cozdu. Asagida somut kullanim ornekleri bulunmaktadir.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Tutarlilikta Kapsamli Iyilestirme',
              level: 4,
              description: 'Su sorunlarla karsilasmisiniz olabilir: sahneler arasi karakterlerin gorunumu degisiyor, urun detaylari kayboluyor, kucuk yazilar bulaniklasiyor, sahneler ani degisiyor, kamera stili birlestirilenmiyor... Yaratici surecte yaygin olan bu tutarlilik sorunlari artik 2.0\'da cozulebiliyor. Yuzden kiyafete, yazi detayina kadar genel tutarlilik daha istikrarli ve daha hassas.',
              cases: [
                {
                  prompt: 'Adam @gorsel1 isten yorgun donus yolunda koridorda yuruyor, adimlari yavaslior ve sonunda evin onunde duruyor. Yuz yakin cekim, adam derin nefes aliyor, duygularini duzenliyor, olumsuz hislerini birakip rahatliyor, sonra yakin cekimde anahtari buluyor, kilide takiryor. Eve girdikten sonra kucuk kizi ve bir evcil kopek neseyle kosuyor ve kucaklamaya geliyor. Ic mekan cok sicak bir atmosfere sahip, dogal diyaloglar.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: '@video1\'deki kadini Cin operasi dan rolune (huadan) degistir, sahne guzel bir sahne uzerinde gecsin. @video1\'in kamera hareketlerini ve gecis efektlerini referans alarak, kamerayi karakterin hareketleriyle eslestirir, nihai sahne estetigi ve guclu gorsel etki sagla.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: '@video1\'in tum gecislerini ve kamera hareketlerini referans alarak, tek cekim olarak satranc tahtasiyla basla.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: '0-2 saniye goruntu: Hizli dort kareli flash kesim, kirmizi, pembe, mor ve leopar desenli dort fiyonk sirayla dondurulmus kare olarak.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: '@gorsel2\'nin cantasini ticari cekim tarzinda sergile. Cantanin yan tarafi @gorsel1\'i, yuzey malzemesi @gorsel3\'u referans alsin. Cantanin tum detaylari gosterilmeli, arka plan muzigi gorkemli ve etkileyici olsun.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: '@gorsel1\'i ekranin ilk karesi olarak kullan, birinci sahis bakis acisi, @video1\'in kamera hareketi efektlerini referans al, ust sahne @gorsel2\'yi, sol sahne @gorsel3\'u, sag sahne @gorsel4\'u referans alsin.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Ilk Kare Kamera Hareketi',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Kamera Hareketi Kopyalama',
              level: 4,
              description: 'Onceden modelin bir filmdeki pozisyonlari, kamera hareketlerini veya karmasik aksiyonlari taklit etmesini saglamak icin ya bir suru ayrintili istem yazmak ya da tamamen vazgecmek gerekiyordu. Simdi sadece bir referans videosu yuklemek yeterli.',
              cases: [
                {
                  prompt: '@gorsel1\'deki adamin gorunumunu referans al, @gorsel2\'deki asansorde, @video1\'in tum kamera hareketi efektlerini ve ana karakterin yuz ifadelerini tamamen referans al.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki adamin gorunumunu referans al, @gorsel2\'deki koridorda, @video1\'in tum kamera hareketi efektlerini tamamen referans al.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki tablet bilgisayar ana obje olarak, kamera hareketi @video1\'i referans alsin.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Odak Donusu',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki aktrist ana obje olarak, @video1\'in kamera hareketi tarzini referans alarak ritimli yakinlastirma/uzaklastirma/pan/tilt hareketi yap.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Zoom Dans',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: '@gorsel1@gorsel2\'deki mizrak karakterini, @gorsel3@gorsel4\'teki cift bicak karakterini referans alarak, @video1\'in hareketlerini taklit et, @gorsel5\'teki akagac ormaninda dovus.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Video1\'in karakter hareketlerini referans al, video2\'nin cevresinde donen kamera dilini referans al, karakter1 ve karakter2\'nin dovus sahnesini uret.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Video1\'in kamera hareketi ve goruntu gecis ritmini referans alarak, gorsel1\'deki kirmizi super araba ile kopyala.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Otomobil Kamera Hareketi',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Yaratici Sablonlar / Karmasik Ozel Efektlerin Hassas Kopyalanmasi',
              level: 4,
              description: 'Sadece gorsel uretme ve hikaye yazma degil, Seedance 2.0 ayni zamanda "bakarak taklit etmeyi" de destekler - yaratici gecisler, reklam finalleri, film sahneleri, karmasik kurgular. Referans gorseliniz veya videonuz oldugu surece model hareket ritmini, kamera dilini ve gorsel yapiyi tanimlayabilir ve hassas bir sekilde kopyalayabilir.',
              cases: [
                {
                  prompt: '@video1\'deki karakteri @gorsel1 ile degistir, @gorsel1 ilk kare olsun, karakter sanal bilim kurgu gozlugu taksun, @video1\'in kamera hareketini referans al.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Ilk goruntudeki modelin yuz hatlarini referans al. Model sirasiyla 2-6. referans goruntulerdeki kiyafetleri giyerek kameraya yaklasir.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Referans videonun reklam konseptini kullanarak, saglanan sisman mont goruntuleri ve reklam sloganiyla yeni bir sisman mont reklam videosu uret.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Siyah beyaz murekep stili, @gorsel1\'deki karakter @video1\'in ozel efektlerini ve hareketlerini referans alarak bir murekep tai chi performansi sergiler.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: '@video1\'in ilk kare karakterini @gorsel1 ile degistir, @video1\'in ozel efektlerini ve hareketlerini tamamen referans al.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Kiyafet Degisimi',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki tavandan baslayarak, @video1\'in yapboz parcalanma efektiyle gecis yap.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Siyah ekranla acilis, video1\'in parcacik efektlerini ve dokusunu referans al, altin yaldiz dokulu kum taneleri.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'AE Giris',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki karakter @video1\'deki hareketleri ve ifade degisikliklerini referans alarak, eristle yeme soyut eylemini sergiler.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Modelin Yaraticilik ve Hikaye Tamamlama Yetenegi',
              level: 4,
              cases: [
                {
                  prompt: '@gorsel1\'i soldan saga, yukaridan asagiya sirasinda cizgi roman olarak canlandir.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki belgesel film storyboard\'unu referans alarak, 15 saniyelik "Cocuklugun Dort Mevsimi" temasinda iyilestirici bir giris olustur.',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Video1\'in sesini referans alarak, gorsel 1-5\'ten ilham al ve duygusal bir video olustur.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Video Uzatma',
              level: 4,
              cases: [
                {
                  prompt: 'Videoyu 15 saniye uzat, @gorsel1 ve @gorsel2\'deki motosiklete binen esek goruntusunu referans alarak yaratici bir reklam tamamla.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Videoyu 6 saniye uzat, elektro gitar muzigi ciksin, videonun ortasinda "JUST DO IT" reklam yazisi belirir.',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: '@video1\'i 15 saniye uzat. 1-5 saniye: Isik ve golge jaluzilerden gecip ahsap masa ve fincan yuzeyinde yavasca kayiyor.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Geriye dogru 10 saniye uzat, sicak ogle sonrasi isiginda kamera once kosedeki hafif ruzgarda dalgalanan tentelerle baslar.',
                  duration: '10s',
                  label: 'Aycicegi Scooter',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Daha Hassas Ton, Daha Gercekci Ses',
              level: 4,
              cases: [
                {
                  prompt: 'Sabit kamera, merkezi balik gozu lensi dairesel bir delikten asagiyi goruntulur.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'Saglanan ofis binasi tanitim fotograflarindan 15 saniyelik sinema kalitesinde gercekci bir emlak belgeseli uret.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: '"Kedi-Kopek Talk Show"da bir stand-up diyalogu. Duygular zengin olmali ve stand-up gosteri performansina uygun olmali.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'Geleneksel Yu Operasi klasik sahnesi "Zha Mei An" eslik muzigi caliniyor.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: '15 saniyelik bir MV videosu uret. Anahtar kelimeler: istikrarli kompozisyon / hafif zoom / alcak aciyla kahraman hissi / belgesel ama luks.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'Ekranin ortasindaki sapkali kiz nazikce soyluyarak "I\'m so proud of my family!" diyor.',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Sabit kamera. Ayakta duran kasliadamin (kaptan) yumrugunu sikip kolunu sallayarak Ispanyolca soyledigini: "Uc dakika sonra baskin!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 saniye: Baslangicta calar saat caliyor, puslu bir goruntuyle gorsel1 beliriyor.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: '@gorsel1\'deki maymun cay dukkaninin tezgahina dogru yuruyor, kamera arkasinda takip ediyor.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Bilim populerlestirme stili ve tonuyla gorsel1\'deki icerigi canlandir.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Sahne Surekliligi (Tek Cekim) Guclendirildi',
              level: 4,
              cases: [
                {
                  prompt: '@gorsel1-5, tek cekim takip kamerasi, sokaktan kosucuyu takip ederek merdivenleri cikar, koridoru gecer, cativa ulasir ve sonunda sehre bakis.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: '@gorsel1 ilk kare olarak, goruntu ucak penceresinin disina dogru genisler.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Casus filmi stili, @gorsel1 ilk kare olarak, kamera kirmizi mantolu kadin casusun onunden takip cekimi.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: '@gorsel1\'in dis mekan goruntusu kamerasinda, birinci sahis bakis acisiyla hizla ahsap kulube icine yakinlasma.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@gorsel1-5, oznel bakis acisi tek cekim heyecan verici lunapark treni sahnesi.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Video Duzenleme Yuksek Kullanilabilirlik',
              level: 4,
              description: 'Bazen zaten bir videonuz vardir ve basa donup gorsel arayip tekrar yapmak istemezsiniz, sadece kucuk bir hareketi ayarlamak, birkac saniye uzatmak veya karakterin performansini istediginize yaklastirmak istersiniz. Artik mevcut videoyu dogrudan giris olarak kullanabilir ve diger icerigi degistirmeden belirli bolumleri, hareketleri veya ritimleri hedefli olarak duzeltebilirsiniz.',
              cases: [
                {
                  prompt: '@video1\'in hikayesini tersine cevir, adamin bakislari yumusak halden aniden soguk ve acimasiz hale gelir.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: '@video1\'in tum hikayesini tersine cevir. 0-3 saniye goruntu: Takim elbiseli adam barda oturuyor.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Video1\'deki kadin solisti gorsel1\'deki erkek solistle degistir, hareketler tamamen orijinal videoyu taklit etsin.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Video1\'deki kadinin sac modelini kirmizi uzun sac olarak degistir, gorsel1\'deki buyuk beyaz kopekbaligi yavasca yuzeyden cikar.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'Video1 kamera saga pan, kizarmis tavuk dukkani sahibi yogun bir sekilde siraya giren musterilere tavuk servis ediyor.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Muzik Senkronizasyonu Yapilabilir',
              level: 4,
              cases: [
                {
                  prompt: 'Posterdeki kiz surekli kiyafet degistiriyor, kiyafetler @gorsel1 ve @gorsel2\'nin stilini referans aliyor.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Muzik Senkronizasyonu',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: '@gorsel1-7\'deki gorselleri @videodaki anahtar karelere gore senkronize et.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: '@gorsel1-6\'daki manzara sahnelerini @videodaki goruntu ritmine gore senkronize et.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: '8 saniyelik entelektuel strateji savas anime sahnesi, intikam temasina uygun.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Daha Iyi Duygu Performansi',
              level: 4,
              cases: [
                {
                  prompt: '@gorsel1\'deki kadin aynanin onune yuruyor, aynada kendine bakiyor, bir sure dusunuyor ve aniden cokuyor ve ciglik atiyor.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'Bu bir davlumbaz reklami. @gorsel1 ilk kare olarak, kadin zarif bir sekilde yemek pisiyor.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@gorsel1 ilk kare olarak, kamera donerek yakinlasiyor, karakter aniden basini kaldirip guclu bir sekilde kugurmeye basliyor.',
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
    title: 'Son Soz',
    content: [
      'Seedance 2.0\'in cok modaliteli yetenekleri surekli gelisiyor ve daha fazla giris kombinasyon yontemini desteklemek icin guncellemeye devam edecegiz. Bu kullanim kilavuzunun yaraticilik ozgurlugunuze yardimci olmasini umuyoruz!',
      'Bir hata bulduysaniz veya kullanim onerileri ya da ihtiyac senaryolariniz varsa, yorum birakin veya bize mesaj gonderin! Surekli optimize ederek JiMeng\'i gercekten sizi mutlu eden ve ise yarayan bir uretkenlik aracina donusturmeye devam edecegiz.',
    ],
  },
};
