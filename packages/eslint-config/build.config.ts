import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  entries: [
    "./src/index.ts",
    "./src/addons/jsxA11y.ts",
    "./src/addons/tailwind.ts",
    "./src/presets/astro.ts",
    "./src/presets/js.ts",
    "./src/presets/react.ts",
    "./src/presets/ts.ts",
  ],
  outDir: "./dist",
  declaration: true,
});
