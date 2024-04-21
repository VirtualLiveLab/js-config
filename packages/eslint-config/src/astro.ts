import type { TSESLint } from "@typescript-eslint/utils"

import tseslint from "typescript-eslint"

import { astroConfig } from "./bases/astro"
import { reactConfig } from "./bases/react"
import { ts } from "./ts"

const astro: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ...ts,
  ...astroConfig,
  ...reactConfig,
)

export { astro }
