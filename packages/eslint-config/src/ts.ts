import type { TSESLint } from "@typescript-eslint/utils"

import tseslint from "typescript-eslint"

import { tsConfig } from "./bases/typescript"
import js from "./js"

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const ts: TSESLint.FlatConfig.ConfigArray = tseslint.config(...js, ...tsConfig)

export default ts
