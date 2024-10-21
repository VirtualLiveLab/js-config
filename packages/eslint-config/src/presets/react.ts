import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import jsxA11y from "../addons/jsxA11y";
import { reactConfig } from "../base/react";
import ts from "./ts";

const react = tseslint.config(
  ...ts,
  ...reactConfig,
  ...jsxA11y,
) satisfies FlatConfig.ConfigArray;

export default react;
