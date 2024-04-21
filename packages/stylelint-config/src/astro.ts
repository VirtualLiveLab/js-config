import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { astroExtend } from "./extend"

const { rules: baseRules, ...base } = baseConfig

const astroConfig: Config = {
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

export default astroConfig
