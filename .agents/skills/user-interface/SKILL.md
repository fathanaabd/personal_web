---
name: "user-interface"
description: "Panduan desain antarmuka (UI) web portofolio yang mengadopsi tema minimalis, monokrom, dan profesional seperti dokumen CV/Resume (Hitam dan Putih)."
---

# User Interface (UI) Skill

Skill ini mengatur panduan desain antarmuka (UI) untuk web portofolio Fathan Akbar A. Tema utama yang diterapkan **WAJIB** sama persis dengan tampilan PDF CV (Curriculum Vitae).

## 1. Filosofi Desain
Filosofi desain bergeser dari "Premium, Elegan, dan Eye-Catching" (Dark Mode, Gradient) menjadi **"Profesional, Minimalis, dan Fungsional" (Document-Style, Light Mode).**

Fokus utamanya adalah keterbacaan yang tinggi, kesederhanaan, dan kesan profesional seperti sebuah dokumen resume resmi.

## 2. Palet Warna (Color Palette)
- **Background Utama:** Putih murni (`bg-white` / `#ffffff`).
- **Teks Utama:** Hitam pekat (`text-black` / `#000000`) atau abu-abu sangat gelap (`text-gray-800`).
- **Tautan (Links):** Biru standar (`text-blue-600` / `#2563eb`).
- **Gradients & Shadows:** Dilarang. Tidak boleh ada efek *glassmorphism*, bayangan (*drop shadows*), atau gradien warna.

## 3. Tipografi (Typography)
- **Font Family:** Gunakan font **Ubuntu** (`font-sans`) untuk kesan modern, bersih, dan rapi namun tetap mudah dibaca.
- **Heading:** Gunakan teks tebal (`font-bold`) untuk penekanan judul.
- **Ukuran Font:** Gunakan ukuran font yang proporsional (seperti `text-sm` untuk paragraf) demi mempertahankan kesan dokumen yang padat.
- **Line Height / Spasi:** Gunakan jarak antar baris yang rapat atau kompak (`leading-tight`) untuk memaksimalkan ruang.
- **Letter Spacing (Jarak Huruf):** Gunakan jarak antar huruf yang normal (`tracking-normal`) karena font *sans-serif* seperti Ubuntu sudah memiliki proporsi kerning yang ideal.

## 4. Tata Letak & Spasi (Layout & Spacing)
- **Struktur:** Halaman harus menyerupai margin kertas dokumen. Gunakan kontainer dengan lebar yang lebih kecil (misalnya `max-w-3xl` atau `max-w-2xl`) dengan `mx-auto` dan *padding* agar teks tidak terlalu memanjang ke samping.
- **List / Bullet Points:** Sangat dianjurkan untuk menggunakan daftar berpoin (`list-disc`, `ml-5`) untuk menyebutkan *skills* atau pengalaman.
- **Alignment:** Rata kiri (*Left-aligned*) adalah standar untuk semua teks dan elemen.

## 5. Komponen Interaktif
- **Tombol & Interaksi:** Sangat minimalis. Gunakan *plain text links* (seperti `<a>` tag biru) daripada tombol dengan gaya modern. Hindari *micro-animations* kompleks.

## Ringkasan Aturan Tailwind
- Hapus semua *class* Tailwind yang berhubungan dengan *dark mode* (`bg-slate-950`, `text-slate-200`, dll).
- Hapus efek *gradient* (`bg-gradient-to-r`, dll).
- Hapus efek *shadow* dan *blur* (`shadow-xl`, `backdrop-blur-md`).
- Ubah warna teks ke `text-black` dan *background* ke `bg-white`.
