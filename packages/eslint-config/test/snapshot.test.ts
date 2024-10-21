import { loadESLint } from "eslint";
import { describe, expect, it } from "vitest";

import astro from "../src/presets/astro";
import js from "../src/presets/js";
import react from "../src/presets/react";
import ts from "../src/presets/ts";

describe("Test ESLint config with snapshot", async () => {
  const DefaultESLint = await loadESLint({
    useFlatConfig: true,
  });

  describe("js preset", () => {
    it("matches snapshot", async () => {
      const eslint = new DefaultESLint({
        // @ts-expect-error typescript-eslint config type is not compatible with eslint config type
        baseConfig: js,
        cwd: import.meta.dirname,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const config = await eslint.calculateConfigForFile("index.js");

      expect(config).toMatchSnapshot();
    });
  });

  describe("ts preset", () => {
    it("matches snapshot", async () => {
      const eslint = new DefaultESLint({
        // @ts-expect-error typescript-eslint config type is not compatible with eslint config type
        baseConfig: ts,
        cwd: import.meta.dirname,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const config = await eslint.calculateConfigForFile("index.ts");

      expect(config).toMatchSnapshot();
    });
  });

  describe("react preset", () => {
    it("matches snapshot", async () => {
      const eslint = new DefaultESLint({
        // @ts-expect-error typescript-eslint config type is not compatible with eslint config type
        baseConfig: react,
        cwd: import.meta.dirname,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const config = await eslint.calculateConfigForFile("index.tsx");

      expect(config).toMatchSnapshot();
    });
  });

  describe("astro preset", () => {
    it("matches snapshot", async () => {
      const eslint = new DefaultESLint({
        // @ts-expect-error typescript-eslint config type is not compatible with eslint config type
        baseConfig: astro,
        cwd: import.meta.dirname,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const config = await eslint.calculateConfigForFile("index.astro");

      expect(config).toMatchSnapshot();
    });
  });
});
