import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

import createConfig from "../src";

describe("stylelint-config", () => {
  it("has compatibility with css-modules-kit", async () => {
    const config = await stylelint.resolveConfig("index.module.css", {
      config: createConfig({ cssModulesKit: true }),
    });

    const selectorPattern = new RegExp(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (config?.rules?.["selector-class-pattern"]?.[0] as string) || "",
    );

    expect(selectorPattern.test("myClassName")).toBeTruthy();

    expect(selectorPattern.test("MyClassName")).toBeFalsy();
    expect(selectorPattern.test("my-class-name")).toBeFalsy();
  });
});
