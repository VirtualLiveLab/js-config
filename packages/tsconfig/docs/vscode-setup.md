# Setup TypeScript with VSCode

VLLでは基本的にVSCodeの利用を推奨しています。ここではVSCodeにStylelintを統合してこのリポジトリのプリセットを動かすための設定を説明します。

## VSCode configuration

VSCodeはもともとTypeScriptをサポートしているので特に拡張機能は必要ありません。
(というかTypeScriptもVSCodeもMicrosoft製なので。)

以下の設定を`<repository>/.vscode/settings.json`に追記してください。

> [!TIP]
> monorepoを利用している場合、ワークスペースルートにtypescriptをインストールする必要があります。
>
> **基本的にpnpm workspaceのみを想定しています。**
>
> ```bash
> pnpm install -wD typescript
> ```

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```
