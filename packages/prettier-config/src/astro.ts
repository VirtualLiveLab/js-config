import type { Config } from "prettier"

import defaultConfig from "./index"

const config: Config = {
  ...defaultConfig,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  plugins: ["prettier-plugin-astro"],
}

export default config
