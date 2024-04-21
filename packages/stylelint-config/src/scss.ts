import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { scssExtend } from "./extend"

const { rules: baseRules, ...base } = baseConfig

const scssConfig: Config = {
  ...base,
  extends: scssExtend,
  rules: {
    ...baseRules,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
}

export default scssConfig
