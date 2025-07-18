import type { Linter } from "eslint";

import js from "@eslint/js";

import { jsFiles } from "../utils/files";

export const jsConfig: Linter.Config[] = [
  {
    files: [jsFiles],
    ...js.configs.recommended,
  },
];
