import type { ManualData } from './manual-data';

const CDN = 'https://image.agent-skills.cc/uploads/manual';

export const manualData: ManualData = {
  hero: {
    title: 'Video Seedance 2.0 resmi hadir di JiMeng! Kill the game!',
    intro: [
      'Sejak hari di mana kita hanya bisa "bercerita" dengan teks dan frame pertama/terakhir, kami ingin membuat model video yang benar-benar memahami ekspresi Anda. Hari ini, model itu akhirnya hadir!',
      'JiMeng Seedance 2.0 kini mendukung empat jenis input modalitas: gambar, video, audio, dan teks, menawarkan cara ekspresi yang lebih kaya dan kontrol generasi yang lebih presisi.',
      'Anda bisa menentukan gaya visual dengan satu gambar, menentukan gerakan karakter dan perubahan kamera dengan satu video, menciptakan ritme dan suasana dengan beberapa detik audio... Dikombinasikan dengan prompt, proses kreatif menjadi lebih alami, lebih efisien, dan lebih seperti pekerjaan seorang "sutradara" sejati.',
      'Dalam pembaruan ini, "kemampuan referensi" adalah sorotan terbesar:',
    ],
    highlights: [
      'Gambar referensi dapat mereproduksi komposisi gambar dan detail karakter secara akurat',
      'Video referensi mendukung bahasa kamera, ritme aksi kompleks, dan replikasi efek kreatif',
      'Video mendukung perpanjangan dan penyambungan yang mulus, dapat menghasilkan adegan berkelanjutan sesuai prompt pengguna - tidak hanya menghasilkan, tetapi juga "melanjutkan pengambilan gambar"',
      'Kemampuan pengeditan juga diperkuat, mendukung penggantian, penghapusan, dan penambahan karakter pada video yang sudah ada',
    ],
  },
  params: [
    { key: 'Input Gambar', value: 'Maksimal 9 gambar' },
    { key: 'Input Video', value: 'Maksimal 3 video, total durasi tidak lebih dari 15 detik (sedikit lebih mahal jika ada video referensi)' },
    { key: 'Input Audio', value: 'Mendukung upload MP3, maksimal 3 file, total durasi tidak lebih dari 15 detik' },
    { key: 'Input Teks', value: 'Bahasa alami' },
    { key: 'Durasi Generasi', value: 'Maksimal 15 detik, bebas memilih antara 4-15 detik' },
    { key: 'Output Suara', value: 'Efek suara/musik latar bawaan' },
  ],
  paramsNote: 'Batasan interaksi: Batas atas total input campuran yang didukung saat ini adalah 12 file. Disarankan untuk mengupload materi yang paling berpengaruh pada gambar atau ritme terlebih dahulu, dan mengalokasikan jumlah file untuk setiap modalitas secara seimbang.',
  interaction: {
    notes: [
      'JiMeng Seedance 2.0 mendukung pintu masuk "Frame Pertama/Terakhir" dan "Referensi Universal". Multi-frame cerdas dan referensi subjek tidak dapat dipilih. Jika Anda hanya mengupload gambar frame pertama + prompt, gunakan pintu masuk Frame Pertama/Terakhir; untuk input kombinasi multimodal (gambar, video, audio, teks), Anda perlu masuk ke pintu masuk Referensi Universal.',
      'Metode interaksi yang didukung saat ini adalah menentukan kegunaan setiap gambar, video, dan audio melalui "@nama_materi", misalnya: @gambar1 sebagai frame pertama, @video1 sebagai referensi bahasa kamera, @audio1 untuk musik latar.',
    ],
    steps: [
      {
        title: 'Antarmuka Utama',
        images: [`${CDN}/image_002.png`, `${CDN}/image_003.png`, `${CDN}/image_004.png`],
        captions: ['Pintu masuk: Seedance 2.0 - Referensi Universal/Frame Pertama dan Terakhir', 'Buka dialog file lokal', 'Pilih file dan tambahkan ke kolom input'],
      },
      {
        title: 'Cara menggunakan @ dalam mode Referensi Universal',
        description: 'Metode 1: Ketik "@" untuk memanggil referensi',
        images: [`${CDN}/image_005.png`, `${CDN}/image_006.png`, `${CDN}/image_007.png`],
        captions: ['Ketik "@"', 'Pilih referensi, ditempatkan di kolom input', 'Masukkan prompt'],
      },
      {
        title: 'Metode 2: Klik alat parameter "@" untuk memanggil referensi',
        images: [`${CDN}/image_008.jpg`, `${CDN}/image_009.png`],
        captions: ['Klik "@" untuk memilih referensi', 'Masukkan prompt'],
      },
    ],
    previewNote: 'Setelah mengupload materi, gambar, video, dan audio semuanya mendukung pratinjau saat diarahkan kursor.',
    previewImages: [`${CDN}/image_010.jpg`, `${CDN}/image_011.png`, `${CDN}/image_012.jpg`],
  },
  transitionText: 'Berikut adalah beberapa penggunaan dan cara bermain dalam berbagai skenario untuk membantu Anda lebih memahami peningkatan Seedance 2.0 dalam kualitas generasi, kemampuan kontrol, dan ekspresi kreatif. Jika Anda belum tahu harus mulai dari mana, lihat dulu contoh-contoh ini untuk mendapatkan inspirasi~',
  sections: [
    {
      id: 'basic-enhancement',
      title: '1. Peningkatan Signifikan pada Kemampuan Dasar: Lebih Stabil, Lebih Mulus, Lebih Realistis!',
      level: 2,
      description: 'Bukan hanya multimodal, Seedance 2.0 juga ditingkatkan secara signifikan di level dasar. Hukum fisika lebih masuk akal, performa gerakan lebih alami dan mulus, pemahaman instruksi lebih presisi, dan konsistensi gaya lebih stabil. Tidak hanya mampu menyelesaikan tugas generasi sulit seperti gerakan kompleks dan gerakan berkelanjutan secara stabil, tetapi efek video keseluruhan juga lebih realistis dan lebih halus. Ini adalah evolusi menyeluruh dari kemampuan dasar!',
      cases: [
        {
          prompt: 'Seorang gadis dengan anggun menjemur pakaian. Setelah selesai, dia mengambil pakaian lain dari ember dan mengibas-ngibaskannya dengan kuat.',
          resultVideos: [`${CDN}/v2_001.mp4`],
        },
        {
          prompt: 'Karakter dalam lukisan dengan ekspresi bersalah, matanya melirik ke kiri dan kanan lalu mengintip keluar dari bingkai lukisan. Dengan cepat menjulurkan tangannya keluar bingkai untuk mengambil cola dan menyeruputnya, lalu menunjukkan ekspresi puas. Saat itu terdengar suara langkah kaki, karakter dalam lukisan buru-buru mengembalikan cola ke tempatnya. Seorang koboi datang dan mengambil cola dari gelas. Akhirnya kamera maju dan layar perlahan menjadi latar belakang hitam dengan hanya pencahayaan atas yang menyinari kaleng cola. Di bagian bawah layar muncul subtitle artistik dan narasi: "Cola Nikmat, Wajib Dicoba!"',
          label: 'Ultra Realisme',
          resultVideos: [`${CDN}/v2_002.mp4`],
        },
        {
          prompt: 'Kamera sedikit zoom out (menampilkan panorama jalan) dan mengikuti protagonis wanita. Angin menerbangkan roknya saat dia berjalan di jalan-jalan London abad ke-19. Saat berjalan, sebuah kereta uap muncul dari jalan kanan dan melaju cepat melewatinya, angin mengangkat roknya. Protagonis wanita terkejut dan buru-buru menahan roknya dengan kedua tangan. Efek suara latar: langkah kaki, suara kerumunan, suara kendaraan, dll.',
          resultVideos: [`${CDN}/v2_003.mp4`],
        },
        {
          prompt: 'Kamera mengikuti pria berpakaian hitam yang melarikan diri dengan cepat, sekelompok orang mengejar di belakang. Kamera beralih ke pengejaran dari samping, karakter panik menabrak kios buah di pinggir jalan lalu bangkit dan terus berlari. Suara kerumunan yang panik.',
          resultVideos: [`${CDN}/v2_004.mp4`],
        },
      ],
    },
    {
      id: 'multimodal-upgrade',
      title: '2. Peningkatan Multimodal Menyeluruh: Kreasi Video Memasuki Era "Kombinasi Bebas"!',
      level: 2,
      subsections: [
        {
          id: 'multimodal-intro',
          title: '2.1 Pengenalan Multimodal Seedance 2.0',
          level: 3,
          description: 'Seedance 2.0 = Kemampuan referensi multimodal (bisa mereferensi segalanya) + Generasi kreatif yang kuat + Respons instruksi yang presisi (pemahaman luar biasa)\n\nMendukung upload teks, gambar, video, dan audio. Materi-materi ini dapat digunakan sebagai objek penggunaan atau objek referensi. Anda bisa mereferensi gerakan, efek khusus, format, pergerakan kamera, karakter, adegan, dan suara dari konten apa pun. Selama prompt ditulis dengan jelas, model akan memahaminya.\n\nCukup deskripsikan gambar dan gerakan yang Anda inginkan dalam bahasa alami. Jelaskan apakah ini referensi atau pengeditan~ Ketika materi banyak, periksa kembali apakah setiap @objek sudah diberi label dengan benar. Jangan mencampuradukkan gambar, video, dan karakter.',
        },
        {
          id: 'special-usage',
          title: '2.2 Cara Penggunaan Khusus (tanpa batasan, hanya sebagai referensi)',
          level: 3,
          description: 'Punya gambar frame pertama/terakhir? Ingin juga mereferensi gerakan video?\n-> Tulis dengan jelas di prompt, misalnya: "@gambar1 sebagai frame pertama, referensi gerakan pertarungan @video1"\n\nIngin memperpanjang video yang sudah ada?\n-> Tentukan durasi perpanjangan, misalnya: "Perpanjang @video1 selama 5 detik". Catatan: durasi generasi yang dipilih harus merupakan durasi "bagian yang ditambahkan"\n\nIngin menggabungkan beberapa video?\n-> Jelaskan logika penggabungan di prompt, misalnya: "Saya ingin menambahkan adegan antara @video1 dan @video2, isinya adalah xxx"\n\nTidak punya materi audio? Bisa langsung mereferensi suara dari video.\n\nIngin menghasilkan gerakan berkelanjutan?\n-> Tambahkan deskripsi kontinuitas di prompt, misalnya: "Karakter langsung beralih dari lompatan ke berguling, menjaga gerakan tetap mulus dan lancar" @gambar1@gambar2@gambar3...',
        },
        {
          id: 'hard-problems',
          title: '2.3 Masalah Video yang Selalu Sulit, Sekarang Benar-Benar Bisa Diatasi!',
          level: 3,
          description: 'Membuat video selalu ada masalah yang memusingkan: wajah berubah, gerakan tidak mirip, perpanjangan video tidak natural, saat mengedit ritme keseluruhan berubah... Pembaruan multimodal kali ini menyelesaikan semua "masalah lama" ini sekaligus. Berikut adalah contoh penggunaan konkretnya.',
          subsections: [
            {
              id: 'consistency',
              title: '2.3.1 Peningkatan Konsistensi Menyeluruh',
              level: 4,
              description: 'Anda mungkin pernah mengalami masalah ini: karakter dalam gambar terlihat berbeda antara shot, detail produk hilang, teks kecil menjadi buram, adegan berubah tiba-tiba, gaya kamera tidak bisa diseragamkan... Masalah konsistensi yang umum dalam kreasi ini sekarang bisa diselesaikan di versi 2.0. Dari wajah hingga pakaian, hingga detail tipografi, konsistensi keseluruhan lebih stabil dan lebih akurat.',
              cases: [
                {
                  prompt: 'Pria @gambar1 pulang kerja dengan lelah berjalan di koridor, langkahnya melambat, dan akhirnya berhenti di depan pintu rumah. Close-up wajah, pria itu menarik napas dalam, menyesuaikan emosinya, menyingkirkan perasaan negatif dan menjadi rileks. Lalu close-up mencari kunci, memasukkannya ke lubang kunci. Setelah masuk rumah, putri kecilnya dan anjing peliharaan berlari dengan gembira menyambut dan memeluk. Interior sangat hangat dan nyaman, percakapan alami sepanjang video.',
                  resultVideos: [`${CDN}/v2_005.mp4`],
                },
                {
                  prompt: 'Ganti wanita di @video1 menjadi peran dan opera Cina (huadan), adegan di atas panggung yang indah. Referensi pergerakan kamera dan efek transisi @video1, gunakan kamera untuk mencocokkan gerakan karakter, estetika panggung yang maksimal, dan dampak visual yang kuat.',
                  inputVideos: [`${CDN}/v2_006.mp4`],
                  resultVideos: [`${CDN}/v2_007.mp4`],
                },
                {
                  prompt: 'Referensi semua transisi dan pergerakan kamera @video1, one-take, dimulai dari papan catur.',
                  inputVideos: [`${CDN}/v2_008.mp4`],
                  resultVideos: [`${CDN}/v2_009.mp4`],
                },
                {
                  prompt: 'Tampilan 0-2 detik: Flash-cut cepat empat panel, empat pita merah, pink, ungu, dan motif macan tutul membeku secara berurutan.',
                  resultScreenshots: [`${CDN}/image_040.png`],
                  resultVideos: [`${CDN}/v2_010.mp4`],
                },
                {
                  prompt: 'Tampilkan tas @gambar2 dengan gaya pemotretan komersial. Sisi tas mereferensi @gambar1, tekstur permukaan mereferensi @gambar3. Semua detail tas harus ditampilkan, musik latar megah dan mengesankan.',
                  inputImages: [`${CDN}/image_041.png`],
                  resultVideos: [`${CDN}/v2_011.mp4`],
                },
                {
                  prompt: 'Gunakan @gambar1 sebagai frame pertama layar, sudut pandang orang pertama, referensi efek pergerakan kamera @video1, adegan atas mereferensi @gambar2, adegan kiri mereferensi @gambar3, adegan kanan mereferensi @gambar4.',
                  inputVideos: [`${CDN}/v2_012.mp4`],
                  label: 'Pergerakan Kamera Frame Pertama',
                  resultVideos: [`${CDN}/v2_013.mp4`],
                },
              ],
            },
            {
              id: 'camera-replication',
              title: '2.3.2 Replikasi Pergerakan Kamera',
              level: 4,
              description: 'Dulu untuk membuat model meniru posisi, pergerakan kamera, atau aksi kompleks dari sebuah film, Anda harus menulis banyak detail prompt atau bahkan sama sekali tidak bisa. Sekarang, cukup upload satu video referensi.',
              cases: [
                {
                  prompt: 'Referensi penampilan pria di @gambar1, dia berada di lift @gambar2, referensi sepenuhnya semua efek pergerakan kamera dan ekspresi wajah protagonis di @video1.',
                  inputVideos: [`${CDN}/v2_014.mp4`],
                  resultVideos: [`${CDN}/v2_015.mp4`],
                },
                {
                  prompt: 'Referensi penampilan pria di @gambar1, dia berada di koridor @gambar2, referensi sepenuhnya semua efek pergerakan kamera @video1.',
                  inputImages: [`${CDN}/image_059.png`, `${CDN}/image_060.png`, `${CDN}/image_061.png`, `${CDN}/image_062.png`],
                  inputVideos: [`${CDN}/v2_016.mp4`],
                  resultVideos: [`${CDN}/v2_017.mp4`],
                },
                {
                  prompt: 'Tablet @gambar1 sebagai subjek utama, pergerakan kamera mereferensi @video1.',
                  inputVideos: [`${CDN}/v2_018.mp4`],
                  resultScreenshots: [`${CDN}/image_072.png`],
                  label: 'Rotasi Fokus',
                  resultVideos: [`${CDN}/v2_019.mp4`],
                },
                {
                  prompt: 'Aktris @gambar1 sebagai subjek utama, referensi gaya pergerakan kamera @video1 untuk melakukan zoom in/out/pan/tilt berirama.',
                  inputVideos: [`${CDN}/v2_020.mp4`],
                  label: 'Tarian Zoom',
                  resultVideos: [`${CDN}/v2_021.mp4`],
                },
                {
                  prompt: 'Referensi @gambar1@gambar2 untuk karakter bertombak, @gambar3@gambar4 untuk karakter berpedang ganda, tiru gerakan @video1, bertarung di hutan maple @gambar5.',
                  inputVideos: [`${CDN}/v2_022.mp4`],
                  resultScreenshots: [`${CDN}/image_086.png`],
                  resultVideos: [`${CDN}/v2_023.mp4`],
                },
                {
                  prompt: 'Referensi gerakan karakter video1, referensi bahasa kamera berputar video2, hasilkan adegan pertarungan karakter1 dan karakter2.',
                  inputImages: [`${CDN}/image_087.png`],
                  inputVideos: [`${CDN}/v2_024.mp4`, `${CDN}/v2_025.mp4`],
                  resultScreenshots: [`${CDN}/image_096.png`],
                  resultVideos: [`${CDN}/v2_026.mp4`],
                },
                {
                  prompt: 'Referensi pergerakan kamera dan ritme pergantian gambar video1, replikasi dengan supercar merah dari gambar1.',
                  inputVideos: [`${CDN}/v2_027.mp4`],
                  label: 'Pergerakan Kamera Mobil',
                  resultVideos: [`${CDN}/v2_028.mp4`],
                },
              ],
            },
            {
              id: 'creative-template',
              title: '2.3.3 Template Kreatif / Replikasi Presisi Efek Khusus Kompleks',
              level: 4,
              description: 'Bukan hanya menghasilkan gambar dan menulis cerita, Seedance 2.0 juga mendukung "meniru" - transisi kreatif, iklan jadi, cuplikan film, editing kompleks. Selama Anda memiliki gambar atau video referensi, model dapat mengidentifikasi ritme aksi, bahasa kamera, dan struktur visual, lalu mereplikasinya dengan presisi.',
              cases: [
                {
                  prompt: 'Ganti karakter @video1 dengan @gambar1, @gambar1 sebagai frame pertama, karakter mengenakan kacamata sci-fi virtual, referensi pergerakan kamera @video1.',
                  inputVideos: [`${CDN}/v2_029.mp4`],
                  resultScreenshots: [`${CDN}/image_109.png`],
                  resultVideos: [`${CDN}/v2_030.mp4`],
                },
                {
                  prompt: 'Referensi fitur wajah model dari gambar pertama. Model secara berurutan mengenakan pakaian dari gambar referensi ke-2 hingga ke-6 dan mendekati kamera.',
                  inputImages: [`${CDN}/image_112.png`, `${CDN}/image_113.png`, `${CDN}/image_114.png`],
                  inputVideos: [`${CDN}/v2_031.mp4`],
                  resultVideos: [`${CDN}/v2_032.mp4`],
                },
                {
                  prompt: 'Gunakan konsep iklan dari video referensi, dengan gambar jaket bulu angsa yang disediakan dan slogan iklan untuk menghasilkan video iklan jaket bulu angsa baru.',
                  inputVideos: [`${CDN}/v2_033.mp4`],
                  resultVideos: [`${CDN}/v2_034.mp4`],
                },
                {
                  prompt: 'Gaya tinta hitam-putih, karakter @gambar1 mereferensi efek khusus dan gerakan @video1, menampilkan pertunjukan tai chi bergaya tinta.',
                  inputVideos: [`${CDN}/v2_035.mp4`],
                  resultVideos: [`${CDN}/v2_036.mp4`],
                },
                {
                  prompt: 'Ganti karakter frame pertama @video1 dengan @gambar1, referensi sepenuhnya efek khusus dan gerakan @video1.',
                  inputVideos: [`${CDN}/v2_037.mp4`],
                  resultScreenshots: [`${CDN}/image_137.png`],
                  label: 'Ganti Kostum',
                  resultVideos: [`${CDN}/v2_038.mp4`],
                },
                {
                  prompt: 'Dimulai dari langit-langit @gambar1, transisi menggunakan efek pecahan puzzle @video1.',
                  inputImages: [`${CDN}/image_138.png`],
                  inputVideos: [`${CDN}/v2_039.mp4`],
                  resultScreenshots: [`${CDN}/image_141.png`],
                  resultVideos: [`${CDN}/v2_040.mp4`],
                },
                {
                  prompt: 'Dibuka dengan layar hitam, referensi efek partikel dan tekstur video1, butiran pasir bertekstur emas berlapis.',
                  inputVideos: [`${CDN}/v2_041.mp4`],
                  resultScreenshots: [`${CDN}/image_144.png`],
                  label: 'Intro AE',
                  resultVideos: [`${CDN}/v2_042.mp4`],
                },
                {
                  prompt: 'Karakter @gambar1 mereferensi gerakan dan perubahan ekspresi @video1, menampilkan aksi abstrak makan mie instan.',
                  inputVideos: [`${CDN}/v2_043.mp4`],
                  resultVideos: [`${CDN}/v2_044.mp4`],
                },
              ],
            },
            {
              id: 'story-completion',
              title: '2.3.4 Kreativitas Model dan Kemampuan Melengkapi Cerita',
              level: 4,
              cases: [
                {
                  prompt: 'Animasikan @gambar1 sebagai komik dari kiri ke kanan, atas ke bawah.',
                  inputVideos: [`${CDN}/v2_045.mp4`],
                  resultScreenshots: [`${CDN}/image_158.png`],
                  resultVideos: [`${CDN}/v2_046.mp4`],
                },
                {
                  prompt: 'Referensi storyboard dari @gambar1, buat pembukaan bergaya penyembuhan berdurasi 15 detik tentang "Empat Musim Masa Kecil".',
                  resultScreenshots: [`${CDN}/image_160.png`],
                  resultVideos: [`${CDN}/v2_047.mp4`],
                },
                {
                  prompt: 'Referensi audio video1, gunakan gambar 1-5 sebagai inspirasi untuk membuat video emosional secara bebas.',
                  inputImages: [`${CDN}/image_161.png`, `${CDN}/image_162.png`, `${CDN}/image_163.png`, `${CDN}/image_164.png`],
                  resultScreenshots: [`${CDN}/image_168.png`],
                  resultVideos: [`${CDN}/v2_048.mp4`],
                },
              ],
            },
            {
              id: 'video-extension',
              title: '2.3.5 Perpanjangan Video',
              level: 4,
              cases: [
                {
                  prompt: 'Perpanjang video 15 detik, referensi gambar keledai naik motor dari @gambar1 dan @gambar2, lengkapi dengan iklan kreatif.',
                  duration: '15s',
                  inputImages: [`${CDN}/image_169.png`],
                  inputVideos: [`${CDN}/v2_049.mp4`],
                  resultVideos: [`${CDN}/v2_050.mp4`],
                },
                {
                  prompt: 'Perpanjang video 6 detik, muncul musik gitar elektrik yang penuh semangat, di tengah video muncul teks iklan "JUST DO IT".',
                  duration: '6s',
                  inputImages: [`${CDN}/image_173.png`],
                  inputVideos: [`${CDN}/v2_051.mp4`],
                  resultVideos: [`${CDN}/v2_052.mp4`],
                },
                {
                  prompt: 'Perpanjang @video1 selama 15 detik. 1-5 detik: Cahaya dan bayangan perlahan bergeser melalui tirai jendela di atas meja kayu dan permukaan cangkir.',
                  duration: '15s',
                  inputVideos: [`${CDN}/v2_053.mp4`],
                  resultVideos: [`${CDN}/v2_054.mp4`],
                },
                {
                  prompt: 'Perpanjang ke depan 10 detik, dalam cahaya sore yang hangat, kamera dimulai dari kanopi di sudut jalan yang tertiup angin sepoi.',
                  duration: '10s',
                  label: 'Skuter Bunga Matahari',
                  inputVideos: [`${CDN}/v2_055.mp4`],
                  resultVideos: [`${CDN}/v2_056.mp4`],
                },
              ],
            },
            {
              id: 'audio-quality',
              title: '2.3.6 Warna Suara Lebih Akurat, Suara Lebih Nyata',
              level: 4,
              cases: [
                {
                  prompt: 'Kamera tetap, lensa fisheye tengah melihat ke bawah melalui lubang bulat.',
                  inputVideos: [`${CDN}/v2_057.mp4`, `${CDN}/v2_058.mp4`, `${CDN}/v2_059.mp4`],
                  resultVideos: [`${CDN}/v2_060.mp4`],
                },
                {
                  prompt: 'Berdasarkan foto promosi gedung perkantoran yang disediakan, hasilkan film dokumenter properti berdurasi 15 detik dengan gaya sinematik realistis.',
                  inputImages: [`${CDN}/image_196.png`, `${CDN}/image_197.png`, `${CDN}/image_198.png`],
                  inputVideos: [`${CDN}/v2_061.mp4`],
                  resultVideos: [`${CDN}/v2_062.mp4`],
                },
                {
                  prompt: 'Dialog roasting di "Talk Show Kucing & Anjing", harus kaya emosi dan sesuai dengan pertunjukan stand-up comedy.',
                  inputImages: [`${CDN}/image_201.png`],
                  resultVideos: [`${CDN}/v2_063.mp4`],
                },
                {
                  prompt: 'Iringan musik adegan klasik Opera Yu "Kasus Zha Mei" mulai mengalun.',
                  inputImages: [`${CDN}/image_206.png`],
                  resultVideos: [`${CDN}/v2_064.mp4`],
                },
                {
                  prompt: 'Hasilkan video MV berdurasi 15 detik. Kata kunci: komposisi stabil / zoom halus / sudut rendah heroik / dokumenter tapi mewah.',
                  inputImages: [`${CDN}/image_208.png`],
                  resultVideos: [`${CDN}/v2_065.mp4`],
                },
                {
                  prompt: 'Gadis bertopi di tengah layar bernyanyi lembut "I\'m so proud of my family!"',
                  inputImages: [`${CDN}/image_210.png`],
                  resultVideos: [`${CDN}/v2_066.mp4`],
                },
                {
                  prompt: 'Kamera tetap. Pria kekar yang berdiri (kapten) mengepalkan tinju dan mengayunkan lengannya sambil berkata dalam bahasa Spanyol: "Serangan dalam tiga menit!"',
                  inputImages: [`${CDN}/image_215.png`],
                  resultVideos: [`${CDN}/v2_067.mp4`],
                },
                {
                  prompt: '0-3 detik: Di awal jam alarm berbunyi, gambar1 muncul dalam tampilan kabur.',
                  inputImages: [`${CDN}/image_217.png`, `${CDN}/image_218.png`],
                  inputVideos: [`${CDN}/v2_068.mp4`],
                  resultVideos: [`${CDN}/v2_069.mp4`],
                },
                {
                  prompt: 'Monyet @gambar1 berjalan menuju konter kedai teh susu, kamera mengikuti dari belakang.',
                  inputImages: [`${CDN}/image_224.png`, `${CDN}/image_225.png`, `${CDN}/image_226.png`],
                  resultVideos: [`${CDN}/v2_070.mp4`],
                },
                {
                  prompt: 'Dengan gaya dan nada sains populer, tampilkan konten dari gambar1.',
                  resultVideos: [`${CDN}/v2_071.mp4`],
                },
              ],
            },
            {
              id: 'one-shot-continuity',
              title: '2.3.7 Kontinuitas Adegan (One-Take) Lebih Kuat',
              level: 4,
              cases: [
                {
                  prompt: '@gambar1-5, kamera pelacakan one-take, mengikuti pelari dari jalan naik tangga, melewati koridor, mencapai atap, dan akhirnya memandangi kota dari atas.',
                  inputImages: [`${CDN}/image_231.png`, `${CDN}/image_232.png`, `${CDN}/image_233.png`, `${CDN}/image_234.png`, `${CDN}/image_235.png`],
                  resultVideos: [`${CDN}/v2_072.mp4`],
                },
                {
                  prompt: 'Dengan @gambar1 sebagai frame pertama, gambar melebar ke pemandangan di luar jendela pesawat.',
                  inputImages: [`${CDN}/image_239.png`, `${CDN}/image_240.png`, `${CDN}/image_241.png`],
                  resultVideos: [`${CDN}/v2_073.mp4`],
                },
                {
                  prompt: 'Gaya film mata-mata, @gambar1 sebagai frame pertama, kamera mengikuti dari depan agen wanita berjas hujan merah.',
                  inputImages: [`${CDN}/image_243.png`, `${CDN}/image_244.png`, `${CDN}/image_245.png`, `${CDN}/image_246.png`],
                  resultVideos: [`${CDN}/v2_074.mp4`],
                },
                {
                  prompt: 'Dari kamera pemandangan luar @gambar1, sudut pandang orang pertama dengan zoom cepat ke dalam pondok kayu.',
                  inputImages: [`${CDN}/image_248.png`, `${CDN}/image_249.png`, `${CDN}/image_250.png`, `${CDN}/image_251.png`],
                  resultVideos: [`${CDN}/v2_075.mp4`],
                },
                {
                  prompt: '@gambar1-5, sudut pandang subjektif one-take roller coaster yang menegangkan.',
                  inputImages: [`${CDN}/image_256.png`, `${CDN}/image_257.png`, `${CDN}/image_258.png`, `${CDN}/image_259.png`, `${CDN}/image_260.png`],
                  resultVideos: [`${CDN}/v2_076.mp4`],
                },
              ],
            },
            {
              id: 'video-editing',
              title: '2.3.8 Pengeditan Video yang Sangat Berguna',
              level: 4,
              description: 'Terkadang Anda sudah memiliki video dan tidak ingin mencari gambar dari awal atau membuat ulang semuanya. Anda hanya ingin menyesuaikan sebagian kecil gerakan, memperpanjang beberapa detik, atau membuat penampilan karakter lebih sesuai keinginan. Sekarang Anda bisa langsung menggunakan video yang sudah ada sebagai input, dan melakukan modifikasi tertarget pada segmen, gerakan, atau ritme tertentu tanpa mengubah konten lainnya.',
              cases: [
                {
                  prompt: 'Balikkan alur cerita @video1, tatapan pria berubah dari lembut menjadi dingin dan kejam dalam sekejap.',
                  inputVideos: [`${CDN}/v2_077.mp4`],
                  resultVideos: [`${CDN}/v2_078.mp4`],
                },
                {
                  prompt: 'Balikkan seluruh alur cerita @video1. Tampilan 0-3 detik: Pria berjas duduk di bar.',
                  inputVideos: [`${CDN}/v2_079.mp4`],
                  resultVideos: [`${CDN}/v2_080.mp4`],
                },
                {
                  prompt: 'Ganti vokalis wanita di video1 dengan vokalis pria di gambar1, gerakan sepenuhnya meniru video asli.',
                  inputImages: [`${CDN}/image_271.png`],
                  inputVideos: [`${CDN}/v2_081.mp4`],
                  resultVideos: [`${CDN}/v2_082.mp4`],
                },
                {
                  prompt: 'Ubah gaya rambut wanita di video1 menjadi rambut panjang merah, hiu putih besar dari gambar1 perlahan muncul dari air.',
                  inputImages: [`${CDN}/image_274.png`],
                  inputVideos: [`${CDN}/v2_083.mp4`],
                  resultVideos: [`${CDN}/v2_084.mp4`],
                },
                {
                  prompt: 'Kamera video1 pan ke kanan, pemilik kedai ayam goreng sibuk menyerahkan ayam goreng kepada pelanggan yang mengantri.',
                  inputImages: [`${CDN}/image_281.png`],
                  inputVideos: [`${CDN}/v2_085.mp4`],
                  resultVideos: [`${CDN}/v2_086.mp4`],
                },
              ],
            },
            {
              id: 'music-sync',
              title: '2.3.9 Sinkronisasi Musik Dimungkinkan',
              level: 4,
              cases: [
                {
                  prompt: 'Gadis di poster terus-menerus berganti pakaian, pakaian mereferensi gaya @gambar1 dan @gambar2.',
                  inputImages: [`${CDN}/image_286.png`, `${CDN}/image_287.png`, `${CDN}/image_288.png`, `${CDN}/image_289.png`],
                  inputVideos: [`${CDN}/v2_087.mp4`],
                  label: 'Sinkronisasi Musik',
                  resultVideos: [`${CDN}/v2_088.mp4`],
                },
                {
                  prompt: 'Gambar @gambar1-7 disinkronkan dengan keyframe dari @video.',
                  inputImages: [`${CDN}/image_294.png`, `${CDN}/image_295.png`, `${CDN}/image_296.png`, `${CDN}/image_297.png`, `${CDN}/image_298.png`, `${CDN}/image_299.png`],
                  inputVideos: [`${CDN}/v2_089.mp4`],
                  resultVideos: [`${CDN}/v2_090.mp4`],
                },
                {
                  prompt: 'Gambar pemandangan @gambar1-6 disinkronkan dengan ritme visual @video.',
                  inputVideos: [`${CDN}/v2_091.mp4`],
                  resultVideos: [`${CDN}/v2_092.mp4`],
                },
                {
                  prompt: 'Cuplikan anime pertarungan strategi intelektual 8 detik, sesuai dengan tema balas dendam.',
                  resultVideos: [`${CDN}/v2_093.mp4`],
                },
              ],
            },
            {
              id: 'emotion-acting',
              title: '2.3.10 Penampilan Emosi Lebih Baik',
              level: 4,
              cases: [
                {
                  prompt: 'Wanita @gambar1 berjalan ke depan cermin, memandangi dirinya di cermin, merenungkan sejenak lalu tiba-tiba runtuh dan berteriak.',
                  inputImages: [`${CDN}/image_316.png`, `${CDN}/image_317.png`],
                  inputVideos: [`${CDN}/v2_094.mp4`],
                  resultVideos: [`${CDN}/v2_095.mp4`],
                },
                {
                  prompt: 'Ini adalah iklan cooker hood. @gambar1 sebagai frame pertama, wanita memasak dengan anggun.',
                  inputImages: [`${CDN}/image_320.png`, `${CDN}/image_321.png`, `${CDN}/image_322.png`, `${CDN}/image_323.png`],
                  resultVideos: [`${CDN}/v2_096.mp4`],
                },
                {
                  prompt: '@gambar1 sebagai frame pertama, kamera berputar dan zoom in, karakter tiba-tiba mendongakkan kepala dan mulai mengaum keras.',
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
    title: 'Kata Penutup',
    content: [
      'Kemampuan multimodal Seedance 2.0 terus berevolusi, dan kami akan terus memperbarui fitur serta mendukung lebih banyak cara kombinasi input. Semoga panduan penggunaan ini membantu Anda mengekspresikan kreativitas dengan lebih bebas!',
      'Jika Anda menemukan bug, atau memiliki saran penggunaan maupun kebutuhan skenario tertentu, silakan tinggalkan komentar atau kirim pesan langsung kepada kami! Kami akan terus mengoptimalkan untuk menjadikan JiMeng alat produktivitas yang benar-benar membuat Anda senang dan nyaman digunakan.',
    ],
  },
};
