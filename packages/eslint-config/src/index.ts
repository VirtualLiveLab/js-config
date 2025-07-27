import type { Linter } from "eslint";
import type { FlatConfigComposer } from "eslint-flat-config-utils";

import { defineConfig } from "@eslint/config-helpers";
import { composer } from "eslint-flat-config-utils";

interface Options extends Partial<RequiredOptions> {}

type RequiredOptions = {};

export const virtualLiveLab = async (
  options: Options = {},
): Promise<FlatConfigComposer<Linter.Config<Linter.RulesRecord>, never>> => {
  return composer(defineConfig());
};
