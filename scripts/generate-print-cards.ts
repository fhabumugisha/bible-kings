/**
 * Generate standalone HTML files for printing trading cards.
 *
 * Usage:
 *   npx tsx scripts/generate-print-cards.ts
 *
 * Output:
 *   out/print-kings.html    — 43 kings (recto + verso)
 *   out/print-prophets.html — 25 prophets (recto + verso)
 *
 * Features:
 *   - Size selector: 63×88mm / 70×100mm / 88×126mm
 *   - Layout toggle: 1 card/page or grid per A4
 *   - Export PDF button (uses browser print dialog)
 */

import fs from "fs";
import path from "path";
import { KINGS, ERAS } from "../src/data/kings";
import { PROPHETS, PROPHET_ERAS } from "../src/data/prophets";
import type { King } from "../src/types";
import type { Prophet } from "../src/types";

// ---- constants ----
export const ERA_COLORS: Record<string, string> = {
  united: "#d4a017",
  israel: "#c0392b",
  judah: "#2c3e8f",
  postexilic: "#0d9488",
  fulfillment: "#7c3aed",
};

export const PARCHMENT = {
  50: "#fefdfb",
  100: "#fdf8f0",
  200: "#f5e6d0",
  300: "#e8d5b8",
  900: "#3d2e1e",
};

export const GOLD = "#d4a017";

