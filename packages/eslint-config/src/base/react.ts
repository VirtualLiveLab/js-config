import { defineConfig } from "@eslint/config-helpers";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { compat } from "../lib/compat";
import { prepareForExtend } from "../utils/eslint";
import { jsxFiles } from "../utils/files";

const reactConfig = defineConfig({
  extends: prepareForExtend(
    // @ts-expect-error type mismatch
    react.configs.flat["recommended"],
    react.configs.flat["jsx-runtime"],
    ...compat.extends("plugin:react-hooks/recommended"),
  ),
  files: [jsxFiles],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  name: "@virtual-live-lab/eslint-config/react",
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    // TODO: 引数から option を受け取る api に変わったら, allowexportnames を設定できるようにする
    // ref: https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#allowexportnames-v044
    "react-refresh/only-export-components": "warn",
    "react/button-has-type": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});

export { reactConfig };
