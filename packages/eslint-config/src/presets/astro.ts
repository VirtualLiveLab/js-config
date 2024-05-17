import type { TSESLint } from "@typescript-eslint/utils";

import tseslint from "typescript-eslint";

import { astroConfig } from "../base/astro";
import { reactConfig } from "../base/react";
import ts from "./ts";

const astro: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ...ts,
  ...astroConfig,
  ...reactConfig,
);

export default astro;
