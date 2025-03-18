# Levenmouth Academy Website

A modern, responsive school management website built with **Next.js**, **Tailwind CSS**, and **React**.

## 🚀 Features
- Fully responsive design
- Dynamic navigation bar
- Hero section with background overlay
- Custom decorative strip for styling
- Mobile-friendly UI enhancements

## 📂 File Structure
```
src/
│-- app/
│   ├── (auth)/guest
│   ├── (front)/about
│   ├── (front)/admission
│   ├── (front)/courses
│   ├── (back)/dashboard
│-- assets/
│-- components/
│   ├── nav/
│   │   ├── Navbar.tsx
│   │   ├── DecorativeStrip.tsx
│   ├── hero/HeroSection.tsx
│-- styles/
│   ├── globals.css
```

## 🛠️ Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser.

## 📌 Important Notes
- Ensure **Next.js Client Components** are used correctly (`"use client"` where necessary).
- Tailwind CSS handles styling without a custom `tailwind.config.js`.
- Decorative strips use **CSS clip-path** for custom shapes.
- Hero section's **"Learn More"** button has extra mobile spacing.

---


