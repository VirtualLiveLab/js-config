import type { Config } from "prettier";

import defu from "defu";

import defaultConfig from "./index";

const config: Config = defu(
  {
    overrides: [
      {
        files: "*.astro",
        options: {
          parser: "astro",
        },
      },
    ],
    plugins: ["prettier-plugin-astro"],
  },
  defaultConfig,
);

export default config;
