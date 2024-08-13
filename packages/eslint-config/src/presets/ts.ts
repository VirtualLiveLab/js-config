import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { tsConfig } from "../base/typescript";
import js from "./js";

const ts = tseslint.config(...js, ...tsConfig) satisfies FlatConfig.ConfigArray;

export default ts;
