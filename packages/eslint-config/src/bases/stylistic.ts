import type { Linter } from "eslint"

import prettierConfig from "eslint-config-prettier"
// @ts-expect-error no types
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural"

// eslint-plugin-perfectionist has no types
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const stylisticConfig: Linter.FlatConfig[] = [
  prettierConfig,
  perfectionistNatural,
  {
    rules: {
      "perfectionist/sort-union-types": [
        "error",
        {
          "nullable-last": true,
          "order": "asc",
          "type": "natural",
        },
      ],
    },
  },
]

export { stylisticConfig }
