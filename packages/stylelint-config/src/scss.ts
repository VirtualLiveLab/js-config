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
  },
};

export default scss;
