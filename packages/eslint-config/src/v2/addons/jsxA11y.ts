import type { Linter } from "eslint";

import { defineConfig } from "@eslint/config-helpers";
// @ts-expect-error - eslint-plugin-jsx-a11y does not have types
import jsx from "eslint-plugin-jsx-a11y";

import { jsxFiles } from "../utils/files";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  extends: [jsx.flatConfigs.recommended as Linter.Config[]],
  files: [jsxFiles],
  name: "@virtual-live-lab/eslint-config/jsx-a11y",
});
