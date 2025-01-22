// for compat only.

import type { Config } from "stylelint";

import { createConfig } from "./factory";

const config: Config = createConfig({ astro: true, sass: true });

export default config;
