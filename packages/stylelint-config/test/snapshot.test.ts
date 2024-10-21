import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

import css from "../src";

describe("Test stylelint preset with snapshot", () => {
  describe("normal preset", () => {
    it("should match snapshot", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });
  });

  describe("scss preset", () => {
    it("should match snapshot with css", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with scss", async () => {
      const config = await stylelint.resolveConfig("index.scss", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });
  });

  describe("astro preset", () => {
    it("should match snapshot with css", async () => {
      const config = await stylelint.resolveConfig("index.css", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with scss", async () => {
      const config = await stylelint.resolveConfig("index.scss", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with html", async () => {
      const config = await stylelint.resolveConfig("index.html", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });

    it("should match snapshot with astro", async () => {
      const config = await stylelint.resolveConfig("index.astro", {
        config: css,
      });

      expect(config).toMatchSnapshot();
    });
  });
});
