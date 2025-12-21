# Next.js Personal Resume Portfolio Site

Modern resume and portfolio template built with Next.js and Tailwind CSS.

## Demo

https://demo-neonfolio.vercel.app/

## Detailed Guide on Complete Deployment

https://faheemarif.hashnode.dev/build-and-deploy-your-personal-portfolio-website

## Quick Start

1) Install Node.js 18+
2) Install dependencies:

```bash
npm install
```

3) Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Customize Your Content

- Edit `app/data/content.ts` to update your name, summary, experience, skills, and links.
- Replace `public/profile-placeholder.svg` with your photo (keep the filename or update the `src` in `app/page.tsx`).
- Update Formspree IDs in `app/data/content.ts` for the contact and resume forms.
- Update the Calendly link in `app/page.tsx` if you want scheduling enabled.
- Update site metadata in `app/layout.tsx`.

## Build for Production

```bash
npm run build
npm run start
```

## Deploy

Deploy with Vercel or Netlify. For Vercel, connect your GitHub repo and follow the prompts.

## License

MIT
