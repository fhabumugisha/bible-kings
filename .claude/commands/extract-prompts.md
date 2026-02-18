Extract character names and image generation prompts from a markdown description file into a JSON prompt collection.

## Input

- `$ARGUMENTS` contains: `<file-path> [display-name]`
  - `file-path` (required): path to a markdown file (e.g., `kings-descriptions.md`)
  - `display-name` (optional): label for the collection (e.g., `"Kings In Bible"`). Defaults to the file stem titlecased.

## Steps

### 1. Parse arguments

Split `$ARGUMENTS` into the file path and optional display name. If display name is quoted, strip the quotes.

### 2. Read the markdown file

Read the file at the given path (relative to project root).

### 3. Extract entries

Scan the file for character entry headings. Each entry starts with a line matching one of these patterns (with or without leading `#`/`##` markdown heading markers):

```
👑 <number>. <NAME>
🕊️ <number>. <NAME>
```

**Skip** era separator lines like `# ═══` or `# 🏛️ ÈRE` or `# ⚔️ ÈRE` or `# 🌅 ÈRE` — these are section dividers, not character entries.

For each entry, find the next line starting with `🎨` (the prompt label). The actual prompt text is on the line(s) immediately after the `🎨` label line. Collect all non-empty lines until the next `---` separator or next entry heading. Strip leading `>` blockquote markers and trim whitespace. Join multi-line prompts with a single space.

### 4. Convert names to kebab-case slugs

Apply these rules **in order**:

1. **Special case**: If name contains `JÉSUS` or `JESUS`, slug is `jesus`
2. **Kingdom suffixes**: `(Israël)` → append `-israel`, `(Juda)` → append `-juda` to the slug. Remove the parenthetical from the name before further processing.
3. **Drop alias parentheticals**: Remove any remaining parenthetical like `(Azaria)`, `(Hoshea)`, `(Jeconia)`, `(Reine)`, `(Abijam)`, `(aussi appelé Joash)`, etc.
4. **Remove diacritics**: É→e, È→e, Ê→e, Ë→e, À→a, Â→a, Ô→o, Ù→u, Û→u, Ü→u, Ç→c, Ï→i, Î→i, etc. (normalize NFD then strip combining marks)
5. **Lowercase** the entire name
6. **Roman numerals at end**: keep as-is after lowercasing (e.g., `JÉROBOAM II` → `jeroboam-ii`, `JÉROBOAM I` → `jeroboam-i`)
7. **Replace spaces and em-dashes** (`—`) with hyphens
8. **Remove** any characters that aren't `[a-z0-9-]`
9. **Collapse** multiple consecutive hyphens into one, trim leading/trailing hyphens

### 5. Build output JSON

```json
{
  "displayName": "<display-name>",
  "prompts": [
    { "name": "<slug>", "value": "<prompt-text>" },
    ...
  ]
}
```

### 6. Write the output file

Write the JSON to `<input-stem>-prompts.json` in the same directory as the input file.
- `kings-descriptions.md` → `kings-prompts.json`
- `prophetes-descriptions.md` → `prophetes-prompts.json`

The stem is the filename without `-descriptions` suffix if present, otherwise just the filename without extension.

### 7. Report results

Print a summary: number of prompts extracted, output file path, and first 3 slug names as a preview.

## Slug reference for verification

These are the expected slugs for `kings-descriptions.md` (must match `src/data/kings.ts` IDs):

| Markdown Name | Expected Slug |
|---|---|
| SAÜL | saul |
| DAVID | david |
| SALOMON | salomon |
| JÉROBOAM I | jeroboam-i |
| NADAB | nadab |
| BAASHA | baasha |
| ÉLA | ela |
| ZIMRI | zimri |
| OMRI | omri |
| ACHAB | achab |
| ACHAZIA (Israël) | achazia-israel |
| JORAM (Israël) | joram-israel |
| JÉHU | jehu |
| JOACHAZ (Israël) | joachaz-israel |
| JOAS (Israël) (aussi appelé Joash) | joas-israel |
| JÉROBOAM II | jeroboam-ii |
| ZACHARIE | zacharie |
| SHALLUM | shallum |
| MÉNAHEM | menahem |
| PÉKACHIA | pekachia |
| PÉKACH | pekach |
| OSÉE (Hoshea) | osee |
| ROBOAM | roboam |
| ABIA (Abijam) | abia |
| ASA | asa |
| JOSAPHAT | josaphat |
| JORAM (Juda) | joram-juda |
| ACHAZIA (Juda) | achazia-juda |
| ATHALIE (Reine) | athalie |
| JOAS (Juda) | joas-juda |
| AMATSIA | amatsia |
| OZIAS (Azaria) | ozias |
| JOTHAM | jotham |
| ACHAZ | achaz |
| ÉZÉCHIAS | ezechias |
| MANASSÉ | manasse |
| AMON | amon |
| JOSIAS | josias |
| JOACHAZ (Juda) | joachaz-juda |
| JOJAKIM | jojakim |
| JOJAKIN (Jeconia) | jojakin |
| SÉDÉCIAS | sedecias |
| JÉSUS — ROI DES ROIS | jesus |

After extraction, verify that all generated slugs match this reference table (for kings). If any slug doesn't match, fix the conversion logic before writing the file.
