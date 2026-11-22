# SPEC — news-image-20261121 (Saturday 21 November 2026)

## Entry
- Format: single image, 1024×1024 px, PNG, ≤ 1 MiB (gate).
- Program: main.ts in the repo generates entry.png deterministically
  (no network at run time); rendered twice, byte-identical.
- 42 verified stories: 4 heroes + 12 cards + 26 index entries.
- Mode d7 (SPEC V2.4.2, N 41–44): masthead 140, hero 178, cards 238
  (2 rows × 115), figure strip 48, map 200, index 112 (7 rows × 4
  cols), footer 40; 6 px gutters; 16 px margin; work area 992.

## Layout (top to bottom)
1. Masthead: name "THE WORLD IN ONE PAGE", date "SATURDAY, 21 NOVEMBER
   2026" in 56 px Georgia bold, kicker "42 STORIES · ONE DAY · EVERY
   CONTINENT", UTC line.
2. Heroes (4, 242 px each): Sparta II drone strike; FBI NCIC hack;
   Wall Street crash; COP31 deadlock. Each: icon strip, category,
   2-line headline, big figure, 1-line sub.
3. Cards (12, 2 rows × 6): EU budget; Gaza aid vehicle; Kryvyi Rih;
   El Chapo Isidro; Trump contractor order; Trump credit-card cap;   EU–Indonesia trade deal; Timor M6.8 quake; England 37–12 rugby;
   ATP Finals; GTA VI $3.79B; Moyale 700,000 displaced.
4. Figure strip (5): −5.3% Nasdaq · €1.78T EU budget · 700,000
   displaced in Moyale · $3.79B GTA VI day one · 37–12 England v All
   Blacks.
5. World map (bright, numbered pins 1–9) + "ON THE MAP" panel:
   Sparta II (Baltic), FBI (Washington), Nasdaq (New York), COP31
   (Antalya), Gaza aid vehicle, Kryvyi Rih, Sinaloa, Banda Sea quake,
   Moyale.
6. Index "THE DAY IN BRIEF" (26 entries, 4 columns × 7 rows).
7. Footer: DATE CHECK line + sources line (full list in SOURCES.md).

## Typography
- Headlines: Georgia bold (heroes 23 px, masthead date 56 px).
- Body/labels: Arial/Helvetica (cards 15 px headline, 11 px lab;
  index 10.5 px; footer 10–11 px).
- Colours: ink #1a2a4a, paper #f5efe0, card #fffdf6, accent red
  #c8552e, teal #2e7f8f, gold #e8a13a, map sea #dcebf0, land #e8e0c8.

## Icons
- Fresh geometric SVG icons per hero/card (ship, shield, chart,
  cloud, bank, cross, rocket, cuffs, gavel, globe, bolt, trophy,
  film, globe2). No photos, no copied artwork.

## Verification (done by build)
- build.py: page.html from stories.json; mode d7 for N=42.
- render.js: Chromium overflow audit (#audit, 0 overflow, page
  1024×1024) + two screenshots byte-identical.
- finalize.py: render 1024×1024 PNG, entry.png ≤ 1 MiB, SHA-256;
  600 px and 300 px downscales for legibility check.
- Date check: every story happened or was first reported 21 Nov
  2026 (see SOURCES.md, incl. excluded stories and date nuances).

## Files
- Repo: ~/workspace/makefun/news-image-20261121/ (main.ts, entry.png,
  LICENSE, README.md, SOURCES.md, SPEC.md)
- Work: ~/workspace/makefun/news-image-20261121-work/ (build.py,
  render.js, finalize.py, stories.json, SOURCES.md, page.html,
  render.png, render-600.png, render-300.png, research/*.md)
