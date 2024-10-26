import tseslint from "typescript-eslint";

import { astroConfig } from "../base/astro";
import react from "./react";

const astro = tseslint.config(...react, ...astroConfig);

export default astro;
