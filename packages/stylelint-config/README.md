# @virtual-live-lab/stylelint-config

![NPM Version](https://img.shields.io/npm/v/%40virtual-live-lab%2Fstylelint-config)

Stylelint configuration for Virtual Live Lab.

## Installation

> [!WARNING]
> monorepoを利用してる場合、利用するすべてのワークスペースでインストールしてください。

### Use for css

```bash
npm install stylelint \
  @virtual-live-lab/stylelint-config \
  @double-great/stylelint-a11y \
  stylelint-declaration-block-no-ignored-properties \
  stylelint-value-no-unknown-custom-properties \
  stylelint-config-recommended \
  stylelint-config-standard \
  stylelint-config-recess-order \
  --save-dev
```

```js
// stylelint.config.mjs
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig();
```

### Use for Astro

> [!TIP]
> If some syntax error occurred in Astro, you should install `postcss-html`.
>
> ```bash
> npm install postcss-html --save-dev
> ```

```bash
npm install stylelint \
  @virtual-live-lab/stylelint-config \
  @double-great/stylelint-a11y \
  stylelint-declaration-block-no-ignored-properties \
  stylelint-value-no-unknown-custom-properties \
  stylelint-config-recommended \
  stylelint-config-standard \
  stylelint-config-recess-order \
  stylelint-config-html \
  --save-dev
```

```js
// stylelint.config.mjs
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({
  astro: true,
});
```

### a11y rules

a11y rules are enabled by default. If you **do not** want to use a11y rules, you can disable it.

```js
// stylelint.config.mjs
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({ a11y: false });
```

### tailwindcss rules

If you use tailwindcss, you can enable tailwindcss rules.

```js
// stylelint.config.mjs
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({ tailwindcss: true });
```

## Customization

You can simply pass additional configs to `createConfig`.

Configs will be merged deeply.

```js
// stylelint.config.mjs
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({
  tailwindcss: true,
  astro: true,
},
{
  // for example
  overrides: [
    {
      files: ["*.css", "**/*.css"],
      rules: {
        "at-rule-no-unknown": null,
      },
    },
  ],
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
