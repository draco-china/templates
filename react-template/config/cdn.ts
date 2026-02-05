import { readFileSync } from "node:fs";
import { URL } from "node:url";
import type { Plugin } from "vite";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf-8")
) as {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

export const cdnPackages = ["@faker-js/faker", "zod"] as const;

const normalizeVersion = (version: string | undefined) =>
  // biome-ignore lint/performance/useTopLevelRegex: this is more readable
  (version ?? "").replace(/^[^0-9]*/, "") || "latest";

const getDependencyVersion = (name: string) =>
  normalizeVersion(
    packageJson.dependencies?.[name] ?? packageJson.devDependencies?.[name]
  );

export const cdnUrl = (name: string, subpath = "") => {
  const base = process.env.CDN_BASE_URL ?? "https://cdn.jsdmirror.com/npm";
  const suffix = subpath ? subpath : "";
  return `${base}/${name}@${getDependencyVersion(name)}${suffix}/+esm`;
};

const createImportMap = () => ({
  imports: Object.fromEntries(cdnPackages.map((pkg) => [pkg, cdnUrl(pkg)])),
});

const resolveCdn = (id: string) => {
  for (const pkg of cdnPackages) {
