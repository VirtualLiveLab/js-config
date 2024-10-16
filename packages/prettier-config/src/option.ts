import type { Options } from "prettier";

export const defaultOptions = {
  arrowParens: "always",
  endOfLine: "lf",
  jsxSingleQuote: false,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
} as const satisfies Options;
