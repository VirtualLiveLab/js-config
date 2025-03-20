import tseslint from "typescript-eslint";

import jsxA11y from "../addons/jsxA11y";
import { reactConfig } from "../base/react";
import ts from "./ts";

const react = tseslint.config(...ts, ...reactConfig, ...jsxA11y);

export default react;
