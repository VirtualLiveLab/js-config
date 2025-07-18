import type {
  ConfigWithExtends,
  ConfigWithExtendsArray,
} from "@eslint/config-helpers";

/**
 * Backward compatibility helper to align extends behavior with typescript-eslint,
 * which does not inherit the files property. @eslint/config-helpers extends will
 * inherit files, but typescript-eslint does not, so this function sets files to an empty array.
 */
export const prepareForExtend = <T extends ConfigWithExtendsArray>(
  ...configs: T
) => {
  return stripFiles(configs);
};

const stripFiles = <T extends ConfigWithExtends | ConfigWithExtendsArray>(
  config: T,
): T => {
  if (!Array.isArray(config)) {
    return {
      ...config,
      files: [],
    };
  }

  return config.map((c) => {
    if (Array.isArray(c)) {
      return stripFiles(c);
    }
    return {
      ...c,
      files: [],
    };
  }) as T;
};
