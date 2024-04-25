
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

### JavaScript Preset

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/presets/js"
```

### TypeScript Preset

Extends `js` preset.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/presets/ts"
```

### React Preset

Extends `ts` preset.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/presets/react"
```

### Next.js Preset

Extends `ts` and `react` preset.

> [!TIP]
> you need to install `eslint-config-next` package as devDependencies.
> Normally, it will be installed automatically when use `create-next-app`.

> [!WARNING]
> This preset may be removed in the future. Please read the comments in `src/base/nextjs.ts` for more information.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/presets/nextjs"
```

### Astro Preset

Extends `ts` and `react` presets.

```js
// eslint.config.mjs
export { default } from "@virtual-live-lab/eslint-config/presets/astro"
```

## Addons

This package has some addon configurations.

### jsx a11y

```js
// eslint.config.mjs
import jsxA11y from "@virtual-live-lab/eslint-config/addons/jsxA11y"
import ts from "@virtual-live-lab/eslint-config/presets/ts"

import tseslint from "typescript-eslint"

export default tseslint.config(
  ...ts,
  ...jsxA11y
)
```

### Tailwind CSS

```js
// eslint.config.mjs
import tailwind from "@virtual-live-lab/eslint-config/addons/tailwind"
import ts from "@virtual-live-lab/eslint-config/presets/ts"

import tseslint from "typescript-eslint"

export default tseslint.config(
  ...ts,
  ...tailwind
)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
