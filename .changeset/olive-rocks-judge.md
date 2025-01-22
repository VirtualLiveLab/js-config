---
"@virtual-live-lab/stylelint-config": major
---

Configuration style is changed to use function.

for css:

```js
// before
export { default } from "@virtual-live-lab/stylelint-config";
```

```js
// after
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig();
```

for sass:

> [!WARNING]
> You can still use the same config format for compat,
> but some rules are changed.
> Some errors may occur when updating the package.
>
> It is recommended to migrate to the new config.

```js
// before
export { default } from "@virtual-live-lab/stylelint-config/scss";
```

```js
// after
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({ sass: true });
```

for astro:

> [!WARNING]
> You can still use the same config format for compat,
> but some rules are changed.
> Some errors may occur when updating the package.
>
> It is recommended to migrate to the new config.

```js
// before
export { default } from "@virtual-live-lab/stylelint-config/astro";
```

```js
// after
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({
  astro: true,
  // enable sass if you use sass / scss
  sass: true,
});
```

if you use tailwindcss:

```js
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({
  tailwindcss: true
});
```

if you **do not** want to use a11y rules (not recommended):


```js
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({
  a11y: false,
});
```
