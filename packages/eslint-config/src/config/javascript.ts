import type { ConfigWithExtends } from "typescript-eslint";

import js from "@eslint/js";

import type { ToGlobalConfig, WithOmakase } from "../utils/types";

import { jsFiles } from "../utils/files";

type ESLintJavaScriptConfigBase = "all" | "recommended";

export type ESLintJavaScriptConfig = ToGlobalConfig<ESLintJavaScriptConfigBase>;

export const javascriptConfig = (
  config: WithOmakase<ESLintJavaScriptConfigBase>,
): ConfigWithExtends => {
  const preset =
    config === true
      ? ("recommended" satisfies ESLintJavaScriptConfigBase)
      : config;

  return {
    files: [jsFiles],
    ...js.configs[preset],
  };
};
