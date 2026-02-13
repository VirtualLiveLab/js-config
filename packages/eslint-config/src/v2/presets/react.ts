import { defineConfig } from "@eslint/config-helpers";

import { reactConfig } from "../base/react";
import ts from "./ts";

const react = defineConfig(...ts, ...reactConfig);

export default react;
