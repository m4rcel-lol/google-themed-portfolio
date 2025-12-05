<div align="center">

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" width="100" height="auto" />
  
  # Material You Portfolio & AI Assistant
  
  ### A Next-Gen Developer Portfolio powered by Google Gemini and Material Design 3.
  
  <p>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    </a>
    <a href="https://ai.google.dev/">
      <img src="https://img.shields.io/badge/Gemini_API-2.5_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
    </a>
  </p>

  <br />

  <p align="center">
    <strong>Aesthetically precise. Contextually intelligent.</strong><br>
    Built for <b>Marcel</b>, a Full Stack Developer & Creative Coder from Poland.
  </p>
</div>

---

## 🎨 Design Philosophy

This project abandons traditional portfolio layouts in favor of a **Google Material Design 3 (Material You)** aesthetic. It features a deep, high-contrast dark theme (`#111318`), responsive grid layouts, and fluid micro-interactions powered by Framer Motion.

### ✨ Key Features

*   **🤖 AI Personal Assistant**: An integrated chat interface powered by **Google Gemini 2.5 Flash**. The AI is context-aware, knowing the developer's projects, tech stack, and background (defined in `constants.ts`).
*   **💎 Material You Styling**: Adheres to strict M3 guidelines using surface containers, state layers, and the Roboto type scale.
*   **⚡ Reactive Animations**: Staggered entrance animations, hover state layers on cards, and smooth scrolling navigation.
*   **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop with a glass-morphic top navigation bar.
*   **🔧 Dynamic Data**: All project data and AI personas are configurable via a centralized constants file.

---

## 🛠️ Technology Stack

<div align="center">

| **Core** | **Styling & UI** | **Intelligence** |
| :---: | :---: | :---: |
| React 19 | Tailwind CSS | Google Gemini SDK |
| TypeScript | Framer Motion | System Instructions |
| Vite (Implied) | Lucide React | Prompt Engineering |

</div>

---

## 📂 Project Structure

```bash
├── components/
│   ├── ChatGuide.tsx      # The floating AI Assistant UI (M3 Extended FAB)
│   ├── ProjectCard.tsx    # Interactive Material Design Cards
│   └── ...
├── services/
│   └── geminiService.ts   # Google GenAI API integration logic
├── App.tsx                # Main Layout & Hero Section
├── constants.ts           # Config: Project Data, AI Persona, Links
└── types.ts               # TypeScript Interfaces
```

---

## 🚀 Getting Started

### 1. Prerequisites

You will need a **Google Gemini API Key** to enable the chat assistant. Get one for free at [Google AI Studio](https://aistudio.google.com/).

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
API_KEY=your_google_gemini_api_key_here
```

### 3. Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

---

## 🧠 AI Configuration

The AI behavior is controlled in `src/constants.ts`. You can modify the `SYSTEM_INSTRUCTION` constant to change the persona of the assistant.

```typescript
// src/constants.ts
export const SYSTEM_INSTRUCTION = `
You are the AI Portfolio Assistant for Marcel.
Persona: Helpful, professional, and knowledgeable about Minecraft/Roblox modding...
`;
```

---

## 📸 Visual Highlights

*   **Hero Section**: Features a code-styled "About Me" terminal and a fading profile image with gradient masks.
*   **Chat Interface**: Modeled after the Google Assistant mobile UI, featuring typing indicators and spring physics animations.
*   **Glassmorphism**: The top navigation bar blurs the content behind it, maintaining accessibility and style.

---

<div align="center">

**Crafted with code from Poland 🇵🇱**<br>
<sub><i>Powered by React & Google Gemini</i></sub>

</div>
