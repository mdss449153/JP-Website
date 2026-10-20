# Just Promot — Official Business Website

Modern, high-performance web presence for Just Promot, providing digital solutions for businesses ready to grow online.

## 🚀 Features & Capabilities
- **Official JP Logo Lockup**: Minimal gap typography and brand mark (`/jp.png`, `/jp.svg`).
- **Interactive Demonstrations**: 4 turnkey vertical project showcases (Interior Design, Event Catering, Fitness Studio, Artisanal Café) with full modal walkthroughs.
- **Service Modules**: Website Architecture, Google Business Profile & Local Search, Short-Form Reel Production, and Digital Growth Strategies.
- **Conversion Workflows**: Instant WhatsApp booking, lead forms, and service cost transparency.
- **Performance**: Built with Vite, React 19, TypeScript, Lucide Icons, and Tailwind CSS.

---

## 📁 Image Assets Structure (All included for GitHub)
All branding assets and project mockups are committed to the repository:
```
public/
  ├── jp.png                     # Official JP emblem (transparent high-res PNG)
  ├── jp.svg                     # Vector JP emblem (zero pixelation)
  ├── jp-logo-icon.png           # JP icon badge
  ├── favicon.svg                # Browser tab icon
  └── images/
      └── projects/              # Project mockups for direct static delivery
          ├── urbannest_mockup_1790998051121.jpg
          ├── sreelakshmi_mockup_1790998063871.jpg
          ├── fitzone_mockup_1790998076145.jpg
          └── coastalbrew_mockup_1790998090748.jpg
src/assets/images/               # Bundled Vite assets (imported in code)
  ├── urbannest_mockup_*.jpg
  ├── sreelakshmi_mockup_*.jpg
  ├── fitzone_mockup_*.jpg
  └── coastalbrew_mockup_*.jpg
```

---

## 🛠️ How to Push to GitHub

Run these commands in your project terminal:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files and images
git add .

# 3. Create initial commit
git commit -m "feat: complete Just Promot website with all branding and project images"

# 4. Set the main branch
git branch -M main

# 5. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
