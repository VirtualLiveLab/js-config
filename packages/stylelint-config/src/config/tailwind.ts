import type { Config } from "stylelint";

import { astroFiles, cssFiles } from "../files";
import { mergeConfigs } from "../util";

type TailwindOptions = {
  astro: boolean;
};

export const tailwindConfig = (options: TailwindOptions): Config => {
  const { astro } = options;

  const configs: Config[] = [];

  // enable for css
  configs.push({
    overrides: [
      {
        files: cssFiles,
        rules: {
          "at-rule-no-deprecated": [
            true,
            {
              ignoreAtRules: tailwindDeprecatedAtRules,
            },
          ],
          "at-rule-no-unknown": [
            true,
            {
              ignoreAtRules: tailwindAtRules,
            },
          ],
        },
      },
    ],
  });

  if (astro) {
    // enable for astro with css
    configs.push({
      overrides: [
        {
          files: astroFiles,
          rules: {
            "at-rule-no-deprecated": [
              true,
              {
                ignoreAtRules: tailwindDeprecatedAtRules,
              },
            ],
            "at-rule-no-unknown": [
              true,
              {
                ignoreAtRules: tailwindAtRules,
              },
            ],
          },
        },
      ],
    });
  }

  return mergeConfigs(configs.at(0), ...configs.slice(1));
};

const tailwindAtRules = [
  /** tailwindcss v4 */
  "config",
  "plugin",
  "source",
  "theme",
  "utility",
  "variant",
  /** tailwindcss v3 */
  "tailwind",
  "apply",
  "layer",
  "config",
  /** tailwindcss v1, v2 */
  "variants",
  "responsive",
  "screen",
];

// https://github.com/stylelint/stylelint/blob/main/lib/reference/atKeywords.mjs#L3
// deprecatedAtKeywords と tailwindAtRules のうち重複するものを決め打ち
const tailwindDeprecatedAtRules = ["apply"];
