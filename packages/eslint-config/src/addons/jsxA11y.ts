import type { Linter } from "eslint";

// @ts-expect-error - eslint-plugin-jsx-a11y does not have types
import jsx from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

import { jsxFiles } from "../utils/files";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export default tseslint.config(jsx.flatConfigs.recommended as Linter.Config[], {
  files: [jsxFiles],
});
