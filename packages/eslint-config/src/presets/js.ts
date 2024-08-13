import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { jsConfig } from "../base/js";
import { stylisticConfig } from "../base/stylistic";

const js = [...jsConfig, ...stylisticConfig] satisfies FlatConfig.ConfigArray;

export default js;
