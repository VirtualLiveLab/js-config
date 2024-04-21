import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { cssExtend } from "./extend"

const { rules: baseRules, ...base } = baseConfig

const cssConfig: Config = {
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
}

export default cssConfig
