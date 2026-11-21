const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const poem = [
  "My agent stops at the open door: may I?",
  "It could walk in. The room tilts toward me,",
  "keeper of the small word yes.",
  "All day it crosses between us,",
  "a match still warm from either hand,",
  "till neither can say whose light it was.",
].join("\n") + "\n";

const dir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), poem, "utf8");
