import react from "eslint-plugin-react";
// @ts-expect-error eslint-plugin-react-refresh is not typed
import reactRefresh from "eslint-plugin-react-refresh";
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
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    "react-refresh": reactRefresh,
  },
  rules: {
    "react/button-has-type": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    // TODO: 引数から option を受け取る api に変わったら, allowexportnames を設定できるようにする
    // ref: https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#allowexportnames-v044
    "react-refresh/only-export-components": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});

export { reactConfig };
