# SleeveTechs Website

A modern React + Vite website for SleeveTechs, built with Tailwind CSS, Framer Motion, and custom visual sections for services, clients, testimonials, and company information.

## Key Features

- React + Vite single-page website
- Tailwind CSS for responsive styling
- Animated sections using `framer-motion`
- Company and services pages with legal pages via React Router
- Client and partner logo marquees
- Contact section with email, phone, and location details
- Private-friendly production build configuration

## Project Structure

- `src/` — application source code
  - `components/` — reusable page sections
  - `data/` — site text and chatbot data
  - `pages/` — static privacy and terms pages
  - `assets/` — image and logo files
- `public/` — static web manifest and public assets
- `dist/` — generated production build output

## Prerequisites

- Node.js 20+ recommended
- npm

## Setup

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the local preview

```bash
npm run preview
```

4. Build for production

```bash
npm run build
```

## Notes

- `package-lock.json` is committed for deterministic installs.
- `.gitignore` excludes `node_modules/`, `dist/`, `.env`, editor folders, and common temporary files.
- The project is already configured to support modern React and Tailwind workflows.

## Recommended workflow

- Use a Git remote for the company repository
- Keep `dist/` out of source control if you want a clean repo
- Deploy the generated `dist/` folder to any static host after `npm run build`

## Contacts

- Company: SleeveTechs
- Email: `info@sleevetechs.com`
- Phone: `+91 80-46472444`
- Location: `Bangalore, India`
