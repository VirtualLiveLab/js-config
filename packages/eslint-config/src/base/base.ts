import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import gitignore from "eslint-config-flat-gitignore";

const baseConfig = [gitignore()] satisfies FlatConfig.ConfigArray;

export { baseConfig };
