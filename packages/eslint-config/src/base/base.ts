import { defineConfig } from "@eslint/config-helpers";
import gitignore from "eslint-config-flat-gitignore";

export const baseConfig = defineConfig({
  extends: [gitignore()],
  name: "@virtual-live-lab/eslint-config/base",
});
