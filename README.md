# 🪑 My Furniture Website

A modern, responsive furniture store web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
It features a clean layout, modular component structure, and performance optimizations like lazy-loading.

---

## ✨ Features

- ⚡ **Fast Development** – Vite + HMR for instant updates  
- 🎨 **Beautiful UI** – Styled with Tailwind CSS  
- 📦 **Modular Structure** – Components organized into `layout/`, `sections/`, and `optionals/`  
- 🖼️ **Dynamic Sections** – Hero, Collections, Projects, Info Grid, Newsletter  
- 🧩 **Optional Pages** – Testimonials, About, FAQ (lazy-loaded for performance)  
- 📱 **Responsive Design** – Looks great on desktop, tablet, and mobile  

---

## 📂 Project Structure

```text
MY-FURNITURE/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, fonts
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Hero, Collections, Projects, etc.
│   │   └── optionals/     # Testimonials, About, FAQ, CTA
│   ├── App.tsx            # Main app layout
│   ├── index.css          # Tailwind imports + global styles
│   └── main.tsx           # App entry point
├── vite.config.ts         # Vite config (with path aliases)
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies and scripts
└── .gitignore             # Git ignored files

