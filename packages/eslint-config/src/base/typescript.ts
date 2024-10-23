import stylisticTs from "@stylistic/eslint-plugin-ts";
import tseslint from "typescript-eslint";

import { __dirname } from "../lib/dir";
import { tsFiles } from "../utils/files";

const tsConfig = tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  files: [tsFiles],
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
        defaultProject: `${__dirname}/tsconfig.json`,
      },
      tsconfigRootDir: __dirname,
    },
  },
  name: "@virtual-live-lab/eslint-config/typescript",
  plugins: {
    "@stylistic/ts": stylisticTs,
  },
  rules: {
    "@stylistic/ts/no-extra-semi": "error",
    "@typescript-eslint/adjacent-overload-signatures": "off",
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
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/no-deprecated": "warn",
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
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/promise-function-async": "error",
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
