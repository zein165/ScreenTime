Arsitektur Antarmuka Child Mode

Child Mode menggunakan FlatList sebagai komponen utama untuk menampilkan daftar aplikasi.

Pada bagian atas FlatList terdapat ListHeaderComponent yang digunakan untuk menampilkan informasi umum.

Struktur tampilannya dapat digambarkan sebagai:

Child Mode
│
├── Total Screen Time
│
├── Status Penggunaan
│
└── Daftar Aplikasi
├── Aplikasi 1
├── Aplikasi 2
├── Aplikasi 3
└── Aplikasi lainnya

Pendekatan ini membuat seluruh konten berada dalam satu sistem scrolling dan mengurangi kemungkinan konflik antara komponen yang memiliki mekanisme scroll berbeda.

Tech Stack

CWSMS menggunakan beberapa teknologi utama dalam proses pengembangannya.

A. Bahasa Pemrograman dan Framework
React Native

React Native digunakan sebagai framework utama untuk membangun aplikasi mobile.

React Native memungkinkan pengembangan antarmuka menggunakan konsep komponen dan memungkinkan aplikasi berkomunikasi dengan fitur native melalui Native Bridge.

TypeScript / JavaScript

TypeScript digunakan untuk menulis logika aplikasi dan membantu menjaga struktur data serta tipe data agar lebih terkontrol.

JavaScript dan fitur ES6+ juga digunakan dalam proses pengembangan aplikasi.

B. Library dan Dependency

Library utama yang digunakan adalah:

@brighthustle/react-native-usage-stats-manager

Library ini digunakan untuk menghubungkan aplikasi React Native dengan UsageStatsManager pada Android.

Selain itu, aplikasi memanfaatkan React Hooks seperti:

useState
useEffect
useCallback
C. Native Android API

API native Android yang digunakan meliputi:

UsageStatsManager

Digunakan untuk membaca data penggunaan aplikasi.

AppOpsManager

Digunakan dalam proses pemeriksaan dan pengelolaan izin tertentu yang berhubungan dengan akses penggunaan aplikasi.

Settings.ACTION_USAGE_ACCESS_SETTINGS

Digunakan untuk membuka halaman pengaturan Usage Data Access Android agar pengguna dapat memberikan izin kepada aplikasi.

D. UI dan Performance

Komponen dan modul yang digunakan untuk mendukung antarmuka antara lain:

FlatList: Menampilkan daftar aplikasi secara efisien.
AppState: Mendeteksi perubahan lifecycle aplikasi.
Dimensions: Membantu menyesuaikan layout berdasarkan ukuran layar.
StyleSheet: Mengatur tampilan dan styling komponen React Native.
11. Environment dan Platform

CWSMS saat ini dirancang khusus untuk perangkat Android.

Pengecekan platform dapat dilakukan menggunakan:

Platform.OS === 'android'

Jika aplikasi dijalankan pada platform selain Android, fungsi yang berhubungan dengan UsageStatsManager tidak dijalankan karena API tersebut merupakan API khusus Android.

Target pengembangan yang digunakan adalah Android dengan dukungan mulai dari API Level 21 atau Android 5.0, dengan pengujian yang lebih disarankan pada perangkat Android modern, terutama Android 10 ke atas.

12. Pengujian Sistem

Pengujian CWSMS dapat dilakukan menggunakan Android Emulator maupun perangkat fisik.

Namun, pengujian menggunakan perangkat fisik lebih disarankan karena UsageStatsManager bergantung pada data penggunaan aplikasi yang benar-benar dicatat oleh sistem operasi.

Pada Android Emulator, terdapat kondisi tertentu yang menyebabkan data UsageStats tidak langsung muncul atau menunjukkan durasi penggunaan 0 detik.

Untuk melakukan pengujian, pengguna dapat menjalankan beberapa aplikasi seperti Chrome atau Maps terlebih dahulu, kemudian kembali ke CWSMS untuk melihat apakah data penggunaan telah tercatat.

Jika data tidak muncul dengan benar pada emulator, pengujian dapat dilanjutkan menggunakan perangkat Android fisik.

13. Keterbatasan Sistem

CWSMS memiliki beberapa keterbatasan yang perlu diperhatikan.

A. Bergantung pada Android

Sistem pelacakan penggunaan aplikasi menggunakan API native Android sehingga fitur tersebut tidak dapat digunakan secara langsung pada iOS.

B. Ketergantungan terhadap Permission

Aplikasi membutuhkan izin Usage Data Access dari pengguna.

Tanpa izin tersebut, CWSMS tidak dapat membaca informasi penggunaan aplikasi dari UsageStatsManager.

C. Data Tidak Selalu Real-Time

Walaupun aplikasi menggunakan polling setiap 2 detik dan AppState Listener, data UsageStats dari Android tetap bergantung pada mekanisme pencatatan dan pembaruan sistem operasi.

Oleh karena itu, waktu penggunaan yang ditampilkan tidak selalu berubah tepat pada saat pengguna berpindah aplikasi.

D. Perbedaan Implementasi Android

Produsen smartphone dapat melakukan modifikasi terhadap sistem Android melalui antarmuka seperti One UI dan sistem manajemen baterai.

Hal tersebut dapat memengaruhi cara aplikasi berjalan di background maupun cara data UsageStats tersedia.

E. Keterbatasan Emulator

Android Emulator tidak selalu menghasilkan data UsageStats dengan cara yang sama seperti perangkat fisik.

Oleh karena itu, perangkat fisik lebih disarankan untuk pengujian fitur monitoring penggunaan aplikasi.

14. Ringkasan Arsitektur

Secara keseluruhan, CWSMS menggunakan arsitektur Client-Side dengan React Native sebagai framework utama dan Android UsageStatsManager sebagai sumber data penggunaan aplikasi.

Alur utama sistem adalah:

User memilih role
↓
Sistem menampilkan mode sesuai role
↓
Child Mode memeriksa Usage Data Access
↓
Permission diberikan
↓
UsageStatsManager mengambil data penggunaan aplikasi
↓
Data difilter
↓
Data diurutkan berdasarkan durasi
↓
Total Screen Time dihitung
↓
Data disimpan ke dalam state
↓
Data ditampilkan menggunakan FlatList
↓
Data diperbarui melalui polling dan AppState Listener

Dengan arsitektur tersebut, CWSMS dapat memperoleh informasi penggunaan aplikasi secara langsung dari perangkat Android tanpa membutuhkan backend server untuk fitur monitoring dasarnya.

Struktur ini juga memungkinkan pengembangan lebih lanjut, misalnya penambahan sistem komunikasi antara perangkat Parent Mode dan Child Mode, penyimpanan data historis, pengaturan batas waktu penggunaan, notifikasi, maupun integrasi backend apabila dibutuhkan pada tahap pengembangan berikutnya.