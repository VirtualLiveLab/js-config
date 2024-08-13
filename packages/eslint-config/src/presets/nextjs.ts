import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { nextJsConfig } from "../base/nextjs";
import ts from "./ts";

const react = tseslint.config(
  ...ts,
  ...nextJsConfig,
) satisfies FlatConfig.ConfigArray;

export default react;
