import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";

import { compat } from "../lib/compat";

const reactConfig = [
  ...fixupConfigRules([
    ...compat.extends(
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
    ),
    ...compat.config({
      globals: {
        ...globals.browser,
      },
      rules: {
        "react/jsx-boolean-value": "warn",
        "react/jsx-curly-brace-presence": "error",
        "react/prop-types": "off",
        "react/jsx-no-target-blank": "warn",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    }),
  ]),
] satisfies FlatConfig.ConfigArray;

export { reactConfig };
