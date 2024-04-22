import { compat } from "../lib/compat"

const tailwind = [
  ...compat.extends("plugin:tailwindcss/recommended"),
  ...compat.config({
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          ignoredKeys: [
            "compoundVariants",
            "defaultVariants",
            "responsiveVariants",
          ],
        },
      ],
    },
  }),
]

export default tailwind
