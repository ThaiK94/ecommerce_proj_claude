#!/usr/bin/env node
/**
 * Downloads the images and icons for the Thai's Grocery homepage from Figma
 * (file WluwEPAtT3HVNyljo1kxnO, node 2:8972) into /public.
 *
 * Figma MCP asset URLs are temporary (they expire ~7 days after they were
 * generated). Once downloaded, the files are committed with the repo and this
 * script is no longer needed. If the URLs have expired, re-export the assets
 * from Figma and drop them in public/ with the same file names.
 *
 * Usage:  pnpm assets          (skips files that already exist)
 *         pnpm assets --force  (re-download everything)
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const BASE = "https://www.figma.com/api/mcp/asset/";
const force = process.argv.includes("--force");

/** [local path under /public, Figma asset id] */
const assets = [
  // Hero
  ["images/seasonal-harvest.png", "b4d94242-10ff-49c4-95bf-2ad42d411283.png"],
  // Shop by category
  ["images/category-produce.png", "271a4694-7983-4d56-a245-aeaef371b29d.png"],
  ["images/category-meat-seafood.png", "9d2bb67a-212a-46dc-bd94-18ece19db783.png"],
  ["images/category-dairy-eggs.png", "2a6c33f3-94ba-4bfd-bdd7-91433c9648bd.png"],
  ["images/category-bakery.png", "489ecd98-fdc2-4fd3-b4f8-767ede3ca713.png"],
  ["images/category-pantry.png", "7ef531df-c2c9-403c-b5c0-533591362e89.png"],
  ["images/category-frozen.png", "aa9b34bc-090b-41ea-a954-589da6165b7a.png"],
  // Fresh picks
  ["images/product-honeycrisp-apples.png", "366f492c-00fa-40e6-a61e-0adba1c068b0.png"],
  ["images/product-organic-bananas.png", "c4384d5f-041e-485b-8d2c-1cbcd47d5eda.png"],
  ["images/product-whole-milk.png", "e19cb25c-bef4-4d54-af77-5b0924b819bc.png"],
  ["images/product-sourdough-loaf.png", "cb21074d-e346-4e2f-aa23-9d3d084b8ddd.png"],
  ["images/product-atlantic-salmon.png", "99fabc57-a22a-4a81-b5e4-c2e1b3b2e50c.png"],
  // Weekly offers
  ["images/offer-honeycrisp-apples.png", "000235c0-f364-4ff5-b89f-1a945027faf4.png"],
  ["images/offer-whole-milk.png", "4fdf21dc-435c-40d0-9618-8c09946d5408.png"],
  ["images/offer-sourdough-loaf.png", "37c9675b-40a9-425f-8432-d17469a106c6.png"],
  // Recipes
  ["images/recipe-squash-grain-bowls.png", "e867c228-e805-422a-ba18-cf9abd73afb8.png"],
  ["images/recipe-lemon-herb-salmon.png", "6e755f87-af38-4e29-b94b-8a9e4c64947a.png"],
  ["images/recipe-apple-oat-crumble.png", "d1675ee3-25fa-449e-bf25-236d74494fdb.png"],
  // Icons
  ["icons/search.svg", "867676b9-27a7-4b21-92d5-22cdff7e2c0b.svg"],
  ["icons/user-round.svg", "6e62d437-79bf-4d71-8956-979a6ed1a4e7.svg"],
  ["icons/shopping-cart.svg", "68635dbb-59df-44f8-a0c6-d3b754edb3f2.svg"],
  ["icons/map-pin.svg", "b4c81849-5f40-42be-95ee-1b106e07b28a.svg"],
  ["icons/chevron-down.svg", "8f551d23-eee1-4883-90a7-08629b7b4114.svg"],
  ["icons/arrow-right-white.svg", "35dbf5e5-ea9e-4f13-b63e-967eea3a851a.svg"],
  ["icons/arrow-right.svg", "986fc035-eff7-4cfd-8672-786fbac8d29b.svg"],
  ["icons/plus.svg", "5245a608-be11-4505-a6b1-da4919c30989.svg"],
  ["icons/sprout.svg", "47228445-905e-4b42-ae5b-eaab46f340f1.svg"],
  ["icons/truck.svg", "ea12e6bb-5e26-4054-9c42-b58788f0d79e.svg"],
  ["icons/badge-check.svg", "796f9a90-eb68-478e-a7f1-6055e198cab7.svg"],
];

const exists = (p) => access(p).then(() => true, () => false);

let ok = 0;
let skipped = 0;
const failed = [];

await Promise.all(
  assets.map(async ([file, id]) => {
    const dest = join(root, file);
    if (!force && (await exists(dest))) {
      skipped++;
      return;
    }
    try {
      const res = await fetch(BASE + id, { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error("empty response");
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, buf);
      ok++;
    } catch (err) {
      failed.push(`${file}: ${err.message}`);
    }
  }),
);

console.log(`Figma assets → public/: ${ok} downloaded, ${skipped} already present, ${failed.length} failed`);
if (failed.length) {
  console.error(failed.map((f) => `  ✗ ${f}`).join("\n"));
  console.error("\nIf these returned 403/404, the temporary Figma URLs have expired — re-export from Figma.");
  process.exitCode = 1;
}
