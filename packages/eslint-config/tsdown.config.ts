import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    "./src/index.ts",
    "./src/v2/addons/**/*.ts",
    "./src/v2/presets/**/*.ts",
  ],
  fixedExtension: true,
  format: "esm",
  minify: "dce-only",
  nodeProtocol: true,
  outDir: "dist",
  publint: true,
  unused: true,
});
