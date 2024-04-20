import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { cssExtend } from "./extend"

const cssConfig: Config = {
  ...baseConfig,
  extends: cssExtend,
}

export default cssConfig
