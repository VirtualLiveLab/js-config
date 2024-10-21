import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import eslintPluginAstro from "eslint-plugin-astro";

const astroConfig = [
  // eslint-plugin-astroの型定義の都合上anyと判定されてしまうので、asを使って型を指定する
  ...eslintPluginAstro.configs["flat/recommended"],
  // flat/jsx-a11y-strictは、eslint-plugin-jsx-a11yの設定をベースにしているので、
  // インストールされていないとエラーになるが、このパッケージはdependenciesに含まれているので問題ない
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
] satisfies FlatConfig.ConfigArray;

export { astroConfig };
