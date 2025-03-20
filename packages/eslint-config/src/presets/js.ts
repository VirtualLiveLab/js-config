import tseslint from "typescript-eslint";

import { baseConfig } from "../base/base";
import { jsConfig } from "../base/js";
import { stylisticConfig } from "../base/stylistic";

const js = tseslint.config(...baseConfig, ...jsConfig, ...stylisticConfig);

export default js;
