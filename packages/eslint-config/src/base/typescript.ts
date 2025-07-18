import type { Linter } from "eslint";

import { defineConfig } from "@eslint/config-helpers";
import { defu } from "defu";
import tseslint from "typescript-eslint";
import * as typescriptESLintParserForExtraFiles from "typescript-eslint-parser-for-extra-files";

import { __dirname } from "../lib/dir";
import { prepareForExtend } from "../utils/eslint";
import { tsFiles } from "../utils/files";

type TSConfigParams = {
  extraFiles: boolean;
};

const DEFAULT_PARAMS = {
  extraFiles: false,
} as const satisfies TSConfigParams;

export const tsConfig = (params: Partial<TSConfigParams> = {}) => {
  const resolvedParams = defu(params, DEFAULT_PARAMS);

  return defineConfig({
    extends: prepareForExtend(
      tseslint.configs.recommendedTypeChecked as Linter.Config[],
      tseslint.configs.stylisticTypeChecked as Linter.Config[],
    ),
    files: [tsFiles],
    languageOptions: getLanguageOptions({
      extraFiles: resolvedParams.extraFiles,
    }),
    name: "@virtual-live-lab/eslint-config/typescript",
    rules: {
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
};

const getLanguageOptions = (
  params: Pick<TSConfigParams, "extraFiles">,
): Linter.LanguageOptions => {
  if (params.extraFiles) {
    return {
      // @ts-expect-error type mismatch, but works
      parser: typescriptESLintParserForExtraFiles,
      parserOptions: {
        project: true,
        projectService: false,
        tsconfigRootDir: __dirname,
      },
    };
  }
  return {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
        defaultProject: `${__dirname}/tsconfig.json`,
      },
      tsconfigRootDir: __dirname,
    },
  };
};
