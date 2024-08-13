import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";

const jsConfig = [
  gitignore(),
  js.configs.recommended,
] satisfies FlatConfig.ConfigArray;

export { jsConfig };
