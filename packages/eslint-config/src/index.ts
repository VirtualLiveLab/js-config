import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { ConfigWithExtends } from "typescript-eslint";

import { isPackageExists } from "local-pkg";
import tseslint from "typescript-eslint";

import type { ESLintGitignoreConfig } from "./config/gitignore";

import { gitignoreConfig } from "./config/gitignore";
import {
  type ESLintJavaScriptConfig,
  javascriptConfig,
} from "./config/javascript";
import {
  type ESLintTypeScriptConfig,
  typescriptConfig,
} from "./config/typescript";
export { compat } from "./lib/compat";

export interface ESLintOptions {
  /**
   * Enable gitignore rules.
   *
   * @default true
   */
  gitignore?: ESLintGitignoreConfig;

  /**
   * Enable the JavaScript linting rules.
   *
   * @default true
   */
  javascript?: ESLintJavaScriptConfig;

  /**
   * Enable the TypeScript linting rules.
   * It will be enabled automatically if the project has `typescript` in `node_modules`.
   */
  typescript?: ESLintTypeScriptConfig;
}

export const createESLint = (
  options: Partial<ESLintOptions> = {},
  ...userConfigs: ConfigWithExtends[]
) => {
  const {
    gitignore: gitignoreOptions = true,
    javascript: javascriptOptions = true,
    typescript: typescriptOptions = isPackageExists("typescript"),
  } = options;

  const configs: FlatConfig.ConfigArray = [];

  if (gitignoreOptions !== false) {
    configs.push(gitignoreConfig(gitignoreOptions));
  }
  if (javascriptOptions !== false) {
    configs.push(javascriptConfig(javascriptOptions));
  }
  if (typescriptOptions !== false) {
    configs.push(...typescriptConfig(typescriptOptions));
  }

  return tseslint.config(...configs, ...userConfigs);
};
