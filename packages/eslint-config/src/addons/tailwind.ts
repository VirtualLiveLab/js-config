import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

// @ts-expect-error - eslint-plugin-tailwindcss does not have types
import tailwindESLint from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

const tailwind = tseslint.config({
  extends: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...(tailwindESLint.configs["flat/recommended"] as FlatConfig.ConfigArray),
  ],
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
