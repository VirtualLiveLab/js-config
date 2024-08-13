import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { astroConfig } from "../base/astro";
import { reactConfig } from "../base/react";
import ts from "./ts";

const astro = tseslint.config(
  ...ts,
  ...astroConfig,
  ...reactConfig,
) satisfies FlatConfig.ConfigArray;

export default astro;
