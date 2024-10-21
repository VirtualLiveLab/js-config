import prettierConfig from "eslint-config-prettier";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

import { jsFiles, tsFiles } from "../utils/files";

const stylisticConfig = tseslint.config({
  extends: [prettierConfig, perfectionistPlugin.configs["recommended-natural"]],
  files: [tsFiles, jsFiles],
  name: "@virtual-live-lab/eslint-config/stylistic",
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
});

export { stylisticConfig };
