import type { Config } from "stylelint";

import { baseConfig } from "./bases/base";
import { cssExtend } from "./bases/extend";

const { rules: baseRules, ...base } = baseConfig;

const css: Config = {
  ...base,
  extends: cssExtend,
  rules: {
    ...baseRules,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
};

export default css;
