import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const INDEX_PATH = resolve(process.cwd(), "index.html");
const MANIFEST_PATH = resolve(process.cwd(), "public/manifest.json");
const START_MARKER = "<!-- PWA-ICONS:START -->";
const END_MARKER = "<!-- PWA-ICONS:END -->";

const iconLinks = [
  '<link rel="icon" href="/favicon.ico" sizes="48x48">',
  '<link rel="icon" href="/logo.svg" type="image/svg+xml">',
  '<link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png">',
];

const buildBlock = () =>
  [
    `  ${START_MARKER}`,
    ...iconLinks.map((line) => `  ${line}`),
    `  ${END_MARKER}`,
  ].join("\n");

interface Manifest {
  name?: string;
  short_name?: string;
  description?: string;
}

const upsertMetaTag = (
  html: string,
  attr: "name" | "property",
  key: string,
  content: string
) => {
  const pattern = new RegExp(
    `<meta\\s+${attr}=["']${key}["']\\s+content=["'][^"']*["']\\s*/?>`,
    "i"
  );

  if (pattern.test(html)) {
    return html.replace(
      pattern,
      `<meta ${attr}="${key}" content="${content}">`
    );
  }

  const headCloseIndex = html.indexOf("</head>");
  if (headCloseIndex !== -1) {
    return `${html.slice(0, headCloseIndex)}  <meta ${attr}="${key}" content="${content}">\n${html.slice(headCloseIndex)}`;
  }

  return html;
};

const upsertTitle = (html: string, title: string) => {
  // biome-ignore lint/performance/useTopLevelRegex: regex is needed
  const titlePattern = /<title>[^<]*<\/title>/i;
  if (titlePattern.test(html)) {
    return html.replace(titlePattern, `<title>${title}</title>`);
  }

  const headCloseIndex = html.indexOf("</head>");
  if (headCloseIndex !== -1) {
    return `${html.slice(0, headCloseIndex)}  <title>${title}</title>\n${html.slice(headCloseIndex)}`;
  }

  return html;
};

const replaceOrInsertBlock = (html: string) => {
  const block = buildBlock();

  if (html.includes(START_MARKER) && html.includes(END_MARKER)) {
    const before = html.split(START_MARKER)[0];
    const after = html.split(END_MARKER)[1];
    return `${before}${block}${after}`;
  }

  // biome-ignore lint/performance/useTopLevelRegex: regex is needed
  const viewportMatch = html.match(/\s*<meta\s+name="viewport"[^>]*>\s*/);
  if (viewportMatch && viewportMatch.index !== undefined) {
    const insertAt = viewportMatch.index + viewportMatch[0].length;
    return `${html.slice(0, insertAt)}\n${block}${html.slice(insertAt)}`;
  }

  const headIndex = html.indexOf("<head>");
  if (headIndex !== -1) {
    const insertAt = headIndex + "<head>".length;
    return `${html.slice(0, insertAt)}\n${block}${html.slice(insertAt)}`;
  }

  return html;
};

const run = async () => {
  const [html, manifestText] = await Promise.all([
    readFile(INDEX_PATH, "utf8"),
    readFile(MANIFEST_PATH, "utf8"),
  ]);

  const manifest = JSON.parse(manifestText) as Manifest;
  const appName = manifest.name ?? manifest.short_name ?? "App";
  const appDescription =
    manifest.description ?? manifest.short_name ?? manifest.name ?? "App";

  let updated = replaceOrInsertBlock(html);
  updated = upsertTitle(updated, appName);
  updated = upsertMetaTag(updated, "name", "application-name", appName);
  updated = upsertMetaTag(
    updated,
    "name",
    "apple-mobile-web-app-title",
    appName
  );
  updated = upsertMetaTag(updated, "property", "og:title", appName);
  updated = upsertMetaTag(updated, "name", "twitter:title", appName);
  updated = upsertMetaTag(updated, "name", "description", appDescription);
  updated = upsertMetaTag(
    updated,
    "property",
    "og:description",
    appDescription
  );
  updated = upsertMetaTag(
    updated,
    "name",
    "twitter:description",
    appDescription
  );

  if (updated === html) {
    console.log("No changes needed in index.html");
    return;
  }

  await writeFile(INDEX_PATH, updated, "utf8");
  console.log("Updated PWA icon links in index.html");
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
