import type { Config } from "stylelint"

import { baseConfig } from "./bases/base"
import { astroExtend } from "./bases/extend"

const { rules: baseRules, ...base } = baseConfig

const astro: Config = {
  ...base,
  extends: astroExtend,
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

export default astro
