import { Linter } from "eslint";

import gitignore from "eslint-config-flat-gitignore";

export const baseConfig: Linter.Config[] = [gitignore()];
