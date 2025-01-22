import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

import createConfig from "../src";

describe("Test stylelint preset with snapshot", () => {
  describe("normal preset", () => {
    it("should match snapshot", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: createConfig(),
      });

      expect(config).toMatchSnapshot();
    });
  });

  describe("scss preset", () => {
    it("should match snapshot with css", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: createConfig({ sass: true }),
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with scss", async () => {
      const config = await stylelint.resolveConfig("index.scss", {
        config: createConfig({ sass: true }),
      });

      expect(config).toMatchSnapshot();
    });
  });

  describe("astro preset", () => {
    it("should match snapshot with css", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: createConfig({ astro: true }),
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with scss", async () => {
      const config = await stylelint.resolveConfig("index.scss", {
        config: createConfig({ astro: true, sass: true }),
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with astro", async () => {
      const config = await stylelint.resolveConfig("index.astro", {
        config: createConfig({ astro: true }),
      });

      expect(config).toMatchSnapshot();
    });
  });
});
