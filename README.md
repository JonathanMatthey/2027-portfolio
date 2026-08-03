# 2027-portfolio

Astro portfolio for Jonathan Matthey.

## Setup

Use Node.js 20 or newer.

```bash
npm install
```

## Development

```bash
npm run dev
```

## Validation

```bash
npm run check
npm run build
npm run images:check
```

## Images

Regenerate WebP and AVIF for one image:

```bash
npm run images:convert -- public/img/projects/berlin-fashion-week/berlin-fashion-week-5.JPG
```

Regenerate AVIF files for every WebP/JPG/PNG under `public`:

```bash
npm run images:avif
```
