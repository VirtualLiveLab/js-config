import type { Config } from "stylelint"

import { baseConfig } from "./base"
import { astroExtend } from "./extend"

const astroConfig: Config = {
  ...baseConfig,
  extends: astroExtend,
}

export default astroConfig
