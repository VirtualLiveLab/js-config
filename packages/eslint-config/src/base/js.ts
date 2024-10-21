import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import js from "@eslint/js";

import { jsFiles } from "../utils/files";

const jsConfig = [
  {
    files: [jsFiles],
    ...js.configs.recommended,
  },
] satisfies FlatConfig.ConfigArray;

export { jsConfig };