// ---- helpers ----
export function stars(rating: number): string {
  return (
    '<span class="stars">' +
    Array.from({ length: 5 }, (_, i) =>
      i < rating
        ? `<span class="star filled">★</span>`
        : `<span class="star empty">☆</span>`
    ).join("") +
    "</span>"
  );
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function faithfulnessLabel(f: number): string {
  return ["Infidèle", "Infidèle", "Mitigé", "Variable", "Fidèle", "Exemplaire"][f] ?? "";
}

export function impactLabel(i: number): string {
  return ["Mention", "Mention", "Significatif", "Notable", "Important", "Majeur"][i] ?? "";
}

// Card size presets: [width_mm, height_mm, scale_factor]
// scale_factor is relative to base (63×88) for font sizing
export const CARD_SIZES = {
  standard: { w: 63, h: 88, scale: 1, label: "63×88mm (standard)", gridCols: 3 },
  medium: { w: 70, h: 100, scale: 1.12, label: "70×100mm (compact+)", gridCols: 2 },
  large: { w: 88, h: 126, scale: 1.4, label: "88×126mm (confortable)", gridCols: 2 },
  canva: { w: 50.8, h: 88.9, scale: 0.806, label: "2×3.5in (Canva)", gridCols: 3 },
};

// ---- CSS ----
export function sharedCSS(): string {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@300;400;600&display=swap');

    :root {
      --card-w: 63mm;
      --card-h: 88mm;
      --scale: 1;
      --grid-cols: 3;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', sans-serif;
      background: ${PARCHMENT[50]};
      color: ${PARCHMENT[900]};
    }

    /* ---- Controls bar ---- */
    .controls {
      position: sticky;
      top: 0;
      z-index: 100;
      background: ${PARCHMENT[900]};
      color: white;
      padding: 10px 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
    }
    .controls .group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .controls .group-label {
      font-size: 11px;
      opacity: .6;
      text-transform: uppercase;
      letter-spacing: .05em;
    }
    .controls .sep {
      width: 1px;
      height: 24px;
      background: rgba(255,255,255,.2);
    }
    .controls button {
      background: ${GOLD};
      color: ${PARCHMENT[900]};
      border: none;
      padding: 5px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      white-space: nowrap;
    }
    .controls button:hover { opacity: .85; }
    .controls button.active { outline: 2px solid white; outline-offset: 2px; }
    .controls button.btn-pdf {
      background: #27ae60;
      color: white;
    }
    .controls .info {
      margin-left: auto;
      font-size: 12px;
      opacity: .7;
    }

    @media print { .controls { display: none !important; } }

    /* ---- Card base ---- */
    .card {
      width: var(--card-w);
      height: var(--card-h);
      border-radius: calc(4mm * var(--scale));
      overflow: hidden;
      position: relative;
      page-break-after: always;
      break-after: page;
      flex-shrink: 0;
    }

    /* ---- SINGLE layout (screen) ---- */
    body.layout-single .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 24px;
      justify-content: center;
    }

    /* ---- GRID layout (screen) – cards per A4 ---- */
    body.layout-grid .cards-container {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      justify-content: center;
    }
    body.layout-grid .grid-page {
      width: 210mm;
      min-height: 297mm;
      display: grid;
      grid-template-columns: repeat(var(--grid-cols), var(--card-w));
      gap: 3mm;
      padding: 5mm;
      page-break-after: always;
      break-after: page;
      align-content: start;
      justify-content: center;
    }
    body.layout-grid .grid-page .card {
      page-break-after: auto;
      break-after: auto;
    }

    /* ---- Print ---- */
    @media print {
      body { margin: 0; }
      body.layout-single .cards-container { padding: 0; gap: 0; }
    }

    /* ---- Card Front ---- */
    .card-front {
      border: 3px solid var(--era-color);
    }
    .card-front .portrait {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
    .card-front .badge-number {
      position: absolute;
      left: calc(3mm * var(--scale));
      top: calc(3mm * var(--scale));
      z-index: 10;
      width: calc(8mm * var(--scale));
      height: calc(8mm * var(--scale));
      border-radius: 50%;
      background: rgba(0,0,0,.5);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(8pt * var(--scale));
      font-weight: 700;
    }
    .card-front .badge-stars {
      position: absolute;
      right: calc(3mm * var(--scale));
      top: calc(3mm * var(--scale));
      z-index: 10;
      background: rgba(0,0,0,.6);
      border-radius: 999px;
      padding: calc(1mm * var(--scale)) calc(2mm * var(--scale));
    }
    .card-front .bottom-overlay {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      z-index: 10;
      background: linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.6) 60%, transparent);
      padding: calc(10mm * var(--scale)) calc(3mm * var(--scale)) calc(3mm * var(--scale));
    }
    .card-front .king-name {
      font-family: 'Cinzel', serif;
      font-weight: 700;
      color: white;
      font-size: calc(10pt * var(--scale));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-front .reign-text {
      font-family: 'Inter', sans-serif;
      font-size: calc(7pt * var(--scale));
      color: rgba(255,255,255,.8);
    }

    /* ---- Card Back ---- */
    .card-back {
      border: 3px solid var(--era-color);
      background: ${PARCHMENT[100]};
      display: flex;
      flex-direction: column;
      padding: calc(2mm * var(--scale));
      overflow: hidden;
    }
    .card-back .back-name {
      font-family: 'Cinzel', serif;
      font-weight: 800;
      font-size: calc(11pt * var(--scale));
      text-align: center;
      margin-bottom: calc(1.5mm * var(--scale));
      padding-top: 0;
      white-space: nowrap;
      overflow: visible;
      color: var(--era-color);
    }
    .card-back .info-line {
      display: flex;
      align-items: flex-start;
      gap: calc(1.5mm * var(--scale));
      font-size: calc(6.5pt * var(--scale));
      line-height: 1.3;
      margin-bottom: calc(1mm * var(--scale));
    }
    .card-back .info-line .emoji {
      flex-shrink: 0;
      font-size: calc(8pt * var(--scale));
    }
    .card-back .rating-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: calc(2mm * var(--scale));
      background: ${PARCHMENT[200]}cc;
      border-radius: calc(2mm * var(--scale));
      padding: calc(1mm * var(--scale)) calc(2mm * var(--scale));
      margin: calc(1.5mm * var(--scale)) 0;
    }
    .card-back .rating-bar .label {
      font-size: calc(6.5pt * var(--scale));
      font-weight: 600;
    }
    .card-back .section-title {
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: calc(7pt * var(--scale));
      margin-bottom: calc(1mm * var(--scale));
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .card-back .explanation {
      font-size: calc(5.5pt * var(--scale));
      line-height: 1.35;
      color: ${PARCHMENT[900]}cc;
      margin-bottom: calc(1.5mm * var(--scale));
    }
    .card-back .lesson-box {
      background: ${GOLD}1a;
      border-radius: calc(2mm * var(--scale));
      padding: calc(1.5mm * var(--scale)) calc(2mm * var(--scale));
      margin-bottom: calc(1.5mm * var(--scale));
    }
    .card-back .lesson-box p {
      font-size: calc(5.5pt * var(--scale));
      font-weight: 600;
      line-height: 1.3;
    }
    .card-back .separator {
      border: none;
      border-top: 1px solid ${PARCHMENT[900]}33;
      margin: calc(1.5mm * var(--scale)) 0;
    }
    .card-back .fact {
      display: flex;
      align-items: flex-start;
      gap: calc(1mm * var(--scale));
      font-size: calc(5.5pt * var(--scale));
      line-height: 1.3;
      margin-bottom: calc(0.8mm * var(--scale));
    }
    .card-back .fact .emoji {
      flex-shrink: 0;
      font-size: calc(7pt * var(--scale));
    }

    /* Text wrapping for French text */
    .card-back .explanation,
    .card-back .fact,
    .card-back .info-line,
    .card-back .lesson-box p {
      hyphens: auto;
      -webkit-hyphens: auto;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    /* Stars */
    .stars { font-size: calc(9pt * var(--scale)); line-height: 1; white-space: nowrap; }
    .star.filled { color: ${GOLD}; text-shadow: 0 0 1px rgba(0,0,0,.3); }
    .star.empty { color: ${PARCHMENT[900]}40; }
    .card-front .badge-stars .star.empty { color: rgba(255,255,255,.5); }
  `;
}

// ---- King card HTML generators ----
export function kingFrontHTML(king: King): string {
  const color = ERA_COLORS[king.kingdom];
  const crownEmoji = king.id === "athalie" ? "👸" : "👑";
  return `
    <div class="card card-front" style="--era-color: ${color}; background: ${PARCHMENT[200]}">
      <div class="badge-number">#${king.number}</div>
      <div class="badge-stars">${stars(king.faithfulness)}</div>
      <img class="portrait" src="../public${king.imagePath}" alt="${escapeHtml(king.name)}" onerror="this.style.display='none'"/>
      <div class="bottom-overlay">
        <div class="king-name">${crownEmoji} ${escapeHtml(king.name)}</div>
        <div class="reign-text">${escapeHtml(king.reignDuration)} de règne</div>
      </div>
    </div>`;
}

export function kingBackHTML(king: King): string {
  const color = ERA_COLORS[king.kingdom];
  const parallelName = king.parallelKing
    ? KINGS.find((k) => k.id === king.parallelKing)?.name ?? king.parallelKing
    : null;

  let html = `
    <div class="card card-back" style="--era-color: ${color}">
      <div class="back-name">👑 ${escapeHtml(king.name)}</div>
      <div class="info-line"><span class="emoji">📖</span><span>${escapeHtml(king.biblicalReference)}</span></div>
      <div class="info-line"><span class="emoji">⏳</span><span>${escapeHtml(king.reignDuration)} (${escapeHtml(king.reignYears)})</span></div>`;

  if (parallelName) {
    html += `<div class="info-line"><span class="emoji">👑</span><span>Roi parallèle : ${escapeHtml(parallelName)}</span></div>`;
  }

  html += `
      <div class="info-line"><span class="emoji">🕊️</span><span>${king.prophets.length > 0 ? escapeHtml(king.prophets.join(", ")) : "Aucun"}</span></div>
      <div class="rating-bar">${stars(king.faithfulness)}<span class="label">${escapeHtml(faithfulnessLabel(king.faithfulness))}</span></div>`;

  if (king.explanation) {
    html += `
      <div class="section-title">📘 Histoire</div>
      <p class="explanation">${escapeHtml(king.explanation)}</p>`;
  }
  if (king.lesson) {
    html += `
      <div class="lesson-box"><p>🎯 ${escapeHtml(king.lesson)}</p></div>`;
  }

  html += `<hr class="separator"/><div class="section-title">📌 Faits marquants</div>`;
  for (const fact of king.keyFacts) {
    html += `<div class="fact"><span class="emoji">${fact.emoji}</span><span>${escapeHtml(fact.text)}</span></div>`;
  }

  html += `</div>`;
  return html;
}

// ---- Prophet card HTML generators ----
export function prophetFrontHTML(prophet: Prophet): string {
  const color = ERA_COLORS[prophet.era];
  return `
    <div class="card card-front" style="--era-color: ${color}; background: ${PARCHMENT[200]}">
      <div class="badge-number">#${prophet.number}</div>
      <div class="badge-stars">${stars(prophet.impact)}</div>
      <img class="portrait" src="../public${prophet.imagePath}" alt="${escapeHtml(prophet.name)}" onerror="this.style.display='none'"/>
      <div class="bottom-overlay">
        <div class="king-name">🕊️ ${escapeHtml(prophet.name)}</div>
        <div class="reign-text">${escapeHtml(prophet.ministryDuration)} de ministère</div>
      </div>
    </div>`;
}

export function prophetBackHTML(prophet: Prophet): string {
  const color = ERA_COLORS[prophet.era];

  let html = `
    <div class="card card-back" style="--era-color: ${color}">
      <div class="back-name">🕊️ ${escapeHtml(prophet.name)}</div>
      <div class="info-line"><span class="emoji">📖</span><span>${escapeHtml(prophet.biblicalReference)}</span></div>
      <div class="info-line"><span class="emoji">⏳</span><span>${escapeHtml(prophet.ministryDuration)} (${escapeHtml(prophet.ministryYears)})</span></div>`;

  if (prophet.contemporaryKings.length > 0) {
    html += `<div class="info-line"><span class="emoji">👑</span><span>Rois contemporains : ${escapeHtml(prophet.contemporaryKings.join(", "))}</span></div>`;
  }

  html += `
      <div class="info-line"><span class="emoji">🕊️</span><span>${escapeHtml(prophet.specialty)}</span></div>
      <div class="rating-bar">${stars(prophet.impact)}<span class="label">${escapeHtml(impactLabel(prophet.impact))}</span></div>`;

  if (prophet.explanation) {
    html += `
      <div class="section-title">📘 Histoire</div>
      <p class="explanation">${escapeHtml(prophet.explanation)}</p>`;
  }
  if (prophet.lesson) {
    html += `
      <div class="lesson-box"><p>🎯 ${escapeHtml(prophet.lesson)}</p></div>`;
  }

  html += `<hr class="separator"/><div class="section-title">📌 Faits marquants</div>`;
  for (const fact of prophet.keyFacts) {
    html += `<div class="fact"><span class="emoji">${fact.emoji}</span><span>${escapeHtml(fact.text)}</span></div>`;
  }

  html += `</div>`;
  return html;
}

// ---- Build grid pages ----
function wrapInGridPages(cardHtmls: string[], cardsPerPage: number): string {
  let html = "";
  for (let i = 0; i < cardHtmls.length; i += cardsPerPage) {
    const page = cardHtmls.slice(i, i + cardsPerPage);
    html += `<div class="grid-page">${page.join("\n")}</div>\n`;
  }
  return html;
}

// ---- Build recto/verso pages for manual duplex printing ----
function wrapRectoVersoPages(
  cardHtmls: string[], // [front1, back1, front2, back2, ...]
  cardsPerPage: number,
  cols: number
): { recto: string; verso: string } {
  const fronts = cardHtmls.filter((_, i) => i % 2 === 0);
  const backs = cardHtmls.filter((_, i) => i % 2 === 1);

  // Rectos: fronts grouped by page, normal order
  const rectoHtml = wrapInGridPages(fronts, cardsPerPage);

  // Versos: backs grouped by page, columns reversed per row for long-edge flip alignment
  const mirroredBacks: string[] = [];
  for (let p = 0; p < backs.length; p += cardsPerPage) {
    const pageCards = backs.slice(p, p + cardsPerPage);
    for (let r = 0; r < pageCards.length; r += cols) {
      const row = pageCards.slice(r, r + cols);
      mirroredBacks.push(...row.reverse());
    }
  }
  const versoHtml = wrapInGridPages(mirroredBacks, cardsPerPage);

  return { recto: rectoHtml, verso: versoHtml };
}

// ---- Full HTML document ----
function buildHTML(title: string, cards: string[], count: number): string {
  // Pre-compute grid containers for each size
  const sizesJson = JSON.stringify(CARD_SIZES);

  // For grid layout, compute how many cards fit per A4 page for each size
  // A4 = 210×297mm, with 5mm padding each side = 200×287mm usable
  const gridContainers: Record<string, string> = {};
  const rectoVersoContainers: Record<string, { recto: string; verso: string }> = {};
  for (const [key, size] of Object.entries(CARD_SIZES)) {
    const usableW = 200; // mm
    const usableH = 287; // mm
    const cols = size.gridCols;
    const rows = Math.floor((usableH + 3) / (size.h + 3));
    const perPage = cols * rows;
    gridContainers[key] = wrapInGridPages(cards, perPage);
    rectoVersoContainers[key] = wrapRectoVersoPages(cards, perPage, cols);
  }

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapeHtml(title)}</title>
  <style>${sharedCSS()}</style>
</head>
<body class="layout-single">
  <div class="controls">
    <strong style="font-size:14px">${escapeHtml(title)}</strong>
    <div class="sep"></div>

    <div class="group">
      <span class="group-label">Taille</span>
      <button id="btn-size-standard" class="active" onclick="setSize('standard')">63×88</button>
      <button id="btn-size-medium" onclick="setSize('medium')">70×100</button>
      <button id="btn-size-large" onclick="setSize('large')">88×126</button>
    </div>

    <div class="sep"></div>

    <div class="group">
      <span class="group-label">Mise en page</span>
      <button id="btn-single" class="active" onclick="setLayout('single')">1 / page</button>
      <button id="btn-grid" onclick="setLayout('grid')">Grille A4</button>
      <button id="btn-recto" onclick="setLayout('recto')">🖨️ Rectos</button>
      <button id="btn-verso" onclick="setLayout('verso')">🖨️ Versos</button>
    </div>

    <div class="sep"></div>

    <button class="btn-pdf" onclick="window.print()">📄 Exporter PDF</button>

    <span class="info" id="info-text">${count} cartes × 2 faces</span>
  </div>

  <!-- Single layout (default) -->
  <div class="cards-container" id="container-single">
    ${cards.join("\n")}
  </div>

  <!-- Grid layouts (one per size, only active one visible) -->
  <div class="cards-container" id="container-grid-standard" style="display:none">
    ${gridContainers.standard}
  </div>
  <div class="cards-container" id="container-grid-medium" style="display:none">
    ${gridContainers.medium}
  </div>
  <div class="cards-container" id="container-grid-large" style="display:none">
    ${gridContainers.large}
  </div>

  <!-- Recto-verso layouts (one per size) -->
  <div class="cards-container" id="container-recto-standard" style="display:none">
    ${rectoVersoContainers.standard.recto}
  </div>
  <div class="cards-container" id="container-recto-medium" style="display:none">
    ${rectoVersoContainers.medium.recto}
  </div>
  <div class="cards-container" id="container-recto-large" style="display:none">
    ${rectoVersoContainers.large.recto}
  </div>
  <div class="cards-container" id="container-verso-standard" style="display:none">
    ${rectoVersoContainers.standard.verso}
  </div>
  <div class="cards-container" id="container-verso-medium" style="display:none">
    ${rectoVersoContainers.medium.verso}
  </div>
  <div class="cards-container" id="container-verso-large" style="display:none">
    ${rectoVersoContainers.large.verso}
  </div>

  <script>
    var SIZES = ${sizesJson};
    var currentSize = 'standard';
    var currentLayout = 'single';

    function hideAllContainers() {
      document.getElementById('container-single').style.display = 'none';
      ['standard','medium','large'].forEach(function(k) {
        document.getElementById('container-grid-' + k).style.display = 'none';
        document.getElementById('container-recto-' + k).style.display = 'none';
        document.getElementById('container-verso-' + k).style.display = 'none';
      });
    }

    function setSize(size) {
      currentSize = size;
      var s = SIZES[size];
      document.documentElement.style.setProperty('--card-w', s.w + 'mm');
      document.documentElement.style.setProperty('--card-h', s.h + 'mm');
      document.documentElement.style.setProperty('--scale', s.scale);
      document.documentElement.style.setProperty('--grid-cols', s.gridCols);

      // Update active button
      ['standard','medium','large'].forEach(function(k) {
        document.getElementById('btn-size-' + k).classList.toggle('active', k === size);
      });

      // If in a grid-based layout, switch to the correct container for this size
      if (currentLayout === 'grid' || currentLayout === 'recto' || currentLayout === 'verso') {
        showContainerForSize(currentLayout, size);
      }
    }

    function setLayout(mode) {
      currentLayout = mode;
      // recto/verso use the same grid CSS as 'grid' layout
      document.body.className = 'layout-' + (mode === 'recto' || mode === 'verso' ? 'grid' : mode);
      hideAllContainers();

      if (mode === 'single') {
        document.getElementById('container-single').style.display = '';
      } else {
        showContainerForSize(mode, currentSize);
      }

      // Update active buttons
      ['single','grid','recto','verso'].forEach(function(m) {
        document.getElementById('btn-' + m).classList.toggle('active', m === mode);
      });

      // Update info text
      var info = document.getElementById('info-text');
      if (mode === 'recto') {
        info.textContent = '${count} rectos — Imprimer d\\'abord, puis réinsérer et imprimer les versos';
      } else if (mode === 'verso') {
        info.textContent = '${count} versos (colonnes inversées pour alignement recto-verso)';
      } else {
        info.textContent = '${count} cartes × 2 faces';
      }
    }

    function showContainerForSize(mode, size) {
      hideAllContainers();
      var prefix = mode === 'recto' ? 'container-recto-' : mode === 'verso' ? 'container-verso-' : 'container-grid-';
      document.getElementById(prefix + size).style.display = '';
    }

    // Init from URL params
    (function() {
      var params = new URLSearchParams(location.search);
      var size = params.get('size');
      if (size && SIZES[size]) setSize(size);
      if (params.get('layout') === 'grid') setLayout('grid');
    })();
  </script>
</body>
</html>`;
}

// ---- Main ----
function main() {
  const outDir = path.join(process.cwd(), "out");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Kings
  const kingCards: string[] = [];
  for (const king of KINGS) {
    kingCards.push(kingFrontHTML(king));
    kingCards.push(kingBackHTML(king));
  }
  const kingsHtml = buildHTML(
    `Rois d'Israël — Cartes à imprimer (${KINGS.length})`,
    kingCards,
    KINGS.length
  );
  const kingsPath = path.join(outDir, "print-kings.html");
  fs.writeFileSync(kingsPath, kingsHtml, "utf-8");
  console.log(`✓ ${kingsPath} — ${KINGS.length} rois (${KINGS.length * 2} faces)`);

  // Prophets
  const prophetCards: string[] = [];
  for (const prophet of PROPHETS) {
    prophetCards.push(prophetFrontHTML(prophet));
    prophetCards.push(prophetBackHTML(prophet));
  }
  const prophetsHtml = buildHTML(
    `Prophètes — Cartes à imprimer (${PROPHETS.length})`,
    prophetCards,
    PROPHETS.length
  );
  const prophetsPath = path.join(outDir, "print-prophets.html");
  fs.writeFileSync(prophetsPath, prophetsHtml, "utf-8");
  console.log(`✓ ${prophetsPath} — ${PROPHETS.length} prophètes (${PROPHETS.length * 2} faces)`);
}

// Run main only when executed directly (not when imported)
const isDirectRun =
  process.argv[1]?.replace(/\\/g, "/").endsWith("generate-print-cards.ts") ||
  process.argv[1]?.replace(/\\/g, "/").endsWith("generate-print-cards");
if (isDirectRun) {
  main();
}
