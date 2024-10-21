import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import tseslint from "typescript-eslint";

import { astroConfig } from "../base/astro";
import react from "./react";

const astro = tseslint.config(
  ...react,
  ...astroConfig,
) satisfies FlatConfig.ConfigArray;

export default astro;
