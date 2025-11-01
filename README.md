# Lead.Store — Next.js + Tailwind + Three.js (hero-only)

## Быстрый старт
```bash
pnpm i   # или npm i / yarn
pnpm dev # http://localhost:3000
```

## Сборка/запуск продакшн
```bash
pnpm build
pnpm start
```

## Lighthouse
- LCP < 2.5s: критические стили от Tailwind, 3D только в hero (рендер по load), изображения lazy, SVG‑иконки.
- Контраст и доступность: шрифты и размеры подобраны под WCAG AA.

## GA4
Замените ID в `app/layout.tsx` (`G-XXXXXXX`). События: `roi_calculated`, клики по CTA.

## Деплой
- **Vercel:** импортируйте репо, Framework: Next.js, Build Command: `next build`, Output: `.vercel/output` (по умолчанию). ENV: `NEXT_PUBLIC_GA_ID` при необходимости.
- **Docker:** см. Dockerfile.
