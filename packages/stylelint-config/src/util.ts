import type { Config } from "stylelint";

import defu from "defu";

export const mergeConfigs = (
  topConfig: Config | undefined,
  ...configs: Config[]
): Config => {
  return defu(topConfig, ...configs);
};
