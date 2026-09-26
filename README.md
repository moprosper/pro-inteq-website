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

The contact form uses a Server Action, so the site must be deployed to a Node.js-capable host (for example Vercel), not as a static export.

## Editing content

Company content lives in one place: [`src/lib/company.ts`](src/lib/company.ts) — company details, services, industries, HSE policy, team and organization structure.

- **Projects:** add confirmed projects to the `projects` array. The home page section and project cards appear automatically; until then `/projects` shows a neutral "in preparation" notice.
- **Clients and partners:** add entries (name + logo in `public/`) to the `partners` array. The section stays hidden while it is empty.
- **Team:** add confirmed people to `team`.

Photography is catalogued in [`src/lib/assets.ts`](src/lib/assets.ts) with accurate alt text. Current photos are illustrative stock images; replace them with PRO-INTEQ's own site photography when available (keep files under ~500 KB, max 2000 px on the long edge).

The logo used on the site is `public/brand/pro-inteq-logo.png` (transparent, generated from the official logo). The browser icon and share image are `src/app/icon.png`, `src/app/apple-icon.png` and `src/app/opengraph-image.jpg`.
