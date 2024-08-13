import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { fixupConfigRules } from "@eslint/compat";

import { compat } from "../lib/compat";

const jsxA11y = fixupConfigRules(
  compat.extends("plugin:jsx-a11y/strict"),
) satisfies FlatConfig.ConfigArray;

export default jsxA11y;
