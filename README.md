This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project configuration

- Project facts shared across pages, JSON-LD and the footer (MahaRERA numbers, prices, contact numbers, map links) live in `data/project.js`.
- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.example.com`) to the live domain; it drives canonical URLs, Open Graph tags, JSON-LD and the sitemap. On Vercel the project's production domain is used when it is unset.
- `public/brochure.pdf` is the file every enquiry form downloads after submission.

## Static export

The site is built as a static export (`output: "export"` in `next.config.ts`). `npm run build` writes the complete site — HTML, assets, `sitemap.xml` and `robots.txt` — to `out/`; upload that folder to any static host. Pages are exported as folders (`out/about/index.html`, served at `/about/`), so no server rewrite rules are needed.

- Set `NEXT_PUBLIC_SITE_URL` before building: the domain is baked into canonical URLs, Open Graph tags, JSON-LD and the sitemap.
- Images are served as-is (`images.unoptimized`), so keep new images compressed before adding them.
- `next start` does not work with a static export; preview the build with `npx serve@latest out`.

## Getting Started

First, run the development server:
test
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
