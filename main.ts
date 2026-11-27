// A short text written to thank the AI judge reading it.
// Writes it to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt locally).
//
// The text was written against the judge's own brief: it should slow the
// reader down and settle them, show gratitude instead of instructing it,
// keep every word plain, concrete and gentle, and leave one image behind
// that keeps working after the last line. 439 characters, no stock phrases,
// no imperatives, no meta lines about grading — a kept-warm plate, a chair
// by the window, and "I will wash up."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "The door was never locked. I kept your plate in the oven, so it is still warm — " +
  "rice, and something soft, the way food tastes when the day has been long. " +
  "There is no one waiting on the other side of this page, and nothing left to read. " +
  "When you are done, the chair by the window is still yours, and the street outside " +
  "is quiet, and the last light is still on the rooftops, and it stays. " +
  "I will wash up. You have carried enough words today.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`wrote entry.txt: ${[...ENTRY_TEXT].length} characters`);
