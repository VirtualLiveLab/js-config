import type { Linter } from "eslint"

import { compat } from "../lib/compat"
import { reactConfig } from "./react"

const nextJsConfig: Linter.FlatConfig[] = [
  ...reactConfig,
  ...compat.extends("next/core-web-vitals"),
]

export { nextJsConfig }
