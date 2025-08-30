---
"@virtual-live-lab/stylelint-config": minor
---

Improved compatibility with css-modules-kit

You can now enable integration with [mizdra/css-modules-kit](https://github.com/mizdra/css-modules-kit) by setting the `cssModulesKit` option to `true` in your stylelint config.

```ts
import createConfig from "@virtual-live-lab/stylelint-config";

export default createConfig({ cssModulesKit: true });
```
