import type { Config } from "stylelint";

import { tailwindConfig } from "./config/tailwind";
import { astroFiles } from "./files";
import { mergeConfigs } from "./util";

type PresetOptions = {
  /**
   * Enable the a11y rules.
   *
   * @default true
   */
  a11y?: boolean;
  /**
   * Enable astro rules.
   *
   * @default false
   */
  astro?: boolean;
  /**
   * Enable integration with {@link https://github.com/mizdra/css-modules-kit mizdra/css-modules-kit}.
   *
   * @default false
   */
  cssModulesKit?: boolean;
  /**
   * Enable tailwindcss rules.
   *
   * @default false
   */
  tailwindcss?: boolean;
};

/**
 * Create an opinionated stylelint config.
 *
 * @param options
 * The options for the stylelint config.
 * @param userConfigs
 * Additional stylelint configs to merge.
 * @returns {Config}
 * The merged stylelint config. you can default export this from your config file.
 */
export const createConfig = (
  options: Partial<PresetOptions> = {},
  ...userConfigs: Config[]
): Config => {
  const {
    a11y = true,
    astro = false,
    cssModulesKit = false,
    tailwindcss = false,
  } = options;

  const configs: Config[] = [];

  configs.push({
    // Base config
    extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
    plugins: [
      "stylelint-declaration-block-no-ignored-properties",
      "stylelint-value-no-unknown-custom-properties",
    ],
    rules: {
      "color-named": "never",
      "csstools/value-no-unknown-custom-properties": true,
      "plugin/declaration-block-no-ignored-properties": true,
    },
  });

  if (a11y) {
    configs.push({
      plugins: ["@double-great/stylelint-a11y"],
      rules: {
        "a11y/font-size-is-readable": true,
        "a11y/media-prefers-reduced-motion": true,
        "a11y/no-obsolete-attribute": true,
        "a11y/no-obsolete-element": true,
        "a11y/no-outline-none": true,
        "a11y/selector-pseudo-class-focus": true,
      },
    });
  }

  if (astro) {
    // この push が astro 向け override の最後であることを確認すること
    configs.push({
      overrides: [
        {
          extends: ["stylelint-config-html/astro"],
          files: astroFiles,
          name: "@virtual-live-lab/stylelint-config/astro",
        },
      ],
    });
  }

  if (tailwindcss) {
    configs.push(tailwindConfig({ astro }));
  }

  if (cssModulesKit) {
    configs.push({
      overrides: [
        {
          files: ["**/*.module.css"],
          rules: {
            "selector-class-pattern": [
              // css-modules-kit cannot handle kebab-case, so enforcing lowerCamelCase
              // https://github.com/stylelint/stylelint-config-standard/blob/b2f6e1a9c2a53c09021a0794181ef99814397317/index.js#L109-L114
              "^[a-z]+(?:[A-Z][a-z0-9]*)*$",
              {
                message: (selector: string) =>
                  `Expected class selector "${selector}" to be lowerCamelCase`,
              },
            ],
          },
        },
      ],
    });
  }

  return mergeConfigs(configs.at(0), ...configs.slice(1), ...userConfigs);
};
