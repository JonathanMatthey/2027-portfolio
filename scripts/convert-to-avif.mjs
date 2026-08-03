import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public");
const exts = new Set([".webp", ".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (exts.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

const sources = await walk(root);
let converted = 0;
let skipped = 0;
let failed = 0;

for (const src of sources) {
  const out = src.replace(/\.(webp|jpe?g|png)$/i, ".avif");
  try {
    const srcStat = await stat(src);
    try {
      const outStat = await stat(out);
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        skipped += 1;
        continue;
      }
    } catch {
      // output missing
    }

    await sharp(src).avif({ quality: 55, effort: 4 }).toFile(out);
    converted += 1;
    process.stdout.write(`✓ ${path.relative(root, out)}\n`);
  } catch (error) {
    failed += 1;
    process.stderr.write(`✗ ${path.relative(root, src)}: ${error.message}\n`);
  }
}

console.log(`\nDone. converted=${converted} skipped=${skipped} failed=${failed} total=${sources.length}`);
