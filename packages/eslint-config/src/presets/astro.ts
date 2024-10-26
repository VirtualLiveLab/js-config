import tseslint from "typescript-eslint";

import { astroConfig } from "../base/astro";
import ts from "./ts";

const astro = tseslint.config(...ts, ...astroConfig);

export default astro;
