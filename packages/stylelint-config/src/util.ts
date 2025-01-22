import type { Config } from "stylelint";

import { mergeWith, uniq } from "es-toolkit";

export const mergeConfigs = (...configs: Config[]): Config => {
  return configs.reduce(
    (acc, config) =>
      mergeWith(acc, config, (targetValue, sourceValue, key) => {
        // extends や plugin は deep merge したい
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          // files は deep merge したくない
          if (key === "files") {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return sourceValue;
          }

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return uniq(targetValue.concat(sourceValue));
        }
        return undefined;
      }),
    {},
  );
};
