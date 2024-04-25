
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
export { default } from "@virtual-live-lab/stylelint-config"
```

### Use for scss

```bash
npm install stylelint \
  @virtual-live-lab/stylelint-config \
  @double-great/stylelint-a11y \
  stylelint-declaration-block-no-ignored-properties \
  stylelint-value-no-unknown-custom-properties \
  stylelint-config-recommended \
  stylelint-config-standard \
  stylelint-config-recess-order \
  stylelint-config-standard-scss \
  stylelint-config-sass-guidelines \
  --save-dev
```

```js
// stylelint.config.mjs
export { default } from "@virtual-live-lab/stylelint-config/scss"
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
  stylelint-config-standard-scss \
  stylelint-config-sass-guidelines \
  stylelint-config-html \
  --save-dev
```

```js
// stylelint.config.mjs
export { default } from "@virtual-live-lab/stylelint-config/astro"
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
