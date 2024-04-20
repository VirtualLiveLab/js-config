import type { Config } from "stylelint"

const baseConfig: Config = {
  ignoreFiles: ["**/node_modules/**"],
  plugins: [
    "@double-great/stylelint-a11y",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-value-no-unknown-custom-properties",
  ],
  rules: {
    "a11y/font-size-is-readable": true,
    "a11y/no-obsolete-attribute": true,
    "a11y/no-obsolete-element": true,
    "a11y/no-outline-none": true,
    "a11y/selector-pseudo-class-focus": true,
    "color-named": "never",
    "csstools/value-no-unknown-custom-properties": true,
    "plugin/declaration-block-no-ignored-properties": true,
  },
}

export { baseConfig }
