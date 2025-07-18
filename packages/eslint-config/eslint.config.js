//@ts-check
import ts from "@virtual-live-lab/eslint-config/presets/ts";
import { defineConfig } from "eslint/config";

export default defineConfig({
  extends: [ts],
  rules: {},
});
