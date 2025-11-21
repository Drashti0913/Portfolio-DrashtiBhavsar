# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js
- 🌙 Dark mode support
- 🧭 Smooth scrolling navigation
- sections: Home, About, Experience, Research, Projects, Articles, Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero/Home section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience section
│   ├── Research.tsx     # Research section
│   ├── Projects.tsx     # Projects section
│   ├── Articles.tsx     # Articles section
│   └── Contact.tsx      # Contact section
└── package.json
```

## Customization

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`): Update your name, title, and contact information
2. **About Section** (`components/About.tsx`): Update your bio
3. **Experience Section** (`components/Experience.tsx`): Add your work experience
4. **Research Section** (`components/Research.tsx`): Add your research areas
5. **Projects Section** (`components/Projects.tsx`): Add your projects with descriptions and links
6. **Articles Section** (`components/Articles.tsx`): Add your publications
7. **Contact Section** (`components/Contact.tsx`): Update social media links and contact form

### Styling

The website uses Tailwind CSS. You can customize colors, spacing, and other design elements in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global CSS variables and styles
- Individual component files - Component-specific styles

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This website can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with some configuration)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is open source and available under the MIT License.

