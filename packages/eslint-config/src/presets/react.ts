import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { reactConfig } from "../base/react";
import ts from "./ts";

const react = tseslint.config(
  ...ts,
  ...reactConfig,
) satisfies FlatConfig.ConfigArray;

export default react;
