import type { Linter } from "eslint"

import eslintPluginAstro from "eslint-plugin-astro"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const astroConfig: Linter.FlatConfig[] = [
  ...eslintPluginAstro.configs["flat/recommended"],
  // @ts-expect-error no types
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
]

export { astroConfig }
