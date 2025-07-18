import { defineConfig } from "@eslint/config-helpers";
import * as astroESLintParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import * as typescriptESLintParserForExtraFiles from "typescript-eslint-parser-for-extra-files";

import { __dirname } from "../lib/dir";
import { astroFiles, tsFiles } from "../utils/files";
import { jsConfig } from "./js";
import { stylisticConfig } from "./stylistic";
import { tsConfig } from "./typescript";

export const astroConfig = defineConfig(
  {
    files: [tsFiles],
    languageOptions: {
      // @ts-expect-error type mismatch, but works
      parser: typescriptESLintParserForExtraFiles,
      parserOptions: {
        project: true,
        projectService: false,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    extends: [
      ...jsConfig,
      ...stylisticConfig,
      ...tsConfig,
      ...astroPlugin.configs.recommended,
      ...astroPlugin.configs["jsx-a11y-strict"],
    ],
    files: [astroFiles],
    languageOptions: {
      parser: astroESLintParser,
      parserOptions: {
        parser: typescriptESLintParserForExtraFiles,
        project: true,
        projectService: false,
        tsconfigRootDir: __dirname,
      },
    },
    name: "@virtual-live-lab/eslint-config/astro",
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
      "astro/sort-attributes": "error",
    },
  },
);
