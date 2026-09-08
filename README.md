# Premium Portfolio Starter

This repository is a premium-styled portfolio starter built with React + TypeScript + Vite + Tailwind + Framer Motion.

Key notes:
- Dark mode default (class-based)
- Place your real `resume.pdf` and `photo.jpg` inside the `public/` folder.
- Fill `src/data/resume.ts` with the exact information from your resume — the site will pull from that file.

Quick start

1. Install:

```
npm install
```

2. Run dev server:

```
npm run dev
```

3. Open `http://localhost:3000`

Next steps for me (or for you):
- Replace placeholder data in `src/data/resume.ts` with your resume content.
- Add `public/resume.pdf` and `public/photo.jpg` (your real photo) — the hero uses `/photo.jpg` and download uses `/resume.pdf`.
- Optionally wire contact form to an email service or server.

Auto-population & integrations

- To auto-populate `src/data/resume.ts` from a public resume URL, provide the URL and I will parse and fill fields.
- Contact form: configure `REACT_APP_FORM_ENDPOINT` (or set `window.FORM_ENDPOINT`) to your form endpoint (Formspree, Getform, Netlify Functions, etc.). The form includes a honeypot to reduce spam.
- Project visuals: if a project has no `image` field, the site generates a tasteful abstract SVG preview automatically.

Local parser (optional)

I can add a Node script to parse PDF resumes into structured JSON (using `pdf-parse`). Tell me if you want that and I'll add `scripts/parseResume.js` and instructions.
