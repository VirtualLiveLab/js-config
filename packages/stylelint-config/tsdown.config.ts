import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["./src/index.ts", "./src/astro.ts"],
  format: "esm",
  minify: "dce-only",
  fixedExtension: true,
  nodeProtocol: true,
  outDir: "dist",
  publint: true,
  unused: {
    // Required by stylelint-config-html
    ignore: ["postcss-html"],
  },
});
