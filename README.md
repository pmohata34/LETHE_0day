# Lethe

Lethe is a modern web experience for a secure data-wiping solution. The site presents Lethe's mission, product credentials, pricing, trusted users, documentation, and download options for supported platforms.

## Features

- Secure data-wiping product landing page with animated hero media
- Mission, credentials, transparency, pricing, and trusted-user sections
- Documentation page for product and integration content
- Download page with platform-specific download actions
- Smooth scrolling, scroll-triggered animations, interactive UI cards, and chatbot widget
- Responsive navigation with desktop and mobile menus

## Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- GSAP, Lenis, Motion, Three.js, React Three Fiber, and React Icons
- Backend/tools: Go and Python

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server with Turbopack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

## Project Structure

```text
public/                 Static images, video, logo, and fonts
src/app/                Next.js app router pages and layout
src/app/page.tsx        Main Lethe landing page
src/app/Doc/page.tsx    Documentation page
src/app/download/page.tsx
                        Download page
src/app/components/     Reusable UI components
src/app/lib/            Shared utilities and hooks
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/). Connect the GitHub repository to a Vercel project, then push changes to the production branch to trigger deployments.

## Contributors

- [0day-Ashish](https://github.com/0day-Ashish)
- Arya Singh

## License

No license has been added yet.
