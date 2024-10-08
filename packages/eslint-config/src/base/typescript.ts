import stylisticTs from "@stylistic/eslint-plugin-ts";
import gitignore from "eslint-config-flat-gitignore";
import tseslint from "typescript-eslint";

import { __dirname } from "../lib/dir";

const tsConfig = tseslint.config({
  extends: [
    gitignore(),
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
        defaultProject: `${__dirname}/tsconfig.json`,
      },
      tsconfigRootDir: __dirname,
    },
  },
  plugins: {
    "@stylistic/ts": stylisticTs,
  },
  rules: {
    // SEE: https://zenn.dev/cybozu_frontend/articles/ts-eslint-v6-guide
    // v6 で recommended から削除されたものを有効化
    "@stylistic/ts/no-extra-semi": "error",
    // #175
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": ["error"],
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    // v6 で recommended に追加されたルールを無効化
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-import-type-side-effects": "error",
    // this is for react-hook-form
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    // v6 で strict に移動したルールを有効化
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    // #97
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowNumber: false,
      },
    ],
  },
});

export { tsConfig };
