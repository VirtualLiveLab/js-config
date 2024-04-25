import { FlatCompat } from "@eslint/eslintrc"

import { __dirname } from "./dir"

// 最も近いpackage.jsonを探索して、そのディレクトリをbaseDirectoryとして設定
const compat = new FlatCompat({ baseDirectory: __dirname })

export { compat }
