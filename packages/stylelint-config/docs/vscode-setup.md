# Setup Stylelint with VSCode

VLLでは基本的にVSCodeの利用を推奨しています。ここではVSCodeにStylelintを統合してこのリポジトリのプリセットを動かすための設定を説明します。

## Stylelint VSCode Extension

[Marketplace](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)からインストールしてください。

## VSCode configuration

### Essentials

基本的にこのpackageのプリセットを使う場合以下の設定が必須となります。
`<repository>/.vscode/settings.json`に追記してください。

> [!TIP] > `stylelint.packageManager`をnpm, yarn, pnpmの中からリポジトリに合わせたものに変更してください。`bun`はないようです。
>
> 設定しなかった場合、稀にStylelint VSCode Extensionがインストールされたstylelintの検出に失敗することがあります。

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "postcss"],
  "stylelint.packageManager": "PROJECT_PACKAGE_MANAGER"
}
```

### Use with Astro

上の設定の`stylelint.validate`を以下のように変更してください。

```json
{
  "stylelint.validate": ["css", "postcss", "astro"]
}
```
