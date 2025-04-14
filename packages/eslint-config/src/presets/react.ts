import tseslint from "typescript-eslint";

import { reactConfig } from "../base/react";
import ts from "./ts";

const react = tseslint.config(...ts, ...reactConfig);

export default react;
