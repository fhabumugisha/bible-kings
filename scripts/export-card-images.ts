/**
 * Export each card (kings + prophets) as individual PNG images.
 *
 * Usage:
 *   npx tsx scripts/export-card-images.ts
 *
 * Output:
 *   out/cards/kings/saul-front.png, saul-back.png, ...
 *   out/cards/prophets/samuel-front.png, samuel-back.png, ...
 *
 * Requires: puppeteer (npm install -D puppeteer)
 */

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { KINGS } from "../src/data/kings";
import { PROPHETS } from "../src/data/prophets";
import {
  sharedCSS,
  kingFrontHTML,
  kingBackHTML,
  prophetFrontHTML,
  prophetBackHTML,
  CARD_SIZES,
} from "./generate-print-cards";

// Use "large" size (88×126mm) for good resolution
// 1mm ≈ 3.7795px at 96 DPI
const SIZE = CARD_SIZES.large;
const MM_TO_PX = 3.7795;
const VIEWPORT_W = Math.round(SIZE.w * MM_TO_PX);
const VIEWPORT_H = Math.round(SIZE.h * MM_TO_PX);
const SCALE_FACTOR = 2; // retina → ~665×952px output

const PUBLIC_DIR = path.join(process.cwd(), "public");

/** Convert all ../public/... image src to inline base64 data URIs */
function inlineImages(html: string): string {
  return html.replace(
    /src="\.\.\/public(\/[^"]+)"/g,
    (_match, relPath: string) => {
      const absPath = path.join(PUBLIC_DIR, relPath);
      if (fs.existsSync(absPath)) {
        const ext = path.extname(absPath).slice(1).toLowerCase();
        const mime =
          ext === "png" ? "image/png" :
          ext === "webp" ? "image/webp" :
          ext === "jpg" || ext === "jpeg" ? "image/jpeg" :
          "image/png";
        const b64 = fs.readFileSync(absPath).toString("base64");
        return `src="data:${mime};base64,${b64}"`;
      }
      // File not found — keep original (will show nothing, same as before)
      return _match;
    }
  );
}

function buildCardPage(cardHtml: string): string {
  const fixedHtml = inlineImages(cardHtml);

  // Strip the @import url(...) for Google Fonts from sharedCSS to avoid network timeouts;
  // we load fonts via <link> tag instead
  const css = sharedCSS().replace(/@import url\([^)]+\);?/g, "");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
  <style>
    ${css}
    :root {
      --card-w: ${SIZE.w}mm;
      --card-h: ${SIZE.h}mm;
      --scale: ${SIZE.scale};
    }
    * { margin: 0; padding: 0; }
    body {
      width: var(--card-w);
      height: var(--card-h);
      overflow: hidden;
      background: transparent !important;
    }
  </style>
</head>
<body>${fixedHtml}</body>
</html>`;
}

async function captureCard(
  page: Awaited<ReturnType<Awaited<ReturnType<typeof puppeteer.launch>>["newPage"]>>,
  html: string,
  outPath: string
) {
  await page.setContent(buildCardPage(html), {
    waitUntil: "domcontentloaded",
    timeout: 10000,
  });
  // Wait for Google Fonts to load (with timeout fallback)
  await page.evaluate(() =>
    Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, 5000)),
    ])
  );
  // Small extra delay for image rendering
  await new Promise((r) => setTimeout(r, 200));
  // Auto-shrink overflowing back cards to fit
  await page.evaluate(() => {
    const card = document.querySelector('.card-back') as HTMLElement;
    if (!card) return;
    if (card.scrollHeight > card.clientHeight) {
      const ratio = card.clientHeight / card.scrollHeight;
      card.style.transformOrigin = 'top left';
      card.style.transform = `scale(${ratio})`;
      card.style.width = `${100 / ratio}%`;
    }
  });
  await page.screenshot({ path: outPath, type: "png", omitBackground: true });
  console.log(`\u2713 ${outPath}`);
}

async function main() {
  const kingsDir = path.join(process.cwd(), "out/cards/kings");
  const prophetsDir = path.join(process.cwd(), "out/cards/prophets");
  fs.mkdirSync(kingsDir, { recursive: true });
  fs.mkdirSync(prophetsDir, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: VIEWPORT_W,
    height: VIEWPORT_H,
    deviceScaleFactor: SCALE_FACTOR,
  });

  // Kings
  for (const king of KINGS) {
    for (const [suffix, html] of [
      ["front", kingFrontHTML(king)],
      ["back", kingBackHTML(king)],
    ] as const) {
      const outPath = path.join(kingsDir, `${king.id}-${suffix}.png`);
      await captureCard(page, html, outPath);
    }
  }

  // Prophets
  for (const prophet of PROPHETS) {
    for (const [suffix, html] of [
      ["front", prophetFrontHTML(prophet)],
      ["back", prophetBackHTML(prophet)],
    ] as const) {
      const outPath = path.join(prophetsDir, `${prophet.id}-${suffix}.png`);
      await captureCard(page, html, outPath);
    }
  }

  await browser.close();
  console.log(
    `\nDone: ${KINGS.length * 2} king images + ${PROPHETS.length * 2} prophet images`
  );
}

main();
