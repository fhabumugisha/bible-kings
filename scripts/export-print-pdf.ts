/**
 * Export print-ready PDFs with all card images (front + back), one card per A4 page.
 *
 * Usage:
 *   npx tsx scripts/export-print-pdf.ts
 *
 * Output:
 *   out/print-kings.pdf    — 86 pages (43 kings × front + back)
 *   out/print-prophets.pdf — 50 pages (25 prophets × front + back)
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

const SIZE = CARD_SIZES.large; // 88×126mm — fits well centered on A4
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
      return _match;
    }
  );
}

/** Build a full HTML document with all cards, one per page */
function buildPdfHTML(cardHtmls: string[]): string {
  const css = sharedCSS().replace(/@import url\([^)]+\);?/g, "");

  const pages = cardHtmls
    .map(
      (html) => `<div class="page-wrapper">${inlineImages(html)}</div>`
    )
    .join("\n");

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
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: white; }

    .page-wrapper {
      width: 210mm;
      height: 297mm;
      display: flex;
      align-items: center;
      justify-content: center;
      page-break-after: always;
      break-after: page;
    }
    .page-wrapper:last-child {
      page-break-after: auto;
      break-after: auto;
    }

    /* Override card page-break (handled by wrapper) */
    .card {
      page-break-after: auto;
      break-after: auto;
    }
  </style>
</head>
<body>${pages}</body>
</html>`;
}

async function generatePdf(
  page: Awaited<ReturnType<Awaited<ReturnType<typeof puppeteer.launch>>["newPage"]>>,
  cardHtmls: string[],
  outPath: string,
  label: string
) {
  const html = buildPdfHTML(cardHtmls);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  // Wait for Google Fonts
  await page.evaluate(() =>
    Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, 5000)),
    ])
  );

  // Small delay for image rendering
  await new Promise((r) => setTimeout(r, 500));

  // Auto-shrink overflowing back cards
  await page.evaluate(() => {
    document.querySelectorAll(".card-back").forEach((el) => {
      const card = el as HTMLElement;
      if (card.scrollHeight > card.clientHeight) {
        const ratio = card.clientHeight / card.scrollHeight;
        card.style.transformOrigin = "top left";
        card.style.transform = `scale(${ratio})`;
        card.style.width = `${100 / ratio}%`;
      }
    });
  });

  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  console.log(`\u2713 ${outPath} — ${label}`);
}

async function main() {
  const outDir = path.join(process.cwd(), "out");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Kings: front, back, front, back, ...
  const kingCards: string[] = [];
  for (const king of KINGS) {
    kingCards.push(kingFrontHTML(king));
    kingCards.push(kingBackHTML(king));
  }
  await generatePdf(
    page,
    kingCards,
    path.join(outDir, "print-kings.pdf"),
    `${KINGS.length} rois (${KINGS.length * 2} pages)`
  );

  // Prophets: front, back, front, back, ...
  const prophetCards: string[] = [];
  for (const prophet of PROPHETS) {
    prophetCards.push(prophetFrontHTML(prophet));
    prophetCards.push(prophetBackHTML(prophet));
  }
  await generatePdf(
    page,
    prophetCards,
    path.join(outDir, "print-prophets.pdf"),
    `${PROPHETS.length} prophètes (${PROPHETS.length * 2} pages)`
  );

  await browser.close();
  console.log("\nDone!");
}

main();
