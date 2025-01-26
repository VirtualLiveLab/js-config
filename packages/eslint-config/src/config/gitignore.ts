import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { ConfigWithExtends } from "typescript-eslint";

import gitignore from "eslint-config-flat-gitignore";

import type { ToGlobalConfig, WithOmakase } from "../utils/types";

type ESLintGitignoreConfigBase = FlatGitignoreOptions;

export type ESLintGitignoreConfig = ToGlobalConfig<ESLintGitignoreConfigBase>;

export const gitignoreConfig = (
  config: WithOmakase<ESLintGitignoreConfigBase>,
): ConfigWithExtends => {
  const configOptions: FlatGitignoreOptions =
    typeof config === "object"
      ? config
      : {
          strict: false,
        };

  return gitignore(configOptions);
};
