# Setup Prettier with VSCode

VLLでは基本的にVSCodeの利用を推奨しています。ここではVSCodeにPrettierを統合してこのリポジトリのプリセットを動かすための設定を説明します。

## Prettier VSCode Extension

[Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)からインストールしてください。

## VSCode configuration

### Essentials

基本的にこのpackageのプリセットを使う場合以下の設定が必須となります。
`<repository>/.vscode/settings.json`に追記してください。

> [!TIP]
> もしこの設定をしてPrettierが使われない場合はユーザー設定で言語に対するデフォルトフォーマッタが設定されている可能性があります。
>
> その場合は言語ごとのdefault formatterを上書きする設定を追加してください。

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Use with Astro

上の設定に以下を追加してください。

```json
{
  "prettier.documentSelectors": ["**/*.astro"]
}
```
