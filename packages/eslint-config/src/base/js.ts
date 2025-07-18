import { defineConfig } from "@eslint/config-helpers";
import js from "@eslint/js";

import { prepareForExtend } from "../utils/eslint";
import { jsFiles } from "../utils/files";

export const jsConfig = defineConfig({
  extends: prepareForExtend(js.configs.recommended),
  files: [jsFiles],
  name: "@virtual-live-lab/eslint-config/javascript",
});
