import tseslint from "typescript-eslint";

import { nextJsConfig } from "../base/nextjs";
import react from "./react";

const nextjs = tseslint.config(...react, ...nextJsConfig);

export default nextjs;
