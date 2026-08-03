import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const publicRoot = path.resolve("public");
const sourceExts = new Set([".astro", ".ts", ".tsx", ".js", ".jsx"]);

const imagePaths = new Set();

const addImage = (imagePath) => {
  if (imagePath.startsWith("/img/")) imagePaths.add(imagePath);
};

async function walkSourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walkSourceFiles(fullPath);
      if (sourceExts.has(path.extname(entry.name))) return [fullPath];
      return [];
    }),
  );
  return files.flat();
}

const sourceFiles = await walkSourceFiles("src");

for (const sourceFile of sourceFiles) {
  const text = await readFile(sourceFile, "utf8");

  for (const match of text.matchAll(/["'](\/img\/[^"']+\.(?:webp|jpg|jpeg|png))["']/gi)) {
    addImage(match[1]);
  }

  for (const match of text.matchAll(
    /numberedImages\(\s*["']([^"']+)["']\s*,\s*["']([^"']+)["']\s*,\s*(\d+)\s*\)/g,
  )) {
    const [, folder, basename, count] = match;
    for (let index = 1; index <= Number(count); index += 1) {
      addImage(`${folder}/${basename}-${index}.webp`);
    }
  }
}

const missing = [];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

for (const imagePath of [...imagePaths].sort()) {
  const diskPath = path.join(publicRoot, imagePath.replace(/^\//, ""));
  if (!(await exists(diskPath))) missing.push(imagePath);

  if (/\.webp$/i.test(imagePath)) {
    const avifPath = imagePath.replace(/\.webp$/i, ".avif");
    const avifDiskPath = path.join(publicRoot, avifPath.replace(/^\//, ""));
    if (!(await exists(avifDiskPath))) missing.push(avifPath);
  }
}

if (missing.length > 0) {
  process.stderr.write(`Missing image files:\n${missing.map((item) => `- ${item}`).join("\n")}\n`);
  process.exit(1);
}

process.stdout.write(`Checked ${imagePaths.size} referenced image paths.\n`);
