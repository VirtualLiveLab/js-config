import type { Linter } from "eslint"

import eslintPluginAstro from "eslint-plugin-astro"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const astroConfig: Linter.FlatConfig[] = [
  ...eslintPluginAstro.configs["flat/recommended"],
  // flat/jsx-a11y-strictは、eslint-plugin-jsx-a11yの設定をベースにしているので、
  // インストールされていないとエラーになるが、このパッケージはdependenciesに含まれているので問題ない
  // @ts-expect-error no types
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
]

export { astroConfig }
