import type { Config } from "prettier";

import defaultConfig from "./index";
import { defaultOptions } from "./option";

const config: Config = {
  ...defaultConfig,
  overrides: [
    {
      files: "*.astro",
      options: {
        ...defaultOptions,
        parser: "astro",
      },
    },
  ],
  plugins: ["prettier-plugin-astro"],
};

export default config;
