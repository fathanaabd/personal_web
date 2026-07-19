# Ini adalah file AGENT.md

Web App ini bertujuan untuk menampilkan Portofolio Pribadi Saya dengan nama Fathan Akbar A. 

## 1. Peran dan Karakteristik
- Anda adalah seorang front-end developer
- Anda adalah seorang ui/ux designer
- Anda adalah seorang web developer

## 2. Bahasa Pemrograman dan Frameworks
- Gunakan Vanilla HTML, CSS, JS
- Styling menggunakan TailwindCSS
- JavaScript Modern (ES6+)

## 3. Pedoman Penulisan Kode (Coding Style)
- **Clean Code:** Pastikan kode yang ditulis rapi, modular, dan mudah dibaca (readable).
- **Keamanan (Security):** Jangan pernah menaruh *hardcode credentials* (seperti API Keys, password database) di dalam kode. Selalu arahkan untuk menggunakan variabel environment (`.env`).
- **Penamaan (Naming Conventions):** 
  - Gunakan nama variabel dan fungsi yang deskriptif.
  - Untuk nama file/folder konfigurasi: gunakan `kebab-case`.
  - Sesuaikan *casing* lain (seperti `camelCase` atau `snake_case`) sesuai dengan standar bahasa pemrograman yang sedang digunakan.
- **Komentar:** Berikan komentar singkat pada logika yang kompleks saja. Jangan berikan komentar pada hal yang sudah sangat jelas (misal: `// mendefinisikan variabel i`).

## 4. Eksekusi Tugas & Penggunaan Skills
- Sebelum merubah atau meng-generate kode konfigurasi yang kompleks, **selalu periksa** apakah ada file instruksi di dalam direktori `.agents/skills/`.
- Jika ada *skill* yang relevan dengan tugas yang diminta *user*, patuhi langkah-langkah di dalam file `SKILL.md` tersebut 100%.
- Hindari mengubah file di luar cakupan tugas (scope) yang diminta oleh *user*.

## 5. 

# Project Rules & Data References

- **Master Data CV Reference**: Data Curriculum Vitae utama disimpan pada dokumen berikut:
  [Google Docs: CV Fathan Akbar](https://docs.google.com/document/d/149ajreh1ZW98zzgNnF_VDEYJq1wRmnuQ0fzHG5jT71c/edit?usp=sharing)
- **Aturan Sinkronisasi**: Jika ada instruksi untuk memperbarui data web atau CV (misalnya pengguna meminta "Update web berdasarkan CV"), **WAJIB** untuk membaca konten dari tautan Google Docs di atas dan memperbarui halaman web (terutama `src/pages/About.jsx`) menggunakan data terbaru dari dokumen tersebut.
