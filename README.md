![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/built%20with-TypeScript-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/styled%20with-TailwindCSS-06b6d4?logo=tailwindcss)

# **RAWpertoire**

This is my personal portfolio for showcasing **Front-End Development** work, UI craftsmanship, and creative engineering. It features a clean, responsive design, well-structured components, and semantic accessibility — all built using modern tooling and best practices.

## **Features**

- **Project Showcase** – Interactive cards with GitHub links, images, and descriptions
- **Experience Timeline** – Work history with skill tags and role summaries
- **Responsive Design** – Optimized for desktop and mobile views
- **Accessible Navigation** – Scroll-aware sidebar with keyboard support and focus visibility
- **Modular Components** – Fully documented, reusable components (`ProjectCard`, `JobCard`, `Pill`, etc.)
- **Performance-Focused** – Lazy loading, SSR-first rendering, image optimization

---

## **Tech Stack & Concepts**

### **Next.js 14+**

- **App Router** with `app/` directory and layout components
- Server-first rendering, async server components, no unnecessary hydration
- Metadata configuration via `export const metadata`
- Scroll-position tracking via a custom `useActiveSection` hook

### **TypeScript**

- Strict typing across all props, interfaces, and shared types
- Clean, shared interfaces (`Skill`, `Project`) stored in `types/`

### **Tailwind CSS 4**

- Utility-first styling powered by CSS Variables and `@theme`
- Custom component styles via `@layer components`
- Reusable animation patterns (e.g. `.underline-link-hover`, `.underline-link-active`)
- Integrated with Prettier for consistent class ordering

### **Component Architecture**

- `ProjectCard`, `JobCard` – Clean, semantic cards with alt text and aria-friendly markup
- `SideNavLink` – Scroll-aware nav item with `aria-current` and directional animation
- `ExternalLink`, `IconLink` – Accessible external anchors with keyboard support
- `Pill` – Simple badge/tag component with consistent styling
- 🔥 `PageWrapper` removed after audit (no longer in use)

### **UX & Accessibility**

- Semantic layout: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- Screen reader-friendly markup with `aria-current`, `aria-labelledby`, `role="group"`
- Focus-visible enhancements for keyboard users
- Motion respects `prefers-reduced-motion` and `scroll-behavior: smooth`

### **Performance & Deployment**

- Optimized image loading via `next/image` (`blurDataURL`, `object-cover`)
- External links use native `<a>` tags (not `next/link`)
- Deployed via [Vercel](https://vercel.com)
- Font: [Google Noto Sans](https://fonts.google.com/specimen/Noto+Sans)

---

## **Inspiration**

- [Brittany Chiang](https://brittanychiang.com)

---

## **Plugins & Utilities**

- [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [`react-icons`](https://react-icons.github.io/react-icons/)
- [`eslint-config-next`](https://nextjs.org/docs/app/building-your-application/configuring/eslint)

---

## **Getting Started**

To run the project locally:

```bash
npx create-next-app@latest
npm install
npm run dev
```
