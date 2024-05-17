# typescript-eslintについて

VLLでは基本的にTypeScriptを利用しますが、ESLintは本来TypeScriptに対応していません。そこで、[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)を利用します。

## Lint with type information

typescript-eslintはTypeScriptの型情報を用いた高度なLintingができますが、稀に型情報を正しく読み取れずにエラーが出る場合があります。

その場合は、以下の手順で対処してください。

1. プリセットのimport方法を変更する

```diff
- export { default } from "@virtual-live-lab/eslint-config/presets/ts";
+ import ts from "@virtual-live-lab/eslint-config/presets/ts";

```

2. typescript-eslintを使ってexportする

```diff
import ts from "@virtual-live-lab/eslint-config/presets/ts";

+ import tseslint from "typescript-eslint";

+ export default tseslint.config(
+ ...ts,
+ );
```

3. TypeScript parserを設定する

```diff

import ts from "@virtual-live-lab/eslint-config/presets/ts";

import tseslint from "typescript-eslint";

export default tseslint.config(
...ts,
+   languageOptions: {
+     parser: tseslint.parser,
+   },
);

```

もしこれで治らない場合はIssueを立ててください。
