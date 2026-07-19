---
name: tech-stack
description: Spesifikasi teknologi dan panduan arsitektur (Vite, React, Tailwind v4) untuk pengembangan web portofolio Fathan Akbar A.
---

# Web Portfolio Tech Stack Specifications

Dokumen ini berisi spesifikasi teknologi yang telah ditentukan untuk membangun web portofolio Fathan Akbar A. Anda **WAJIB** mengikuti panduan ini saat menambahkan fitur, komponen, atau halaman baru pada repositori ini.

## 1. Core Framework
- **Vite**: Digunakan sebagai *build tool* utama. Semua perintah eksekusi pengembangan menggunakan ekosistem Vite (misalnya `npm run dev`, `npm run build`).
- **React**: Digunakan sebagai *view library* untuk antarmuka pengguna (UI). Seluruh antarmuka aplikasi harus ditulis dalam format JSX/JavaScript (`.jsx`).

## 2. Styling (CSS)
- **TailwindCSS (v4)**: Digunakan secara eksklusif untuk seluruh *styling*.
- **Integrasi Vite**: Sejak TailwindCSS v4, kita menggunakan *plugin* `@tailwindcss/vite` di dalam `vite.config.js`. Direktif `@import "tailwindcss";` sudah ada di `src/index.css`. Jangan membuat file `tailwind.config.js` atau `postcss.config.js` lagi.
- **Aturan Desain (Premium & Wow Factor)**:
  - Lingkungan *default* menggunakan tema *dark mode* elegan (berbasis `bg-slate-950` atau `bg-slate-900`).
  - Implementasikan efek *glassmorphism* menggunakan *utility classes* (contoh: `backdrop-blur-md bg-white/5 border border-white/10`).
  - Wajib menyertakan mikro-animasi pada elemen interaktif (contoh efek hover: `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`).

## 3. Routing
- **React Router (`react-router-dom`)**: Menangani *Client-Side Routing*.
- Konfigurasi *router* dan penambahan halaman baru diletakkan pada `src/router.jsx`.
- Gunakan komponen `<Link>` dari `react-router-dom` atau `<Outlet />` untuk navigasi halaman tanpa memicu *full page reload*.

## 4. Ikonography
- **Lucide React (`lucide-react`)**: *Library* standar utama untuk penggunaan ikon berbasis SVG. Hindari penggunaan ikon dari *library* lain agar estetika tetap konsisten.

## 5. Struktur Direktori
- `src/pages/`: Digunakan untuk menyimpan komponen tingkat halaman (contoh: `About.jsx`).
- `src/components/`: Digunakan untuk menyimpan komponen *UI* yang dapat digunakan kembali (*Reusable Components*).
- `src/router.jsx`: Registrasi semua rute/halaman baru.
- `src/index.css`: File CSS global yang memuat konfigurasi Tailwind dan *base layer* aplikasi.
