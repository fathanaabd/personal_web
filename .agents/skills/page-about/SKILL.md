---
name: page-about
description: Panduan, spesifikasi, dan standar desain untuk membuat halaman "About Me" di web portofolio Fathan Akbar A.
---

# About Page Creation Skill

Skill ini berisi panduan komprehensif tentang struktur konten, desain UI/UX, dan interaksi yang harus ada pada halaman "About Me" untuk Portofolio Fathan Akbar A. 

Mengingat pedoman sistem bahwa web ini harus memukau (*WOW factor*), berestetika tinggi, dan terasa premium, halaman ini tidak boleh hanya berupa teks biasa.

## 1. Struktur Konten (Struktur HTML)
Halaman "About" harus dibagi menjadi beberapa seksi visual yang jelas:

1.  **Header / Intro Section:**
    *   Foto profil / Avatar yang profesional namun kreatif (memiliki efek *border* atau *shadow* modern).
    *   *Greeting* singkat (misal: "Hi, I'm Fathan Akbar A.").
    *   Slogan / *Tagline* profesi (misal: "Front-End Developer | UI/UX Enthusiast").
2.  **Biografi Singkat (Bio):**
    *   1-2 paragraf yang menceritakan *passion*, latar belakang, dan pendekatan dalam menyelesaikan masalah *development* atau desain. 
3.  **Tech Stack / Skills Section:**
    *   Daftar teknologi yang dikuasai (HTML, CSS, JS, Tailwind, dll).
    *   Tampilkan dalam bentuk *badge*, ikon, atau *grid* kartu kecil.
4.  **Call to Action (Opsional tapi disarankan):**
    *   Tombol "Download CV" atau "Let's Connect".

## 2. Standar Estetika & Desain (TailwindCSS)
Terapkan gaya modern berikut menggunakan TailwindCSS:

*   **Tipografi Premium:** Gunakan font *sans-serif* yang bersih (seperti Inter atau Roboto jika diset). Gunakan ketebalan font yang kontras (misal: teks tebal untuk *heading*, teks tipis/medium untuk paragraf dengan warna abu-abu lembut `text-gray-400` atau `text-gray-600`).
*   **Warna & Gradient:** Hindari warna dasar (merah/biru murni). Gunakan kombinasi warna modern, misalnya efek *gradient text* untuk nama atau *tagline* (contoh kelas: `bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400`).
*   **Glassmorphism (Opsional):** Jika background utama gelap/memiliki pola, gunakan *card* transparan dengan efek *blur* (`backdrop-blur-md bg-white/10` atau `bg-black/10`).
*   **Micro-animations:** 
    *   Tambahkan transisi halus pada setiap elemen yang bisa diinteraksikan (`transition-all duration-300`).
    *   Efek *hover* pada daftar *skill/tech stack* (misal: sedikit terangkat `hover:-translate-y-1` dan *glow* `hover:shadow-lg hover:shadow-blue-500/50`).

## 3. Tambahkan Data Diri
Data diri terdapat pada folder resources

## Checklist Eksekusi Halaman About
- [ ] Rancang tata letak (layout) responsif menggunakan Flexbox atau Grid Tailwind (`flex-col md:flex-row`).
- [ ] Terapkan desain *premium* (gradient, shadow modern, tipografi rapi).
- [ ] Masukkan bagian Foto, Bio, dan Tech Stack.
- [ ] Tambahkan efek *hover* (micro-animations) pada *badge* skill atau tombol.
- [ ] Integrasikan konten ini ke dalam `router.js` pada *path* `/about`.
