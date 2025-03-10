import type { Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  endOfLine: "lf",
  jsxSingleQuote: false,
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      options: {
        trailingComma: "none",
      },
    },
  ],
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
};

export default config;
