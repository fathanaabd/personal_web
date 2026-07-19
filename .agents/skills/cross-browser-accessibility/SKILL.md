---
name: cross-browser-accessibility
description: Panduan untuk memastikan kompatibilitas antar-browser (Chrome, Safari, Firefox) dan memenuhi standar aksesibilitas (a11y) pada web portofolio.
---

# Cross-Browser Compatibility & Accessibility (a11y)

Skill ini berfungsi sebagai pedoman wajib bagi Agent ketika mengembangkan antarmuka atau menambah fitur baru, guna memastikan website tetap stabil dan dapat diakses dengan baik dari berbagai browser modern serta mendukung perangkat bantu pembaca layar (*screen reader*).

## 1. Kompatibilitas Browser (Safari, Chrome, Firefox)
Saat menulis kode CSS khusus (di luar kelas standar TailwindCSS), Agent wajib menyertakan dukungan untuk seluruh engine browser utama:
- **WebKit (Chrome, Safari, Edge Baru):** Gunakan prefix `-webkit-` untuk fitur eksperimental atau spesifik (contoh: `::-webkit-scrollbar`).
- **Gecko (Firefox):** Gunakan prefix `-moz-` dan properti standar Firefox (contoh: `scrollbar-width: none`).
- **Fallbacks:** Selalu berikan nilai *fallback* pada CSS yang belum sepenuhnya didukung oleh browser lama (contoh: fallbacks untuk styling font atau grid khusus).

## 2. Praktik Aksesibilitas Web (A11y)
Agar web portofolio ini memenuhi standar aksesibilitas (memudahkan penyandang disabilitas membaca CV), Agent harus selalu:
- **Semantic HTML:** Gunakan tag HTML yang tepat sesuai fungsinya (contoh: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- **Aria Labels & Attributes:** 
  - Jika ada tombol atau tautan yang berupa ikon (tanpa teks penjelasan), wajib tambahkan `aria-label="Deskripsi"`.
  - Gunakan atribut seperti `aria-hidden="true"` pada elemen dekoratif (misal: *film grain overlay*) agar diabaikan oleh pembaca layar.
- **Alt Text:** Berikan deskripsi informatif pada atribut `alt=""` setiap tag `<img>`. Jika gambar hanya dekoratif, gunakan `alt=""`.
- **Keyboard Navigation & Focus:** Pastikan tautan dan tombol memiliki state *focus* (`focus:outline`, `focus:ring`) agar pengguna navigasi keyboard dapat melihat elemen mana yang sedang aktif.

## 3. Penanganan Khusus Elemen UI
- **Scrollbar Tersembunyi:** Pastikan penyembunyian scrollbar tetap memperbolehkan *scroll* dengan menggunakan kombinasi `display: none` pada WebKit dan `scrollbar-width: none` pada Gecko.
- **Warna Kontras:** Pertahankan kontras warna yang tinggi antara teks utama (hitam pekat) dan latar belakang (putih/krem terang) demi kenyamanan membaca (*WCAG AAA standard*).

Agent wajib memverifikasi poin-poin di atas setiap kali ada perubahan struktur HTML atau CSS yang diajukan oleh *user*.
