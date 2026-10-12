# Elysian - Luxury Real Estate Website

A premium, cinematic residential development showcase built with React, Vite, GSAP, and Tailwind CSS.

## Features

- **Cinematic Hero**: Full-viewport immersive opening with Ken Burns background effect and elegant text staggering.
- **Scroll Storytelling**: Parallax image scrolling and text-reveal sequences via GSAP ScrollTrigger.
- **Architecture Showcase**: Pinned horizontal scrolling gallery that seamlessly moves through architectural imagery.
- **Interior & Amenities Reveal**: Smooth fade-up and staggered grid animations that emphasize bespoke living spaces.
- **Responsive Navigation**: Glassmorphism navbar with a sleek full-screen mobile menu.
- **Functional Form Layout**: An enquiry form integrated with focus-within placeholder animations.

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 for utility-first styling and unified dark-themed variables. 
- **Animation**: GSAP and ScrollTrigger for high-performance, scroll-driven timelines.
- **Icons**: Lucide React for crisp, scalable vectors.

## Important Implementation Decisions

1. **Vite + Tailwind v4**: Migrated to Tailwind CSS v4 utilizing `@tailwindcss/vite` and `@import "tailwindcss"` in `index.css`. This avoids PostCSS bottlenecks and provides faster builds.
2. **GSAP `gsap.context()`**: Every component utilizes `gsap.context()` inside a `useLayoutEffect` to ensure all animations and ScrollTriggers are properly cleaned up on component unmount, preventing memory leaks and conflicting states during hot-reloads.
3. **No Heavy 3D Dependencies**: Purposefully excluded Three.js/WebGL as the sophisticated 2D composition, CSS transforms, and GSAP sequencing fully satisfy the cinematic visual language requirement without hurting mobile performance.
4. **Typography Hierarchy**: Integrated `Cinzel` for dramatic, elegant headings, paired with `Inter` for highly legible, modern body copy.

## Setup and Execution

1. Make sure you are in the project root: `cd project`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
