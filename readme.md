# Fathan Akbar A. - Personal Portfolio & CV

A minimalist, document-styled personal portfolio and digital Curriculum Vitae (CV) for Fathan Akbar Abdurachman, built with modern web technologies. 

The application is designed to simulate a professional physical A4 document (CV/Resume), focusing entirely on high readability, structured data, and a clean monochromatic aesthetic without any distractive UI elements.

## 🔗 Live Site
[https://fathanaabd.web.app](https://fathanaabd.web.app)

## 🛠 Tech Stack
- **Frontend Framework:** React (via Vite)
- **Styling:** TailwindCSS (Vanilla configurations)
- **Typography:** Ubuntu (Google Fonts)
- **Deployment:** Firebase Hosting
- **CI/CD:** GitHub Actions (Automated Deployment on `main` branch)

## ✨ Core Design Philosophy
- **Minimalist & Monochromatic:** Pure white background (`#ffffff`) with deep black text.
- **Document-Style Layout:** A maximum container width (`max-w-3xl`) replicating the width of an A4 physical paper on desktop screens.
- **Compact Readability:** Reduced font sizes (`text-sm`), tight line-heights (`leading-tight`), and normal character tracking to present dense information neatly.
- **No Fancy UI Elements:** No dark mode, no gradients, no glassmorphism, no drop shadows, and no micro-animations. Links are represented as simple standard blue text.

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## ☁️ Deployment
This project is configured to be deployed on **Firebase Hosting**. 
Any push to the `main` branch will automatically trigger a production build and deploy it live via GitHub Actions (configured inside `.github/workflows/firebase-hosting-merge.yml`).

To deploy manually via Firebase CLI:
```bash
npm run build
npx firebase-tools@latest deploy --only hosting
```

## 🤖 AI Agent Syncing
This repository is configured with AI Agent skills (stored in `.agents/`). The agent is programmed to read updates from the Master CV Google Docs reference and automatically synchronize the `src/pages/About.jsx` page whenever asked to "Update CV Data".
