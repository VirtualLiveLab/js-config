import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { scssExtend } from "./extend"

const scssConfig: Config = {
  ...baseConfig,
  extends: scssExtend,
}

export default scssConfig
