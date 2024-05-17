# @virtual-live-lab/prettier-config

![NPM Version](https://img.shields.io/npm/v/%40virtual-live-lab%2Fprettier-config)

Prettier configuration for Virtual Live Lab.

## Installation

### Use for normal

```bash
npm install prettier \
  @virtual-live-lab/prettier-config \
  --save-dev
```

```js
// prettier.config.mjs
export { default } from "@virtual-live-lab/prettier-config";
```

### Use for Astro

```bash
npm install prettier \
  prettier-plugin-astro \
  @virtual-live-lab/prettier-config \
  --save-dev
```

```js
// prettier.config.mjs
export { default } from "@virtual-live-lab/prettier-config/astro";
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
