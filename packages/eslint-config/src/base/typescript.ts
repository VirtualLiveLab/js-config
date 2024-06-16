import tseslint from "typescript-eslint";

const tsConfig = tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      // NOTICE: Remove EXPERIMENTAL_ prefix when typescript-eslint v7 is released
      EXPERIMENTAL_useProjectService: true,
    },
  },
  rules: {
    // SEE: https://zenn.dev/cybozu_frontend/articles/ts-eslint-v6-guide
    // stylistic を有効にしたため v5 の recommended にないルールを無効化
    "@typescript-eslint/array-type": "off",
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
    // v6 で recommended から削除されたものを有効化
    "@typescript-eslint/no-extra-semi": "error",
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
