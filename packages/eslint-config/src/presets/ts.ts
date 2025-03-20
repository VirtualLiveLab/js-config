import tseslint from "typescript-eslint";

import { tsConfig } from "../base/typescript";
import js from "./js";

const ts = tseslint.config(...js, ...tsConfig);

export default ts;
