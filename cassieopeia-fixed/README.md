# Cassieopeia Portfolio

A React (Vite) portfolio site, migrated off Base44 and ready to deploy anywhere that hosts static sites (Vercel, Netlify, etc.).

## What changed from the Base44 export

- Removed the Base44 auth gate that wrapped the whole app (this was blocking the site since the Base44 backend is no longer active).
- Removed the `@base44/sdk` and `@base44/vite-plugin` dependencies and all files that depended on them (`AuthContext`, `ProtectedRoute`, `UserNotRegisteredError`, the unused `WorkSection`).
- Replaced the contact form's submission (previously `base44.entities.Inquiry.create`) with a call to [Web3Forms](https://web3forms.com).
- Added the `@` import alias directly to `vite.config.js` (previously provided by the Base44 plugin).

## Before you deploy: finish the contact form setup

Your Web3Forms access key is already wired into the code via an environment variable. You just need to set it in two places:

1. **Locally**: create a file called `.env.local` in the project root with:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=965abb05-e73f-4866-8627-98a31ca1608d
   ```
2. **In production**: set the same variable in your hosting platform's environment variables (see Vercel section below) — otherwise the form won't work once deployed.

## Local development

```
npm install
npm run dev
```

## Deploying to Vercel

1. Push this project to a GitHub repo (or use the Vercel CLI to deploy directly from this folder).
2. Go to https://vercel.com, sign in, and click "Add New Project."
3. Import your repo (or drag-and-drop deploy via CLI: `npx vercel`).
4. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`. No changes needed.
5. In Project Settings → Environment Variables, add:
   - `VITE_WEB3FORMS_ACCESS_KEY` = `965abb05-e73f-4866-8627-98a31ca1608d`
6. Deploy. Once live, go to Project Settings → Domains and add your custom domain, then follow Vercel's instructions to point your domain's DNS records at Vercel.

## A note on images

All images (and your CV PDF) are currently hosted on Base44's CDN (`media.base44.com`). Confirm these still load in your browser — if Base44 eventually takes the CDN down, you'll want to download these assets and host them yourself (e.g. in the `public/` folder or on a service like Cloudinary).
