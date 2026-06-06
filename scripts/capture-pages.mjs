#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const usage = `
Usage:
  node scripts/capture-pages.mjs --out screenshots/ux-audit --url http://localhost:3000 --url http://localhost:3000/cart

Options:
  --out <dir>        Output directory
  --url <url>        URL to capture, repeatable
  --mobile           Also capture a 390x844 mobile viewport
  --delay <ms>       Wait before each screenshot, default 600
`;

function parseArgs(argv) {
  const options = { urls: [], out: 'screenshots/ux-audit', mobile: false, delay: 600 };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--url') {
      options.urls.push(argv[++index]);
    } else if (arg === '--out') {
      options.out = argv[++index];
    } else if (arg === '--mobile') {
      options.mobile = true;
    } else if (arg === '--delay') {
      options.delay = Number(argv[++index]);
    } else if (arg === '--help' || arg === '-h') {
      console.log(usage.trim());
      process.exit(0);
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  if (options.urls.length === 0) {
    throw new Error('At least one --url is required.');
  }

  return options;
}

function slugForUrl(url, index) {
  const parsed = new URL(url);
  const pathSlug = `${parsed.hostname}${parsed.pathname}`
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

  return `${String(index + 1).padStart(2, '0')}-${pathSlug || 'home'}`;
}

async function importPlaywright() {
  try {
    return await import('playwright');
  } catch (error) {
    throw new Error('Could not import playwright. Run from a project with Playwright installed or add NODE_PATH to a bundled node_modules directory.');
  }
}

async function capture(page, url, outputPath, delay) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(delay);
  await page.screenshot({ path: outputPath, fullPage: true });
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const { chromium } = await importPlaywright();
  const outDir = resolve(options.out);

  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const manifest = [];

  for (const [index, url] of options.urls.entries()) {
    const slug = slugForUrl(url, index);
    const desktopPath = resolve(outDir, `${slug}-desktop.png`);

    await page.setViewportSize({ width: 1440, height: 1100 });
    await capture(page, url, desktopPath, options.delay);
    manifest.push({ url, viewport: 'desktop', path: desktopPath });

    if (options.mobile) {
      const mobilePath = resolve(outDir, `${slug}-mobile.png`);

      await page.setViewportSize({ width: 390, height: 844 });
      await capture(page, url, mobilePath, options.delay);
      manifest.push({ url, viewport: 'mobile', path: mobilePath });
    }
  }

  await browser.close();
  await writeFile(resolve(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(JSON.stringify({ outDir, screenshots: manifest.length }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
