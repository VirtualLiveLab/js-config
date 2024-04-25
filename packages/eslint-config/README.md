
# @virtual-live-lab/eslint-config

![NPM Version](https://img.shields.io/npm/v/%40virtual-live-lab%2Feslint-config)

ESLint configuration for Virtual Live Lab, with various presets and addons.

> [!NOTE]
> This package has not compatibility with ESLint v9 yet.

> [!WARNING]
> This package is only compatible with Flat Config.
> Do not use for classic `.eslintrc` style.

## Installation

### Use for JavaScript

```bash
npm install eslint \
  @virtual-live-lab/eslint-config \
  --save-dev
```

### Use for TypeScript

```bash
npm install eslint \
  @virtual-live-lab/eslint-config \
  typescript \
  typescript-eslint \
  --save-dev
```

## presets

This package has some presets to zero-config use.

> [!WARNING]
> Next.js is not supported by the preset because each version of the framework has a different version of the ESLint package.

### JavaScript Preset

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/js"
```

### TypeScript Preset

Extends `js` preset.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/ts"
```

### React Preset

Extends `ts` preset.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/react"
```

### Astro Preset

Extends `ts` and `react` presets.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/astro"
```

## Addons

This package has some addon configurations.

### jsx a11y

```js
// eslint.config.mjs
import jsxA11y from "@virtual-live-lab/eslint-config/addons/jsxA11y"
import ts from "@virtual-live-lab/eslint-config/ts"

const config = [...ts, ...jsxA11y]

export default config
```

### Tailwind CSS

```js
// eslint.config.mjs
import tailwind from "@virtual-live-lab/eslint-config/addons/tailwind"
import ts from "@virtual-live-lab/eslint-config/ts"

const config = [...ts, ...jsxA11y]

export default config
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
