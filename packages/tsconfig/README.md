
# @virtual-live-lab/tsconfig

![NPM Version](https://img.shields.io/npm/v/%40virtual-live-lab%2Ftsconfig)

TypeScript configuration for Virtual Live Lab.

## Presets

- `astro`: Configuration for Astro.
- `base`: Basic configuration.
- `hono`: Configuration for Hono.
- `library`: Configuration for library.
- `nextjs`: Configuration for Next.js.
- `react`: Configuration for React.
- `remix`: Configuration for Remix.
- `vite`: Configuration for Vite.

> [!WARNING]
> `library`, `react`, and `vite` preset is basically for internal use.

## Installation

### Use presets except Astro

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@virtual-live-lab/tsconfig/{preset}",
  // your configuration
}
```

### Use Astro preset

```bash
npm install prettier \
  @virtual-live-lab/tsconfig \
  typescript \
  @astrojs/ts-plugin \
  --save-dev
```

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@virtual-live-lab/tsconfig/astro",
  // your configuration
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
