import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import prettierConfig from "eslint-config-prettier";
import perfectionistPlugin from "eslint-plugin-perfectionist";

const stylisticConfig = [
  prettierConfig,
  perfectionistPlugin.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-object-types": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
          type: "natural",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
          type: "natural",
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          order: "asc",
          type: "natural",
        },
      ],
    },
  },
] satisfies FlatConfig.ConfigArray;

export { stylisticConfig };
