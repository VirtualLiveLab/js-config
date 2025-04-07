import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  entries: ["./src/index.ts", "./src/astro.ts"],
  outDir: "./dist",
  declaration: true,
});
