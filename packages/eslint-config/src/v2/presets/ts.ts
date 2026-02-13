import { defineConfig } from "@eslint/config-helpers";

import { tsConfig } from "../base/typescript";
import js from "./js";

const ts = defineConfig(...js, ...tsConfig());

export default ts;
