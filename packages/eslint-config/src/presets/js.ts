import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { baseConfig } from "../base/base";
import { jsConfig } from "../base/js";
import { stylisticConfig } from "../base/stylistic";

const js = [
  ...baseConfig,
  ...jsConfig,
  ...stylisticConfig,
] satisfies FlatConfig.ConfigArray;

export default js;
