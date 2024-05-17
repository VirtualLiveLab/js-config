# @virtual-live-lab/tsconfig

![NPM Version](https://img.shields.io/npm/v/%40virtual-live-lab%2Ftsconfig)

TypeScript configuration for Virtual Live Lab.

## Presets

- `astro`: Configuration for Astro.
- `base`: Basic configuration.
- `cloudflare-workers`: Configuration for Cloudflare Workers.
- `hono`: Configuration for Hono. Automatically extends `cloudflare-workers`.
- `library`: Configuration for library.
- `nextjs`: Configuration for Next.js.
- `react`: Configuration for React.
- `remix`: Configuration for Remix.
- `vite`: Configuration for Vite.

> [!WARNING] > `library`, `react`, and `vite` preset is basically for internal use.

## Installation

```bash
npm install typescript @virtual-live-lab/tsconfig --save-dev
```

### Use Normal presets

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@virtual-live-lab/tsconfig/{preset}"
  // your configuration
}
```

### Use Astro preset

> [!TIP]
> TypeScript Plugin is required to worker properly outside of VSCode.

```bash
npm install @astrojs/ts-plugin \
  --save-dev
```

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@virtual-live-lab/tsconfig/astro"
  // your configuration
}
```

### Use Cloudflare Workers preset

```bash
npm install @cloudflare/workers-types \
  --save-dev
```

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@virtual-live-lab/tsconfig/cloudflare-workers"
  // your configuration
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
