import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["./src/index.ts", "./src/astro.ts"],
  format: "esm",
  minify: "dce-only",
  nodeProtocol: true,
  outDir: "dist",
  publint: true,
  unused: true,
});
