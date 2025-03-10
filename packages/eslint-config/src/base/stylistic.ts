import prettierConfig from "eslint-config-prettier/flat";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

import { jsFiles, tsFiles } from "../utils/files";

const stylisticConfig = tseslint.config({
  extends: [prettierConfig, perfectionistPlugin.configs["recommended-natural"]],
  files: [tsFiles, jsFiles],
  name: "@virtual-live-lab/eslint-config/stylistic",
  rules: {
    "perfectionist/sort-modules": "off",
    "perfectionist/sort-object-types": [
      "error",
      {
        ignoreCase: true,
        order: "asc",
        partitionByNewLine: true,
        type: "natural",
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        ignoreCase: true,
        order: "asc",
        partitionByNewLine: true,
        type: "natural",
      },
    ],
    "perfectionist/sort-union-types": [
      "error",
      {
        groups: [
          "conditional",
          "function",
          "import",
          "intersection",
          "keyword",
          "literal",
          "named",
          "object",
          "operator",
          "tuple",
          "union",
          "nullish",
        ],
        order: "asc",
        type: "natural",
      },
    ],
  },
});

export { stylisticConfig };
