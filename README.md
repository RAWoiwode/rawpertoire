# **RAWpertoire**

This is my personal portfolio for showcasing **Front-End Development** projects, work experience, and UI craftsmanship. It features a clean design, modular architecture, and thoughtful storytelling through code.

I’ll continue updating this README as the portfolio evolves.

## **Features**

- **Project Showcase** – Interactive cards with repo links, images, and descriptions
- **Experience Timeline** – Work history with tech stacks and skill tags
- **Responsive Design** – Optimized for desktop and mobile
- **Animated Navigation** – Smooth scroll, section highlighting, and dynamic routing
- **Custom Components** – Well-documented, reusable components (`ProjectCard`, `JobCard`, `SideNavLink`, etc.)
- **Performance-Focused** – Lazy loading, image optimization, and SSR-friendly

---

## **Tech Stack & Concepts Applied**

### **Next.js & React**

- App Router with `app/` directory structure
- Server & Client Components hybrid rendering
- Dynamic metadata configuration
- Scroll-to-section routing with `IntersectionObserver`

### **TypeScript**

- Strict typing across props and interfaces
- Centralized types (e.g. `projectTypes.ts`)

### **Tailwind CSS 4**

- Utility-first styling with a custom color palette
- Custom animation utilities (`.underline-link-*`)
- Component classes via `@layer components`
- Prettier-integrated class sorting

### **Component Architecture**

- `PageWrapper` – Animates route changes and displays mobile section headers
- `ProjectCard` / `JobCard` – Content-driven UI components for key sections
- `ExternalLink`, `IconLink` – Semantic, animated external anchors
- `SideNavLink` – Scroll-aware section link component
- `Pill` – Simple badge/tag element for skills

### **UX & Accessibility**

- Semantic structure & keyboard-friendly navigation
- Accessible links with tooltips and ARIA support
- Logical tab order and minimal motion design

### **Performance & Tooling**

- Optimized image loading with `next/image`
- Lazy-loaded components and section transitions
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

This project was bootstrapped with:

```bash
npx create-next-app@latest
npm install
npm run dev
```
