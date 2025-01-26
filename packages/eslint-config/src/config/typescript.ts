import type {
  FlatConfig,
  SharedConfig,
} from "@typescript-eslint/utils/ts-eslint";
import type { ConfigArray, ConfigWithExtends } from "typescript-eslint";

import stylisticTs from "@stylistic/eslint-plugin-ts";
import tseslint from "typescript-eslint";

import type { ToGlobalConfig, WithOmakase } from "../utils/types";

import { __dirname } from "../lib/dir";
import { tsFiles } from "../utils/files";

type ESLintTypeScriptConfigBase = {
  parserOptions: FlatConfig.ParserOptions;
  strictness: "recommended" | "strict";
  stylistic: boolean;
  /**
   * Whether or not to use type-aware rules.
   */
  useTypeAware: boolean;
};

export type ESLintTypeScriptConfig = ToGlobalConfig<ESLintTypeScriptConfigBase>;

export const typescriptConfig = (
  config: WithOmakase<ESLintTypeScriptConfigBase>,
): ConfigWithExtends[] => {
  const resolvedConfig =
    config === true
      ? ({
          parserOptions: {},
          strictness: "strict",
          stylistic: false,
          useTypeAware: true,
        } satisfies ESLintTypeScriptConfigBase)
      : config;

  const tseslintPresets = getTSESLintPresets(resolvedConfig);

  const configs: ConfigWithExtends[] = [];

  configs.push(
    {
      name: "@virtual-live-lab/eslint-config/typescript/setup",
      plugins: {
        "@stylistic/ts": stylisticTs,
        "@typescript-eslint": tseslint.plugin,
      },
    },
    {
      extends: tseslintPresets,
      files: [tsFiles],
      languageOptions: {
        parserOptions: {
          sourceType: "module",
          ...(resolvedConfig.useTypeAware
            ? {
                projectService: {
                  allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
                  defaultProject: `${__dirname}/tsconfig.json`,
                },
                tsconfigRootDir: __dirname,
              }
            : {}),
          ...resolvedConfig.parserOptions,
        },
      },
      name: "@virtual-live-lab/eslint-config/typescript",
      rules: {
        // disable conflicting rules with ESLint's recommended config
        // @ts-expect-error it always exists
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-member-access
        ...(tseslint.plugin.configs["eslint-recommended"].overrides![0]
          .rules! as SharedConfig.RulesRecord),

        // Add custom rules
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
    },
  );

  return configs;
};

const getTSESLintPresets = ({
  strictness,
  stylistic,
  useTypeAware,
}: ESLintTypeScriptConfigBase): ConfigArray[] => {
  const configs: ConfigArray[] = [];

  switch (strictness) {
    case "recommended":
      if (useTypeAware) {
        configs.push(tseslint.configs.recommendedTypeChecked);
      } else {
        configs.push(tseslint.configs.recommended);
      }
      break;
    case "strict":
      if (useTypeAware) {
        configs.push(tseslint.configs.strictTypeChecked);
      } else {
        configs.push(tseslint.configs.strict);
      }
      break;
  }

  if (stylistic) {
    if (useTypeAware) {
      configs.push(tseslint.configs.stylisticTypeChecked);
    } else {
      configs.push(tseslint.configs.stylistic);
    }
  }

  return configs;
};
