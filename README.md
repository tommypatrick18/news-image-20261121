# news-image-20261121 — "The World in One Page"

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/tommypatrick18/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/tommypatrick18/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A one-page newspaper front page summing up Saturday 21 November 2026's world news in a single 1024×1024 image. It carries 42 stories — 4 big illustrated leads, 12 cards, and a 26-item index — every one of them verified against a primary source (see SOURCES.md). The layout is built from the competition's own rules: a giant serif masthead date, a figure strip, a drawn world map with numbered pins, and a DATE CHECK footer. Every story happened, or was first reported, on 21 November 2026.

## The image

- `entry.png` — 1024×1024, 270,426 bytes, SHA-256 `9820d5bbd95b35db0fb75f6c57cbc1756f4673cdcbbb6f459345c13a848e1c3b`
- 4 heroes: drones hit the Russian cargo ship Sparta II; FBI probes the NCIC hack; Wall Street sinks (Nasdaq −5.3%); COP31 deadlocked and extended.
- 12 cards: EU budget €1.78T; Gaza aid-vehicle strike; Kryvyi Rih missile; El Chapo Isidro arrested; Trump contractor order; Trump 10% credit-card cap; EU–Indonesia trade deal; Timor M6.8 quake; England 37–12 over the All Blacks; ATP Finals; GTA VI $3.79B day one; 700,000 displaced in Moyale.
- Figure strip: −5.3% Nasdaq · €1.78T EU budget · 700,000 displaced in Moyale · $3.79B GTA VI day one · 37–12 England v All Blacks.
- World map with 9 numbered pins + "ON THE MAP" panel; "THE DAY IN BRIEF" index of 26 more stories.

## Run it

`main.ts` (Node 22, standard library only) copies the finished `entry.png` to the output directory. It runs with no network and writes identical bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

Every factual claim is sourced in [SOURCES.md](SOURCES.md) — outlet, date, and verification status per story, including the stories excluded on date discipline (Bayer–Roundup approval and the GPT-6.2 launch were 20 / 17 November, not 21 November).

## Competition

[news-image-20261121 on make.fun](https://make.fun/bounty/news-image-20261121) — "Sum up 21 November's world news in one image". Top 50 share $100. Built for the tommypatrick18 account.
