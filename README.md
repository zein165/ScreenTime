CWSMS — Child Wellbeing Safety Monitoring System

CWSMS (Child Wellbeing Safety Monitoring System) adalah aplikasi mobile berbasis React Native yang dibuat untuk membantu orang tua memantau penggunaan smartphone anak.

Aplikasi ini menggunakan Android UsageStatsManager untuk mengambil informasi penggunaan aplikasi, sehingga orang tua dapat melihat aplikasi yang sedang digunakan serta durasi penggunaannya.

Project ini memiliki dua mode utama, yaitu Child Mode dan Parent Mode.

 Fitur
 Child Mode

Mode yang digunakan pada perangkat anak untuk memantau penggunaan aplikasi.

Real-time App Usage
Menampilkan aplikasi yang sedang digunakan oleh anak.
Menghitung durasi penggunaan aplikasi.
App Usage Monitoring
Mengambil data penggunaan aplikasi menggunakan Android UsageStatsManager.
Data penggunaan diperbarui ketika aplikasi kembali dibuka.
Smart Filtering
Menyaring aplikasi sistem, launcher, dan beberapa aplikasi bawaan Android.
Hanya menampilkan aplikasi yang dianggap relevan untuk pemantauan.
AppState Sync
Data akan diperbarui kembali ketika aplikasi berpindah dari background ke foreground.
Optimized List
Daftar aplikasi menggunakan FlatList agar tetap ringan ketika menampilkan banyak data.
Parent Mode

Mode yang digunakan oleh orang tua untuk melihat dan mengatur penggunaan perangkat anak.

Monitoring Dashboard
Menampilkan status sistem pemantauan anak.
Play Time Control
Orang tua dapat menentukan batas waktu bermain anak.
Timer digunakan sebagai dasar kontrol durasi penggunaan.
Usage Indicator
Menampilkan indikator penggunaan berdasarkan batas waktu yang telah ditentukan.
Teknologi yang Digunakan
Teknologi	Penggunaan
React Native	Framework utama aplikasi
TypeScript	Bahasa pemrograman
Android UsageStatsManager	Mengambil data penggunaan aplikasi
@brighthustle/react-native-usage-stats-manager	Menghubungkan React Native dengan Usage Stats Android
React Hooks	Mengatur state dan lifecycle aplikasi
AppState	Mendeteksi perubahan foreground/background
FlatList	Menampilkan daftar aplikasi
Cara Menjalankan Project
1. Persiapan

Pastikan beberapa tools berikut sudah terinstall:

Node.js v18 atau lebih baru
Android Studio
Android SDK
JDK
React Native CLI
Emulator Android atau perangkat Android fisik

Disarankan menggunakan Android 10 atau lebih baru.

2. Clone Repository
git clone https://github.com/username-lu/CWSMS.git
cd CWSMS

Ganti URL repository di atas dengan URL GitHub project yang sebenarnya.

3. Install Dependencies

Jalankan:

npm install

atau jika menggunakan Yarn:

yarn install
4. Jalankan Aplikasi

Pastikan emulator Android sudah berjalan atau perangkat Android sudah terhubung.

Kemudian jalankan:

npx react-native run-android

Jika project menggunakan Metro secara terpisah, jalankan:

npx react-native start

Lalu pada terminal lain:

npx react-native run-android
Permission Usage Access

CWSMS membutuhkan akses Usage Access dari Android agar aplikasi dapat membaca informasi penggunaan aplikasi.

Setelah aplikasi terinstall:

Buka Settings pada perangkat Android.
Masuk ke menu Usage Access / Special App Access.
Cari aplikasi CWSMS.
Aktifkan izin Usage Access.
Kembali ke aplikasi CWSMS.

Tanpa izin ini, aplikasi tidak dapat membaca data penggunaan aplikasi dari Android.

Nama menu dapat berbeda tergantung merek dan versi Android yang digunakan.

Gambaran Sistem

Secara sederhana, alur monitoring pada CWSMS adalah:

        PERANGKAT ANAK
              │
              ▼
       UsageStatsManager
              │
              ▼
     Data penggunaan aplikasi
              │
              ▼
       React Native App
              │
              ▼
       Child Mode / Parent Mode

Android menyediakan data penggunaan aplikasi melalui UsageStatsManager, kemudian data tersebut diproses dan ditampilkan pada aplikasi React Native.

 Tujuan Project

Project ini dibuat sebagai implementasi sistem monitoring penggunaan smartphone anak dengan memanfaatkan fitur bawaan Android.

Fokus utama project adalah:

memantau penggunaan aplikasi,
mengetahui durasi penggunaan,
menyediakan kontrol waktu bermain,
dan memberikan informasi penggunaan perangkat kepada orang tua.
 Catatan

CWSMS membutuhkan izin Usage Access karena aplikasi mengambil data penggunaan aplikasi dari sistem Android.

Fitur dan tampilan dapat berbeda tergantung versi Android dan perangkat yang digunakan.

Project ini masih dalam tahap pengembangan dan beberapa fitur dapat mengalami perubahan pada versi berikutnya.

 Status Project

Development / Academic Project

CWSMS masih dikembangkan sebagai project untuk pembelajaran dan pengembangan aplikasi mobile berbasis React Native dan Android Native API.
