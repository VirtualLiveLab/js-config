import { FlatCompat } from "@eslint/eslintrc"

import { __dirname } from "./dir"

const compat = new FlatCompat({ baseDirectory: __dirname })

export { compat }
