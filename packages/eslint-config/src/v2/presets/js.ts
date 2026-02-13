import { defineConfig } from "@eslint/config-helpers";

import { baseConfig } from "../base/base";
import { jsConfig } from "../base/js";
import { stylisticConfig } from "../base/stylistic";

const js = defineConfig(...baseConfig, ...jsConfig, ...stylisticConfig);

export default js;
