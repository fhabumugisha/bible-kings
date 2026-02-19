/**
 * Export kings and prophets data as CSV files for Canva Bulk Create.
 *
 * Usage: npx tsx scripts/export-canva-csv.ts
 * Output: out/canva-kings.csv, out/canva-prophets.csv
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { KINGS, ERAS } from "../src/data/kings";
import { PROPHETS, PROPHET_ERAS } from "../src/data/prophets";

// ── Color mapping ──────────────────────────────────────────────────

const ERA_COLORS: Record<string, string> = {
  united: "#d4a017",
  israel: "#c0392b",
  judah: "#2c3e8f",
  postexilic: "#0d9488",
  fulfillment: "#7c3aed",
};

// ── Helpers ─────────────────────────────────────────────────────────

function starsString(n: number, max = 5): string {
  return "⭐".repeat(n) + "☆".repeat(max - n);
}

/** RFC 4180 CSV field escaping */
function escapeCSV(value: string): string {
  const s = String(value);
  if (s.includes(",") || s.includes('"') || s.includes("\n") || s.includes("\r")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function toCSV(headers: string[], rows: string[][]): string {
  const lines = [headers.map(escapeCSV).join(",")];
  for (const row of rows) {
    lines.push(row.map(escapeCSV).join(","));
  }
  return lines.join("\n");
}

// ── Build king name lookup (id → name) for parallelKing resolution ──

const kingNameById = new Map(KINGS.map((k) => [k.id, k.name]));

// ── Build era label lookups ─────────────────────────────────────────

const kingEraLabel = new Map(ERAS.map((e) => [e.id, e.label]));
const prophetEraLabel = new Map(PROPHET_ERAS.map((e) => [e.id, e.label]));

// ── Kings CSV ───────────────────────────────────────────────────────

const KING_HEADERS = [
  "numero",
  "nom",
  "royaume",
  "couleur_ere",
  "reference",
  "duree_regne",
  "dates",
  "roi_parallele",
  "prophetes",
  "fidelite",
  "fidelite_etoiles",
  "fait1",
  "fait2",
  "fait3",
  "fait4",
  "fait5",
  "explication",
  "lecon",
  "image",
];

const kingRows = KINGS.map((k) => {
  const facts = k.keyFacts.map((f) => `${f.emoji} ${f.text}`);
  return [
    String(k.number),
    k.name,
    kingEraLabel.get(k.kingdom) ?? k.kingdom,
    ERA_COLORS[k.kingdom] ?? "",
    k.biblicalReference,
    k.reignDuration,
    k.reignYears,
    k.parallelKing ? (kingNameById.get(k.parallelKing) ?? k.parallelKing) : "—",
    k.prophets.join(", ") || "—",
    String(k.faithfulness),
    starsString(k.faithfulness),
    facts[0] ?? "",
    facts[1] ?? "",
    facts[2] ?? "",
    facts[3] ?? "",
    facts[4] ?? "",
    k.explanation,
    k.lesson,
    k.imagePath,
  ];
});

// ── Prophets CSV ────────────────────────────────────────────────────

const PROPHET_HEADERS = [
  "numero",
  "nom",
  "ere",
  "couleur_ere",
  "reference",
  "duree_ministere",
  "dates",
  "royaume",
  "rois_contemporains",
  "specialite",
  "impact",
  "impact_etoiles",
  "fait1",
  "fait2",
  "fait3",
  "fait4",
  "fait5",
  "explication",
  "lecon",
  "image",
];

const prophetRows = PROPHETS.map((p) => {
  const facts = p.keyFacts.map((f) => `${f.emoji} ${f.text}`);
  return [
    String(p.number),
    p.name,
    prophetEraLabel.get(p.era) ?? p.era,
    ERA_COLORS[p.era] ?? "",
    p.biblicalReference,
    p.ministryDuration,
    p.ministryYears,
    p.kingdom,
    p.contemporaryKings.join(", ") || "—",
    p.specialty,
    String(p.impact),
    starsString(p.impact),
    facts[0] ?? "",
    facts[1] ?? "",
    facts[2] ?? "",
    facts[3] ?? "",
    facts[4] ?? "",
    p.explanation,
    p.lesson,
    p.imagePath,
  ];
});

// ── Write files ─────────────────────────────────────────────────────

const outDir = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")), "..", "out");
mkdirSync(outDir, { recursive: true });

const BOM = "\uFEFF";

const kingsPath = resolve(outDir, "canva-kings.csv");
writeFileSync(kingsPath, BOM + toCSV(KING_HEADERS, kingRows), "utf-8");

const prophetsPath = resolve(outDir, "canva-prophets.csv");
writeFileSync(prophetsPath, BOM + toCSV(PROPHET_HEADERS, prophetRows), "utf-8");

console.log(`✅ Kings CSV:    ${kingsPath} (${KINGS.length} rows)`);
console.log(`✅ Prophets CSV: ${prophetsPath} (${PROPHETS.length} rows)`);
