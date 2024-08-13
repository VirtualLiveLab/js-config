import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { fixupConfigRules } from "@eslint/compat";

import { compat } from "../lib/compat";

const tailwind = [
  ...fixupConfigRules(compat.extends("plugin:tailwindcss/recommended")),
  ...fixupConfigRules(
    compat.config({
      /*
      tailwind-variantsを併用する際に、`ignoredKeys`に
      `responsiveVariants`が追加されていないのでWarningが出る
      そのため、こちら側で`ignoredKeys`に`responsiveVariants`を追加している
      本家にPRを送るのでMergeされたらいらなくなる
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
    }),
  ),
] satisfies FlatConfig.ConfigArray;

export default tailwind;
