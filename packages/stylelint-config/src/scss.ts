import type { Config } from "stylelint";

import { baseConfig } from "./bases/base";
import { scssExtend } from "./bases/extend";

const { rules: baseRules, ...base } = baseConfig;

const scss: Config = {
  ...base,
  extends: scssExtend,
  rules: {
    ...baseRules,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
    // see: https://github.com/VirtualLiveLab/js-config/issues/178
    "@stylistic/block-opening-brace-space-before": null,
    "@stylistic/color-hex-case": null,
    "@stylistic/declaration-bang-space-after": null,
    "@stylistic/declaration-bang-space-before": null,
    "@stylistic/declaration-block-semicolon-newline-after": null,
    "@stylistic/declaration-block-semicolon-space-before": null,
    "@stylistic/declaration-block-trailing-semicolon": null,
    "@stylistic/declaration-colon-space-after": null,
    "@stylistic/declaration-colon-space-before": null,
    "@stylistic/function-comma-space-after": null,
    "@stylistic/function-parentheses-space-inside": null,
    "@stylistic/indentation": null,
    "@stylistic/media-feature-parentheses-space-inside": null,
    "@stylistic/no-missing-end-of-source-newline": null,
    "@stylistic/number-leading-zero": null,
    "@stylistic/number-no-trailing-zeros": null,
    "@stylistic/selector-list-comma-newline-after": null,
    "@stylistic/string-quotes": null,
  },
};

export default scss;
