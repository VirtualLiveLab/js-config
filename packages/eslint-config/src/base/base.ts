import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import gitignore from "eslint-config-flat-gitignore";

const baseConfig: FlatConfig.ConfigArray = [gitignore()];

export { baseConfig };
