// news-image-20261121 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to
// /output/entry.png. The gate takes a whole PNG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source) || statSync(source).size === 0) throw new Error('entry.png missing or empty beside main.ts');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(source, join(outDir, 'entry.png'));
if (statSync(join(outDir, 'entry.png')).size !== statSync(source).size) throw new Error('copied entry.png size differs from source');
