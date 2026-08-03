import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const targets = [
  ["webp", { quality: 82, effort: 4 }],
  ["avif", { quality: 55, effort: 4 }],
];

const inputs = process.argv.slice(2);

if (inputs.length === 0) {
  process.stderr.write("Usage: node scripts/convert-images.mjs <file-or-directory> [...]\n");
  process.exit(1);
}

async function walk(input) {
  const inputStat = await stat(input);

  if (inputStat.isFile()) {
    return sourceExts.has(path.extname(input).toLowerCase()) ? [input] : [];
  }

  if (!inputStat.isDirectory()) return [];

  const entries = await readdir(input, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => walk(path.join(input, entry.name))),
  );
  return files.flat();
}

async function convert(src) {
  const ext = path.extname(src).toLowerCase();
  const sourceTargets = targets.filter(([targetExt]) => ext !== `.${targetExt}`);
  const srcStat = await stat(src);

  for (const [targetExt, options] of sourceTargets) {
    const out = src.replace(/\.(webp|jpe?g|png)$/i, `.${targetExt}`);
    let shouldConvert = true;

    try {
      const outStat = await stat(out);
      shouldConvert = outStat.mtimeMs < srcStat.mtimeMs;
    } catch {
      // Missing output.
    }

    if (!shouldConvert) {
      process.stdout.write(`skip ${path.relative(process.cwd(), out)}\n`);
      continue;
    }

    await sharp(src)[targetExt](options).toFile(out);
    process.stdout.write(`made ${path.relative(process.cwd(), out)}\n`);
  }
}

const sources = (await Promise.all(inputs.map((input) => walk(path.resolve(input))))).flat();

if (sources.length === 0) {
  process.stderr.write("No convertible image files found.\n");
  process.exit(1);
}

let failed = 0;

for (const src of sources) {
  try {
    await convert(src);
  } catch (error) {
    failed += 1;
    process.stderr.write(`fail ${path.relative(process.cwd(), src)}: ${error.message}\n`);
  }
}

if (failed > 0) process.exit(1);
