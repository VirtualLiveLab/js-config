import * as prettier from "prettier";
import { describe, expect, it } from "vitest";

describe("Test Prettier config with snapshot", () => {
  describe("normal preset", () => {
    it("matches snapshot", async () => {
      const options = await prettier.resolveConfig("index.ts", {
        config: `${import.meta.dirname}/../dist/index.js`,
      });

      expect(options).toMatchSnapshot();
    });
  });

  describe("astro preset", () => {
    it("matches snapshot with normal file", async () => {
      const options = await prettier.resolveConfig("index.ts", {
        config: `${import.meta.dirname}/../dist/astro.js`,
      });

      expect(options).toMatchSnapshot();
    });

    it("matches snapshot with astro file", async () => {
      const options = await prettier.resolveConfig("index.astro", {
        config: `${import.meta.dirname}/../dist/astro.js`,
      });

      expect(options).toMatchSnapshot();
    });
  });
});
