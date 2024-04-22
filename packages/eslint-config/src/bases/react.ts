import type { Linter } from "eslint"

//@ts-expect-error no types
import react from "eslint-plugin-react"
//@ts-expect-error no types
import reactRecommended from "eslint-plugin-react/configs/recommended"
import globals from "globals"

import { compat } from "../lib/compat"
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const reactConfig: Linter.FlatConfig[] = [
  ...compat.extends("plugin:react-hooks/recommended"),
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
    ...reactRecommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // no types
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      react,
    },
    rules: {
      "react/jsx-boolean-value": "warn",
      "react/jsx-curly-brace-presence": "error",
    },
  },
]

export { reactConfig }
