import type { TSESLint } from "@typescript-eslint/utils";

import tseslint from "typescript-eslint";

import { nextJsConfig } from "../base/nextjs";
import ts from "./ts";

const react: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ...ts,
  ...nextJsConfig,
);

export default react;
