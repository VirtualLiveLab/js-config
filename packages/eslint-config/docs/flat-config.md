# Flat Configについて

Flat Configは、ESLint v9でデフォルトになった新しいESLintの設定ファイルの形式です。
今後`.eslintrc.js`フォーマットの設定はサポートされなくなり、また古い形式の設定ファイルと互換を取るための`FlatCompat`が提供されているので、
このパッケージでは**Flat Configのみをサポート**する判断をしました。

FlatConfigのドキュメントはここから読めます。

<https://eslint.org/docs/latest/use/configure/configuration-files>

## Flat Configを拡張する

すべてのPresetかAddonは`TSESLint.FlatConfig.ConfigArray`の型になっています。
ただし、例外的に`@virtual-live-lab/eslint-config/presets/js`のjsプリセットのみ`ESLint.Linter.FlatConfig[]`になっています。

ただし、VLLでは基本的にTypeScriptを使いますので、`tseslint.config()`関数を使って`TSESLint`ベースで設定を拡張することを強く推奨します。

> [!TIP]
> 下の例で示した`languageOptions`の設定は場合によって必要になります。まだ完全な理由を解明できていません。詳細は`tseslint.md`を参照してください。

```js
import ts from "@virtual-live-lab/eslint-config/presets/ts";
import hogehoge from "eslint-config-hogehoge";

import tseslint from "typescript-eslint";

export default tseslint.config(
  ...ts,
  ...hogehoge.configs.recommended,
  languageOptions: {
    parser: tseslint.parser,
  },
);
```

TypeScriptを使わない場合は、`ESLint.Linter.FlatConfig[]`を使ってください。

<details>
  <summary>`ESLint.Linter.FlatConfig[]`形式での拡張</summary>

> [!WARNING]
> この設定方法は推奨されません

```js
import js from "@virtual-live-lab/eslint-config/presets/js";
import hogehoge from "eslint-config-hogehoge";

/* @type {import("eslint").Linter.FlatConfig[]} */
export default [...js, ...hoehoge.configs.recommended];
```

</details>

## `.eslintrc.js`形式との互換性

`presets`や`addons`にないかつFlat Configに対応していないものも、

```js
import { compat } from "@virtual-live-lab/eslint-config";

export default [...compat.extends("plugin:hogehoge/recommended")];
```

のようにすることで`.eslintrc.js`形式のsyntaxのルールを利用できます。

`compat`は以下のドキュメントで説明されている`FlatCompat`のbaseDirectoryを自動的に設定してインスタンス化したあとのものです。
<https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config>

なお、`FlatCompat`から利用できる機能の詳細はこちらから確認できます。

<https://github.com/eslint/eslintrc#usage>
