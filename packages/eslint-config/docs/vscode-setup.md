
# Setup ESLint with VSCode

VLLでは基本的にVSCodeの利用を推奨しています。ここではVSCodeにESLintを統合してこのリポジトリのプリセットを動かすための設定を説明します。

## ESLint VSCode Extension

[Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)からインストールしてください。

## VSCode configuration

### Essentials

基本的にこのpackageのプリセットを使う場合以下の設定が必須となります。
`<repository>/.vscode/settings.json`に追記してください。

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.experimental.useFlatConfig": true,
  "eslint.options": {
    "overrideConfigFile": "eslint.config.mjs"
  },
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ],
}
```

### Use with Astro

上の設定の`eslint.validate`を以下のように変更してください。

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "astro"
  ],
}
