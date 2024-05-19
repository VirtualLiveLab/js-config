import type { Linter } from "eslint";

import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";

const jsConfig: Linter.FlatConfig[] = [gitignore(), js.configs.recommended];

export { jsConfig };
