import type { Linter } from "eslint";

import { defineConfig } from "@eslint/config-helpers";
// @ts-expect-error - eslint-plugin-tailwindcss does not have types
import tailwindESLint from "eslint-plugin-tailwindcss";

import { jsxFiles } from "../utils/files";

const tailwind = defineConfig({
  extends: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...(tailwindESLint.configs["flat/recommended"] as Linter.Config[]),
  ],
  files: [jsxFiles],
  name: "@virtual-live-lab/eslint-config/tailwind",
  /*
   * tailwind-variantsを併用する際に、`ignoredKeys`に
   * `responsiveVariants`が追加されていないのでWarningが出る
   * そのため、こちら側で`ignoredKeys`に`responsiveVariants`を追加している
   */
  rules: {
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        ignoredKeys: [
          "compoundVariants",
          "defaultVariants",
          "responsiveVariants",
        ],
      },
    ],
  },
});

export default tailwind;
