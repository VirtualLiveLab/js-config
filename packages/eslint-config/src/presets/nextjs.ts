import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { nextJsConfig } from "../base/nextjs";
import react from "./react";

const nextjs = tseslint.config(
  ...react,
  ...nextJsConfig,
) satisfies FlatConfig.ConfigArray;

export default nextjs;
