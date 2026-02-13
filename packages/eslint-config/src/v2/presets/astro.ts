import { defineConfig } from "@eslint/config-helpers";

import { astroConfig } from "../base/astro";
import ts from "./ts";

const astro = defineConfig(...ts, ...astroConfig);

export default astro;
