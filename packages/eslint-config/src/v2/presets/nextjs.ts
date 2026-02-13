import { defineConfig } from "@eslint/config-helpers";

import { nextJsConfig } from "../base/nextjs";
import react from "./react";

const nextjs = defineConfig(...react, ...nextJsConfig);

export default nextjs;
