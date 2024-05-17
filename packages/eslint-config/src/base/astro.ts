import type { Linter } from "eslint";

import eslintPluginAstro from "eslint-plugin-astro";

const astroConfig: Linter.FlatConfig[] = [
  ...eslintPluginAstro.configs["flat/recommended"],
  // flat/jsx-a11y-strictは、eslint-plugin-jsx-a11yの設定をベースにしているので、
  // インストールされていないとエラーになるが、このパッケージはdependenciesに含まれているので問題ない
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
];

export { astroConfig };
