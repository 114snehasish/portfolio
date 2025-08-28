# 🏗️ Architecture Guide

> *"This isn't rocket science, it's just a portfolio... but even rockets need blueprints!"* 🚀😄

## 🎯 The Big Picture

Your portfolio is basically:
- **React** app that shows off your skills 
- **TypeScript** because we're fancy like that
- **Tailwind** for styling (no more CSS nightmares)
- **Vite** to make builds fast as lightning ⚡

## �️ How It All Fits Together

```
Browser → Your Portfolio → Shows Your Awesomeness
    ↓
  React Components (the building blocks)
    ↓  
  Data Files (your content)
    ↓
  Utils (the helpers that do the magic)
```

## 📁 Folder Structure (The Organized Chaos)

```
src/
├── components/     # The UI pieces (like LEGO blocks)
│   ├── about/      # "Who am I?" section
│   ├── skills/     # "Look what I can do!" 
│   ├── contact/    # "Let's talk!" 
│   └── ...         # Other cool sections
├── data/           # Your content (easy to edit!)
├── utils/          # Helper functions (the magic workers)
└── assets/         # Images and stuff
```

## 🧩 Key Components Explained

### 📄 Data Files (The Easy Part!)
- `aboutItems.ts` - Your bio and personal info
- `skillsItems.ts` - Technologies you know
- `experiencesItems.ts` - Your work history
- `contactItems.ts` - Ways to reach you

Want to update something? Just edit these files! No digging through complex code.

### 🎨 Components (The UI Magic)
Each section is its own component:
- `About.tsx` - Shows who you are
- `Skills.tsx` - Your tech stack
- `Experiences.tsx` - Work history with fancy cards
- `Contact.tsx` - Contact form and social links

### 🛠️ Utils (The Behind-the-Scenes Workers)
- `textHighlighter.ts` - Makes text sparkle ✨
- `imageUtils.ts` - Handles image optimization
- `images.ts` - Imports all your images

## ⚡ The Tech Stack (Keep It Simple)

- **React 18**: The main framework
- **TypeScript**: JavaScript with superpowers
- **Tailwind CSS**: Utility-first styling
- **Vite**: Super fast build tool
- **Puppeteer**: Generates your CV PDF automatically

## 🚀 Deployment (One Click Wonder)

```
Your Code → GitHub → Azure Static Web Apps → Live Portfolio
```

Everything happens automatically when you push to GitHub. No server management, no headaches!

## 🎯 Want to Customize?

1. **Change Content**: Edit files in `src/data/`
2. **Change Styling**: Update Tailwind classes
3. **Add Sections**: Create new components in `src/components/`
4. **Change Colors**: Update `tailwind.config.js`

---

**🎉 That's it! Simple, effective, and actually relevant to what this portfolio does! 🎉**
