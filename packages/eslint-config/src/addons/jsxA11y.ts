import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

// @ts-expect-error - eslint-plugin-jsx-a11y does not have types
import jsx from "eslint-plugin-jsx-a11y";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export default [jsx.flatConfigs.recommended as FlatConfig.Config];
