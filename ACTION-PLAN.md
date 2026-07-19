# SEO Action Plan: Backyard of @fathanaabd

This action plan outlines prioritized recommendations to resolve the SEO issues detected on the website and align it with Fathan's portfolio requirements.

---

## Priority Matrix

| Task | Priority | Effort | Category | File Reference |
|---|---|---|---|---|
| [1. Update index.html Title & Add Meta Description](#1-update-indexhtml-title--add-meta-description) | **Critical** | Low | On-Page SEO | [index.html](file:///C:/Users/user/Documents/WebProject/personal_web/index.html) |
| [2. Deploy robots.txt and sitemap.xml](#2-deploy-robotstxt-and-sitemapxml) | **Critical** | Low | Technical SEO | `public/robots.txt`, `public/sitemap.xml` |
| [3. Implement Person & ProfilePage Schema](#3-implement-person--profilepage-schema) | **Critical** | Medium | Schema.org | [index.html](file:///C:/Users/user/Documents/WebProject/personal_web/index.html) or [App.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/App.jsx) |
| [4. Handle Dynamic Page Titles in React Router](#4-handle-dynamic-page-titles-in-react-router) | **High** | Medium | Technical SEO | [router.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/router.jsx) |
| [5. Deploy llms.txt for AI Search Readiness](#5-deploy-llmstxt-for-ai-search-readiness) | **High** | Low | AI (GEO) | `public/llms.txt` |
| [6. Align Visual Design with UI Guidelines](#6-align-visual-design-with-ui-guidelines) | **Medium** | High | UI / UX | [Home.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/pages/Home.jsx), [index.css](file:///C:/Users/user/Documents/WebProject/personal_web/src/index.css) |
| [7. Solve Internal Linking & Navigation Dead Ends](#7-solve-internal-linking--navigation-dead-ends) | **Medium** | Low | On-Page SEO | [App.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/App.jsx), [Resume.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/pages/Resume.jsx) |
| [8. Increase Homepage Word Count / Content Depth](#8-increase-homepage-word-count--content-depth) | **Medium** | Low | Content Quality | [Home.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/pages/Home.jsx) |
| [9. Safe Contact Details & Usability Upgrades](#9-safe-contact-details--usability-upgrades) | **Low** | Low | Trust & E-E-A-T | [Resume.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/pages/Resume.jsx) |

---

## Implementation Details

### 1. Update index.html Title & Add Meta Description
- **Why:** The homepage currently uses a generic title `Backyard of @fathanaabd` and lacks a meta description. Search engines have no description snippet to display.
- **Action:** Replace the current title and add description and viewport details in [index.html](file:///C:/Users/user/Documents/WebProject/personal_web/index.html).
- **Template Code:**
  ```html
  <title>Fathan Akbar Abdurachman - Software Engineer & Web Developer Portfolio</title>
  <meta name="description" content="Personal portfolio and digital resume of Fathan Akbar Abdurachman, a Software Engineer based in Bandung, specializing in Embedded Systems, Firmware, and Web Applications." />
  <link rel="canonical" href="https://fathanaabd.web.app/" />
  ```

---

### 2. Deploy robots.txt and sitemap.xml
- **Why:** Essential for instructing search bots how to crawl your React website and directing them to `/resume`.
- **Action:** Create `public/robots.txt` and `public/sitemap.xml`.
- **Code for `public/robots.txt`:**
  ```text
  User-agent: *
  Allow: /
  Allow: /resume
  
  # Allow AI bots to scan for search engine indexing
  User-agent: GPTBot
  Allow: /
  
  User-agent: ClaudeBot
  Allow: /
  
  User-agent: PerplexityBot
  Allow: /

  Sitemap: https://fathanaabd.web.app/sitemap.xml
  ```
- **Code for `public/sitemap.xml`:**
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://fathanaabd.web.app/</loc>
      <lastmod>2026-07-19</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://fathanaabd.web.app/resume</loc>
      <lastmod>2026-07-19</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>
  ```

---

### 3. Implement Person & ProfilePage Schema
- **Why:** Explicitly maps your entities so search engine AI understands who you are and highlights your contact info.
- **Action:** Place a structured JSON-LD script inside the `<head>` of [index.html](file:///C:/Users/user/Documents/WebProject/personal_web/index.html).
- **Template Code:**
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Fathan Akbar Abdurachman",
      "jobTitle": "Software Engineer",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "STMIK AMIKBANDUNG"
      },
      "url": "https://fathanaabd.web.app",
      "email": "fathan.aa.01@gmail.com",
      "telephone": "+6289698994508",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bandung",
        "addressCountry": "ID"
      },
      "knowsAbout": [
        "Embedded Systems",
        "Firmware Development",
        "ESP32",
        "STM32",
        "C/C++",
        "Python",
        "React",
        "TailwindCSS"
      ]
    }
  }
  </script>
  ```

---

### 4. Handle Dynamic Page Titles in React Router
- **Why:** When users navigate to `/resume`, the page title still displays the homepage title because React does not automatically sync client-side routing with document titles.
- **Action:** Add a utility function or hook inside your route pages or router structure.
- **Solution (React useEffect in page components):**
  - **In `Home.jsx`:**
    ```javascript
    React.useEffect(() => {
      document.title = "Fathan Akbar Abdurachman | Portfolio";
    }, []);
    ```
  - **In `Resume.jsx`:**
    ```javascript
    React.useEffect(() => {
      document.title = "Resume | Fathan Akbar Abdurachman";
    }, []);
    ```

---

### 5. Deploy llms.txt for AI Search Readiness
- **Why:** AI engines crawl markdown files to aggregate CV information for chat interfaces.
- **Action:** Create `public/llms.txt` with structured markdown.
- **Code for `public/llms.txt`:**
  ```markdown
  # Fathan Akbar Abdurachman
  
  > Software Engineer specializing in Embedded Systems, Firmware, and Web Applications.
  
  ## Core Information
  - **Location:** Bandung, Indonesia
  - **Email:** fathan.aa.01@gmail.com
  - **Website:** https://fathanaabd.web.app
  
  ## Professional Experience
  
  ### PT. Sunrise Purification Technology (IT Programmer)
  *March 2026 - July 2026*
  - Developed a web application for cost estimation of cleanroom & surgical room projects.
  
  ### PT. Modular Global Teknindo (Electrical Engineering)
  *November 2023 - February 2026*
  - Managed BOM costs.
  - Developed refrigerant control firmware.
  - Designed interlocking modular operating theater pass box firmware.
  
  ### PT. Malomo Teknologi Indonesia (Software Engineering)
  *June 2022 - August 2023*
  - Developed real-time avocado yard monitoring web application.
  - Programmed durability test CNC firmware for cosmetics.
  
  ## Technical Skills
  - **Languages:** C/C++, Python
  - **Hardware:** ESP32, STM32, Arduino (Atmel)
  - **Cloud:** Firebase, Google Cloud
  ```

---

### 6. Align Visual Design with UI Guidelines
- **Why:** The homepage currently utilizes a dark theme and WebGL background, directly violating [user-interface/SKILL.md](file:///C:/Users/user/Documents/WebProject/personal_web/.agents/skills/user-interface/SKILL.md) which requires a monochromatic paper-style theme (light mode, white background, black text).
- **Action:**
  1. Remove `SpotlightCard` and `Grainient` from [Home.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/pages/Home.jsx).
  2. Change text styling on the homepage to `text-black` and alignment to left-aligned.
  3. Ensure the background color is `#ffffff` (or `#fcf9ee` as defined in `index.css`).

---

### 7. Solve Internal Linking & Navigation Dead Ends
- **Why:** Visitors navigating to `/resume` have no header navigation or back button to return to the homepage, creating a page dead-end.
- **Action:** Add a simple header component at the top of your layout inside [App.jsx](file:///C:/Users/user/Documents/WebProject/personal_web/src/App.jsx).
- **Example Navigation Layout:**
  ```jsx
  <header className="mb-8 border-b border-black pb-4 flex justify-between items-baseline">
    <Link to="/" className="text-black hover:underline font-bold">Fathan Akbar A.</Link>
    <nav className="space-x-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/resume" className="text-blue-600 hover:underline">Resume</Link>
    </nav>
  </header>
  ```

---

### 8. Increase Homepage Word Count / Content Depth
- **Why:** The homepage contains only 54 words, which is flagged as thin content by search crawlers.
- **Action:** Add a summary section showcasing your professional services, target domains, and active projects directly on the landing page to exceed 300+ words.

---

### 9. Safe Contact Details & Usability Upgrades
- **Why:** Having phone numbers and email addresses in plain text leads to automated spam.
- **Action:**
  - Standardize phone linking: `<a href="tel:+6289698994508">+62 896 9899 4508</a>`.
  - For email, consider implementing an obfuscated javascript contact component or warning to protect privacy.
