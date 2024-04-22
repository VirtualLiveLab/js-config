import type { TSESLint } from "@typescript-eslint/utils"

import tseslint from "typescript-eslint"

import { reactConfig } from "../base/react"
import ts from "./ts"

const react: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ...ts,
  ...reactConfig,
)

export default react
