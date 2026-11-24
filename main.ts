import { mkdirSync, writeFileSync } from "node:fs";

// Monday, Reviewed in One Line — one-line review of my own Monday.
// Winner after calibration + pairwise judging (see report): a true-sounding
// micro-anecdote — named person (Budi), exact times, deadpan numbers,
// one concept only (the day eaten by meetings), no explaining, no punchline.
const ENTRY =
  "My Monday: 4 meetings, 0 decisions, and a 'quick question' from Budi at 16:47 that took until 18:20.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${outDir}/entry.txt`);
