# Frontend Smartlon.com
Implementasi modul-modul Frontend Smartlon.com dengan library React.JS. Repository ini termasuk dalam Tugas Besar Rekayasa Perangkat Lunak STI IF3152.  


## How to Install App Dependencies
```bash
npm install
```

# How to Run
```bash
npm start
```

# Daftar Realisasi Modul
1. Modul Terima Pesanan - PJ: Asiya Mufida Yumna - [TambahPesanan.js](./src/pages/TambahPesanan/TambahPesanan.js)
2. Modul Ubah Status Pesanan - PJ : Shafa Amarsya - [GantiStatus.js](./src/pages/GantiStatus/GantiStatus.js)
3. Modul Cari Pesanan - PJ: Novindra Nurrosyid - [CariPesanan.js](./src/pages/CariPesanan/CariPesanan.js)
4. Modul Autentikasi-Penyimpanan Token - PJ: Muhammad Xavier Rafifsyah Prasetyo - [App.js](./src/App.js), [LogModal.js](./src/components/LogModal/LogModal.js)

# Capture tampilan layar per Module
## 1. Modul Terima Pesanan
![Tambah Pesanan](./image_capture/Screenshot_Tambah_Pesanan.png)
## 2. Modul Ubah Status Pesanan
![Ubah Status Pesanan](./image_capture/Screenshot_Ubah_Status_Pesanan.png)
## 3. Modul Cari Pesanan
![Cari Pesanan](./image_capture/Screenshot_Cari_Pesanan.png)
## 4. Modul Autentikasi - Penyimpanan Token
### A. Modal Login
![Login](./image_capture/Screenshot_Login.png)
### B. Modal Berhasil Login
![Login Berhasil](./image_capture/Screenshot_Login_Berhasil.png)
### C. Modal Logout
![Logout](./image_capture/Screenshot_Logout.png)
### D. Modal Berhasil Logout
![Logout Berhasil](./image_capture/Screenshot_Logout_Berhasil.png)

# Project Structure Overview
Struktur folder pada project ini mengikuti template struktur folder React.JS. Terdapat beberapa plugin dan konvensi lainnya dalam penggunaan struktur folder.

## image_capture
Berisi screenshot tampilan layar untuk markdown ini.

## plop-template
Berisi file template untuk pembuatan komponen. Terdapat template untuk komponen `(.js)`, styling `(.scss)`, dan test `(.spec.js)`.

## public
Berisi static file yang akan dipetakan menjadi root directory `(/)` saat kompilasi.

## src
Berisi source code utama dari project ini.
### components
Berisi source code untuk *reusable component* yang digunakan pada halaman web

### pages
Berisi source code untuk komponen halaman yang digunakan pada web