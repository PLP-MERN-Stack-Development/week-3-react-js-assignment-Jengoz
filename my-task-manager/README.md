# 🧠 Task Manager App

A modern task management application built with **React**, **Vite**, **Tailwind CSS**, and **DummyJSON API**. This app demonstrates routing, reusable components, state management, hooks, persistent storage, dark mode, and external API integration.

---

## 📦 Features

- ✅ Add / Complete / Delete tasks  
- 🔍 Filter tasks by status (All, Active, Completed)  
- 💾 Tasks persist using LocalStorage  
- 🌙 Light/Dark theme toggle with Tailwind  
- 🌐 API integration using DummyJSON  
- 📱 Fully responsive layout  
- 🧱 Modular architecture using absolute imports  

---

## 🚀 Live Demo

🔗 [Click here to view deployed app](https://musical-cobbler-1ee9d4.netlify.app/)

---

## 🛠️ Setup Instructions

### 📋 Prerequisites

- [Node.js](https://nodejs.org/en/) v18+
- [pnpm](https://pnpm.io/) installed globally

> 📥 Install `pnpm` if you haven’t already:
```bash
npm install -g pnpm

⚙️ Installation Steps

# 1. Create the project using Vite + React
pnpm create vite@latest my-task-manager --template react

# 2. Navigate into the project folder and install dependencies
cd my-task-manager && pnpm install

# 3. Start the development server
pnpm run dev


📂 Folder Structure

📁 root/
├── public/
├── screenshots/               # Screenshots used in README
├── src/
│   ├── components/            # Reusable UI elements (Button, Card, Navbar, etc.)
│   ├── context/               # Theme context (light/dark mode)
│   ├── layouts/               # Layout wrapper (Navbar + Footer)
│   ├── pages/                 # Page routes (Home, Tasks, Posts)
│   ├── lib/                   # Custom hooks (useLocalStorage)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── jsconfig.json              # Path aliases for cleaner imports
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS setup for Tailwind
├── index.html                 # Vite entry point
├── README.md
└── pnpm-lock.yaml

🖼️ Screenshots

🏠 Home Page
✅ Task Manager
📰 API Posts (DummyJSON)

🔧 Built With
*React
*Vite
*Tailwind CSS
*React Router
*DummyJSON API
*Netlify for deployment

✅ Author
Moses Jengo