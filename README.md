# PRO-INTEQ Engineering and Consulting — Website

Corporate website for **PRO-INTEQ Engineering and Consulting Company Limited**, Dar es Salaam, Tanzania.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Command         | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Development server               |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | ESLint                           |

## Configuration

See [`.env.example`](.env.example).

- `NEXT_PUBLIC_SITE_URL` — the public domain. Canonical URLs, `sitemap.xml`, `robots.txt` and social previews use it. Set it before going live.
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — contact form delivery via [Resend](https://resend.com). Without them the form does **not** send; it tells the visitor so and offers a pre-filled email and the phone number instead.

The contact form uses a Server Action, so the site must be deployed to a host that runs Next.js server features (Node.js runtime), not as a static export.

## Editing content

Content is data-driven — pages render from these files:

| File | Content |
| --- | --- |
| [`src/lib/company.ts`](src/lib/company.ts) | Company facts, leadership, values, lifecycle and procurement steps, HSE & quality, projects |
| [`src/lib/services.ts`](src/lib/services.ts) | The eight service lines |
| [`src/lib/supply.ts`](src/lib/supply.ts) | Supply & procurement categories |
| [`src/lib/industries.ts`](src/lib/industries.ts) | Industries served |
| [`src/lib/assets.ts`](src/lib/assets.ts) | Photo catalogue (with alt text) and the company profile PDF setting |
| [`src/lib/site.ts`](src/lib/site.ts) | Navigation and sitemap routes |

- **Company profile PDF:** add the file under `public/documents/` and set `COMPANY_PROFILE_PDF` in `src/lib/assets.ts`. Until then the buttons offer to request the profile by email.
- **Projects:** add confirmed case studies to `projects` in `company.ts`. Only publish client names, locations and scope that are approved.
- **Photos:** stored in `public/images/{hero,about,services,industries,projects,supply,hse}/`, max 2000 px on the long edge. Mark PRO-INTEQ's own photos with `companyPhoto: true`; never caption illustrative photos as PRO-INTEQ projects.
- **Brand:** colours are defined once in `src/app/globals.css` (locked palette). The site logo is `public/brand/pro-inteq-logo.png`, generated from the official artwork in `assets/brand/`.

## Architecture

- Server Components by default; client components only for the navigation menu and the quotation form.
- The quotation form posts to a Server Action (`src/app/contact/actions.ts`). Delivery is isolated in that file so it can later move to an API route, CRM or database without touching the pages.
- No database or hosting-specific dependencies. Any Node.js host that runs Next.js 16 works (for example Vercel, or Cloudflare via its Next.js adapter).
