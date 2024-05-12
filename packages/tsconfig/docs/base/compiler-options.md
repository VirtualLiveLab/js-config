
# Compiler Optionsの設定

このドキュメントでは、[base.json](../../base.json)の各オプションの設定意図を記録しています。
[TSConfig Reference](https://www.typescriptlang.org/ja/tsconfig/)の項目を見て設定しています。

基本的には

- ランタイムエラーをTypeScriptレベルで防止していけるオプション
- 初学者がエラーを見つけやすいようにするオプション

を設定している。

それそのものがランタイムエラーなどを産まないようなものはESLint側に任せる方針を取る。

## Type Checking

### [Allow Unreachable Code](https://www.typescriptlang.org/ja/tsconfig/#allowUnreachableCode)

設定値: `false`

到達不可能なコードを許可するかどうかを設定する。

設定しなかった場合のwarningはエディタ上でその節がグレーアウトされるのみであり、明示的な警告を表示してくれない。

初学者も多いことを考慮して、エディタ上にわかりやすい警告が出るように`false`に設定している。

### [Allow Unused Labels](https://www.typescriptlang.org/ja/tsconfig/#allowUnusedLabels)

設定値: `undefined (default)`

未使用のラベルを許可するかどうかを設定する。

ドキュメントに `Labels are very rare in JavaScript` とあり、実際VLLのプロジェクトでもラベルを使う場面がみられないため、デフォルト値のままとする。

なお、このチェックはESLintで可能である。

### [Always Strict](https://www.typescriptlang.org/ja/tsconfig/#alwaysStrict)

設定値: `true (default)` ([strict](#strict)を`true`に設定しているため)

ファイル先頭に`use strict`がなくても常にstrictモードでコードを解釈するかどうかを設定する。

### [Exact Optional Property Types](https://www.typescriptlang.org/ja/tsconfig/#exactOptionalPropertyTypes)

設定値: `false (default)`

オプショナルなプロパティの型を厳密にチェックするかどうかを設定する。例についてはドキュメントを見たほうが早い。
`?`をつけたプロパティであっても、明示的に許可しない限り`undefined`を渡せなくなる。
この点に関しては非常に良いルールであると考える。実際TypeScript公式も有効化を推奨している。

**ただし、実際に有効にすると様々な関数、特に外部ライブラリの関数に`option`のような設定オブジェクトを渡す場合にエラーが発生する。これらにすべてts-expect-errorをつけるまでして有効化すべきでないと判断したため、デフォルト値のままとする。**

### [No Fallthrough Cases In Switch](https://www.typescriptlang.org/ja/tsconfig/#noFallthroughCasesInSwitch)

設定値: `true`

switch文の各caseの最後で`break`, `return`, `throw`のいずれかを書かないと予期せぬ挙動を引き起こす。
このオプションを有効にするとコンパイルエラーとして検出してくれる。

初学者も多いことを考慮して、エディタ上にわかりやすい警告が出るように`true`に設定している。

### [No Implicit Any](https://www.typescriptlang.org/ja/tsconfig/#noImplicitAny)

設定値: `true (default)` ([strict](#strict)を`true`に設定しているため)

暗黙的な`any`型を許可するかどうかを設定する。

### [No Implicit Override](https://www.typescriptlang.org/ja/tsconfig/#noImplicitOverride)

設定値: `true`

継承元クラスのメソッドをオーバーライドしている場合に、`override`キーワードをつけないとエラーを出すかどうかを設定する。

`override`キーワードを使うことで、サブクラスでオーバーライドとマークされたメソッドがリファクタリングなどでスーパークラスから削除された場合にエラーが出るようになる。`No Implicit Override`を有効にすることで、サブクラスでメソッドをオーバーライドする場合に必ずこのキーワードの追加を要求するようになり、バグの防止につながる。

### [No Implicit Returns](https://www.typescriptlang.org/ja/tsconfig/#noImplicitReturns)

設定値: `true`

戻り値の型が`void`以外に設定されている場合、すべての分岐で`return`文がないとエラーを出すかどうかを設定する。

初学者も多いことを考慮して、エディタ上にわかりやすい警告が出るように`true`に設定している。

### [No Implicit This](https://www.typescriptlang.org/ja/tsconfig/#noImplicitThis)

設定値: `true (default)` ([strict](#strict)を`true`に設定しているため)

`this`のスコープは非常に複雑である。`No Implicit This`を有効にすることで、暗黙的に`any`型になっている`this`にアクセスしたりするとエラーを出すようになる。

### [No Property Access From Index Signature](https://www.typescriptlang.org/ja/tsconfig/#noPropertyAccessFromIndexSignature)

設定値: `true`

```ts
interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";

  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}
 ```

のようなInterfaceを継承するオブジェクトは、`speed`や`quality`以外にも存在が不確かなプロパティを持つことができる。
存在が不確かなプロパティはindex記法でアクセスすることが一般的である。

このオプションを有効にすると、`speed`や`quality`以外の存在が不確かなプロパティにdot記法でアクセスするとエラーを出すようになる。

### [No Unchecked Indexed Access](https://www.typescriptlang.org/ja/tsconfig/#noUncheckedIndexedAccess)

設定値: `true`

配列の要素やオブジェクトのプロパティにindex記法でアクセスする場合、常に戻り値の型が`undefined`を含むようになる。

トランスパイル後のJavaScriptは、存在しない要素やプロパティにアクセスすると`undefined`を返すことが知られている。
このオプションを有効にすることで、その挙動をTypeScriptの型レベルで考慮して開発できるようになる。

### [No Unused Locals](https://www.typescriptlang.org/ja/tsconfig/#noUnusedLocals)

設定値: `false (default)`

未使用のローカル変数を許可するかどうかを設定する。

[この記事](https://zenn.dev/bokusunny/articles/984026f409f933)でもあるような`never`型を用いたExhaustive Checkを行う際に、一時的に変数を定義することがある際に不必要なエラーを出さないようにするため、デフォルト値のままとする。

なお、このチェックはESLintで可能である。

### [No Unused Parameters](https://www.typescriptlang.org/ja/tsconfig/#noUnusedParameters)

設定値: `false (default)`

未使用のパラメータを許可するかどうかを設定する。

[冒頭](#compiler-optionsの設定)にもあるように、このようなチェックはESLintのレイヤで行うべきであると考えるため、デフォルト値のままとする。

### [strict](https://www.typescriptlang.org/ja/tsconfig/#strict)

設定値: `true`

型チェックを厳しくすることで予期せぬバグのもとになりうる実装に対してエラーを出す。

**無効にする意味がないので`true`に設定する。**

`strict: true`にともなって設定されるオプションはここでは述べない。

## Modules

### [Allow Arbitrary Extensions](https://www.typescriptlang.org/ja/tsconfig/#allowArbitraryExtensions)

設定値: `false (default)`

任意の拡張子のファイルをimportすることを許可するかどうかを設定する。

主にWebフロントエンドでは、`.tsx`ファイルに`.css`ファイルをimportするなどが可能である。
通常これらはバンドラが`global`NameSpaceに下のような型を定義することで型エラーが発生しない。

```ts
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

稀にこのような型が提供されていない場合があり、その場合は`allowArbitraryExtensions`を有効にしないと型エラーが発生する。

**基本的なバンドラやフレームワークにおいては、各パッケージが提供するドキュメントに従って適切にセットアップすれば問題ないため、デフォルト値のままとする。**

### [Allow Importing TS Extensions](https://www.typescriptlang.org/ja/tsconfig/#allowImportingTsExtensions)

設定値: `false (default)`

`.ts`や`.tsx`の拡張子が付いたファイルをimportすることを許可するかどうかを設定する。

このような書き方をするとJavaScriptとしてトランスパイル後に実行するときにエラーが発生するため、通常は設定しない。

VLLにおいても、TypeScriptの拡張子をつけてimportすることはないため、デフォルト値のままとする。

### [Allow Umd Global Access](https://www.typescriptlang.org/ja/tsconfig/#allowUmdGlobalAccess)

設定値: `false (default)`

常にアクセスできることが分かっているUMDモジュールにimport文なしでアクセスすることを許可するかどうかを設定する。

**有効化するとコードベースの認知負荷が上昇することが予想されるため、デフォルト値のままとする。**

### [Base URL](https://www.typescriptlang.org/ja/tsconfig/#baseUrl)

設定値: `undefined (default)`

相対パスを解決するための基準となるディレクトリを設定する。

**各プロジェクトによって異なるため、baseではデフォルト値のままとする。**

### [Custom Conditions](https://www.typescriptlang.org/ja/tsconfig/#customConditions)

設定値: not set

`package.json`の`exports`, `imports`フィールド内に特殊な条件を設定している場合に、TypeScript側にその条件を考慮する必要があることを伝える。

特に使用しないので設定しない。

### [Module](https://www.typescriptlang.org/ja/tsconfig/#module)

魔境なので違うドキュメントに書く。

### [Module Resolution](https://www.typescriptlang.org/ja/tsconfig/#moduleResolution)

魔境なので違うドキュメントに書く。

### [Module Suffixes](https://www.typescriptlang.org/ja/tsconfig/#moduleSuffixes)

設定値: not set

Module Suffixに指定したSuffixを考慮してモジュール解決を行うようにTypeScriptに指示する。

例: `moduleSuffixes: ["css"]` とした場合、
`import { foo } from "./foo"` と書くと`foo.css.ts`が考慮されるようになる。

特に使用しないので設定しない。

### [No Resolve](https://www.typescriptlang.org/ja/tsconfig/#noResolve)

設定値: `false (default)`

見たことも使ったこともないしドキュメントを読んでもわからない。

**触らぬ神に祟りなし。**

### [Paths](https://www.typescriptlang.org/ja/tsconfig/#paths)

設定値: not set

[Base Url](#base-url)と組み合わせてimport aliasを設定する。

**各プロジェクトによって異なるため、baseでは設定しない。**

### [Resolve JSON Module](https://www.typescriptlang.org/ja/tsconfig/#resolveJsonModule)

設定値: `true`

JSONファイルをimportすることを許可し、JSONの構造から型を生成することを許可するかどうかを設定する。

基本的に`true`にしておいて問題ない。

### [Resolve package.json Exports](https://www.typescriptlang.org/ja/tsconfig/#resolvePackageJsonExports)

設定値: not set

`node_modules`にあるパッケージをimportする場合、`package.json`の`exports`フィールドを見ることを強制するかどうかを設定する。

詳しくはドキュメントにあるが、`moduleResolution`オプションによって挙動が変わるため、基本的にそちらに任せてここでは設定しない。

### [Resolve package.json Imports](https://www.typescriptlang.org/ja/tsconfig/#resolvePackageJsonImports)

設定値: not set

[Resolve package.json Exports](#resolve-packagejson-exports)と同様。

`moduleResolution`オプションによって挙動が変わるため、基本的にそちらに任せてここでは設定しない。

### [Root Dir](https://www.typescriptlang.org/ja/tsconfig/#rootDir)

設定値: not set

設定しなければTypeScriptがいい感じに調べてくれるので設定しない。

### [Root Dirs](https://www.typescriptlang.org/ja/tsconfig/#rootDirs)

設定値: not set

[Root Dir](#root-dir)と同様。

設定しなければTypeScriptがいい感じに調べてくれるので設定しない。

### [Type Roots](https://www.typescriptlang.org/ja/tsconfig/#typeRoots)

設定値: not set

自動的にincludeされる型定義ファイルのルートディレクトリを指定する。
ここで指定しなければ、任意の`node_modules/@types`ディレクトリ内のものが探索される。

特に設定する必要がないので設定しない。

### [Types](https://www.typescriptlang.org/ja/tsconfig/#types)

デフォルト値: not set

自動的にincludeされる型定義ファイルを指定する。
ここで指定しなければ、`node_modules/@types`ディレクトリ内のものが探索される。

Node.jsランタイム以外のランタイムにデプロイするアプリケーションを開発する場合に、そのランタイムの型定義のみを自動でincludeしたいなどの際に使用する。

**各プロジェクトによって異なるため、baseでは設定しない。**
