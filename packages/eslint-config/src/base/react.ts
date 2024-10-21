import react from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

import { compat } from "../lib/compat";
import { jsxFiles } from "../utils/files";

const reactConfig = tseslint.config({
  extends: [
    // @ts-expect-error 型が合わない
    react.configs.flat.recommended,
    // @ts-expect-error 型が合わない
    react.configs.flat["jsx-runtime"],
    ...compat.extends("plugin:react-hooks/recommended"),
  ],
  files: [jsxFiles],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  name: "@virtual-live-lab/eslint-config/react",
  rules: {
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-target-blank": "warn",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});

export { reactConfig };
