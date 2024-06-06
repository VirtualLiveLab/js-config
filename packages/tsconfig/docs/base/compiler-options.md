
# Compiler Optionsの設定

このドキュメントでは、[base.json](../../base.json)の各オプションの設定意図を記録している。
設定は[TSConfig Reference](https://www.typescriptlang.org/ja/tsconfig/)の項目を見て行っている。

基本的には

- ランタイムエラーをTypeScriptレベルで防止していけるオプション
- 初学者がエラーを見つけやすいようにするオプション

を設定している。

それそのものがランタイムエラーなどを産まないようなものはESLint側に任せる方針を取る。

> [!WARNING]
> TypeScript5.4の時点で`deprecated`なものについては記載していないし、設定もしていない。

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

設定値: not set

自動的にincludeされる型定義ファイルを指定する。
ここで指定しなければ、`node_modules/@types`ディレクトリ内のものが探索される。

Node.jsランタイム以外のランタイムにデプロイするアプリケーションを開発する場合に、そのランタイムの型定義のみを自動でincludeしたいなどの際に使用する。

**各プロジェクトによって異なるため、baseでは設定しない。**

## Emit

### [Declaration](https://www.typescriptlang.org/ja/tsconfig/#declaration)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルと同時に、型定義ファイルを生成するかどうかを設定する。

主にライブラリ向けの設定であるため、すべてのベースとなる設定では`false`にしておく。

### [Declaration Dir](https://www.typescriptlang.org/ja/tsconfig/#declarationDir)

設定値: not set

[Declaration](#declaration)と同様の理由。

### [Declaration Map](https://www.typescriptlang.org/ja/tsconfig/#declarationMap)

設定値: `false (default)`

[Declaration](#declaration)と同様の理由。

### [Downlevel Iteration](https://www.typescriptlang.org/ja/tsconfig/#declarationMap)

設定値: `false (default)`

`tsc`でES5以前向けにトランスパイルをする場合に有効にすると、ES6以上で使えるIterator関連の構文をより正確にトランスパイルしようとする。

VLLでは基本的にES5以前へのトランスパイルを行わず、するとしてもバンドラ・トランスパイラを使うので設定しない。

### [Emit BOM](https://www.typescriptlang.org/ja/tsconfig/#emitBOM)

設定値: `false (default)`

見たことも使ったこともなく、ドキュメントでも`false`が一般的であると書いてあるので`false`にしておく。

### [Emit Declaration Only](https://www.typescriptlang.org/ja/tsconfig/#emitDeclarationOnly)

設定値: `false (default)`

トランスパイルを行わず、型定義だけを出力するオプション。

主にライブラリ向けの設定であるため、すべてのベースとなる設定では`false`にしておく。

### [Import Helpers](https://www.typescriptlang.org/ja/tsconfig/#importHelpers)

設定値: `false (default)`

トランスパイルの際に、`tslib`からヘルパー関数をimportするかどうかを設定する。

VLLでは基本的にES5以前へのトランスパイルを行わず、するとしてもバンドラ・トランスパイラを使うので設定しない。

### [Imports Not Used As Values](https://www.typescriptlang.org/ja/tsconfig/#importsNotUsedAsValues)

設定値: `remove (default)`

値をして利用されず、型のみで利用されているimport文をトランスパイル後のJavaScriptでどう扱うかを指定する。

`remove`に設定すると、型のみのimport文をトランスパイル後のJavaScriptに出力しない。
`preserve`に設定すると、すべてのimport文が維持される。
`error`に設定すると、型のimport文がトランスパイル後のJavaScriptに出力されるとエラーを出す。

このようなケースの構文チェックは`typescript-eslint`を用いてESLintルールでチェックしており、TypeScript側でもErrorを出すのはtoo muchだと考えるため、デフォルト値のままとする。

### [Inline Source Map](https://www.typescriptlang.org/ja/tsconfig/#inlineSourceMap)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルにソースマップを埋め込むかどうかを設定する。

基本的には別ファイルにして欲しいので`false`にしておく。

### [Inline Sources](https://www.typescriptlang.org/ja/tsconfig/#inlineSources)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルにTypeScriptのソースコード文字列を埋め込むかどうかを設定する。

基本的には必要ないので`false`にしておく。

### [Map Root](https://www.typescriptlang.org/ja/tsconfig/#mapRoot)

設定値: not set

外部のソースマップを参照する場合に指定する。

基本的には必要ないので設定しない。

### [New Line](https://www.typescriptlang.org/ja/tsconfig/#newLine)

設定値: `LF (default)`

標準的な実行環境は`LF`を使うため、`LF`に設定しておく。

### [No Emit](https://www.typescriptlang.org/ja/tsconfig/#noEmit)

設定値: `false (default)`

この設定を`true`にすると、`tsc`を型チェックのみに用いるようになる。

開発プロジェクトによっては`true`にするが、ベースとなる設定では`false`にしておく。

### [No Emit Helpers](https://www.typescriptlang.org/ja/tsconfig/#noEmitHelpers)

設定値: `false (default)`

`importHelpers`が`true`の場合に、ヘルパー関数をimportする代わりに各ファイルにヘルパー関数を埋め込むかどうかを設定する。
大量のJavaScriptが生成される。

VLLでは基本的にES5以前へのトランスパイルを行わず、するとしてもバンドラ・トランスパイラを使うので設定しない。

### [No Emit On Error](https://www.typescriptlang.org/ja/tsconfig/#noEmitOnError)

設定値: `false (default)`

エラーが発生した場合にトランスパイルを行わないようにするかどうかを設定する。

### [Out Dir](https://www.typescriptlang.org/ja/tsconfig/#outDir)

設定値: not set

トランスパイル後のJavaScriptファイルを出力するディレクトリを指定する。

`tsc`をトランスパイラとして使うプロジェクトで個別に設定する。

### [Out File](https://www.typescriptlang.org/ja/tsconfig/#outFile)

設定値: not set

トランスパイル後のJavaScriptファイルを1つのファイルにまとめる。
基本的にCommon JSおよびES Modules向けにTypeScriptを使うので、設定しない。

### [Preserve Const Enums](https://www.typescriptlang.org/ja/tsconfig/#preserveConstEnums)

設定値: `true (default)` ([Isolated Modules](#isolated-modules)を`true`に設定しているため)

`const enum`をトランスパイル後のJavaScriptに出力するかどうかを設定する。

基本的にIsolated Modules側で制御してよいと考えるため、ここではデフォルト値のままとする。

### [Remove Comments](https://www.typescriptlang.org/ja/tsconfig/#removeComments)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルからコメントを削除するかどうかを設定する。

トランスパイル後のコードの解読は非常に難しい。
コメントを残しておくとデバッグしやすいため、基本的には`false`にしておく。

### [Source Map](https://www.typescriptlang.org/ja/tsconfig/#sourceMap)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルにソースマップを出力するかどうかを設定する。

有効にしておくと、トランスパイル後のコードをデバッグするのが簡単になる。

プロジェクトによっては`true`にするが、ベースとなる設定では`false`にしておく。

### [Source Root](https://www.typescriptlang.org/ja/tsconfig/#sourceRoot)

設定値: not set

外部のソースコードを参照する場合に指定する。

基本的には必要ないので設定しない。

### [Strip Internal](https://www.typescriptlang.org/ja/tsconfig/#stripInternal)

設定値: `false (default)`

`@internal`アノテーションが付いたメンバーをトランスパイル後のJavaScriptに出力するかどうかを設定する。

プロジェクトによっては`true`にするが、ベースとなる設定では`false`にしておく。

## JavaScript Support

### [Allow Js](https://www.typescriptlang.org/ja/tsconfig/#allowJs)

設定値: `false (default)`

JavaScriptファイルをTypeScriptファイルへimportすることを許可するかどうかを設定する。

これにより、TypeScriptとJavaScriptが共存できる。基本的にソースコードにはTypeScriptのみを使うので`false`にしておく。

プロジェクトによっては`.js`モジュールを書かざるを得ないことがあるため、その場合は`true`にする。

### [Check Js](https://www.typescriptlang.org/ja/tsconfig/#checkJs)

設定値: `false (default)`

JavaScriptファイルにおいてもTypeScriptと同等の型チェックをするかどうか設定する。

~~基本的には`true`にしておく。~~

\#105のように、`tsc`がJavaScriptファイルもトランスパイルしようとしてOverwriteエラーが発生してしまうので、`false`にしておく。

なお、JavaScriptでも型チェックが必要な場合は`// @ts-check`をファイルの先頭に書くことで有効にできる。

### [Max Node Module JS Depth](https://www.typescriptlang.org/ja/tsconfig/#maxNodeModuleJsDepth)

設定値: `0 (default)`

`node_modules`内のJavaScriptファイルのうち、`d.ts`ファイルがないものを型推論する深さを指定する。

ドキュメントにもあるが、基本的に0であるべきである。

## Editor Support

### [Disable Size Limit](https://www.typescriptlang.org/ja/tsconfig/#disableSizeLimit)

設定値: `false (default)`

TypeScriptが使用できるメモリの上限を無効にするかどうかを設定する。

基本的には`false`にしておく。

### [Plugins](https://www.typescriptlang.org/ja/tsconfig/#plugins)

設定値: not set

エディタ上で動作させるLanguage Serviceのプラグインを指定する。

プロジェクトによっては設定するが、ベースとなる設定では設定しない。

## Interop Constraints

### [Allow Synthetic Default Imports](https://www.typescriptlang.org/ja/tsconfig/#allowSyntheticDefaultImports)

設定値: `true (default)` ([esModuleInterop](#es-module-interop)を`true`に設定しているため)

### [ES Module Interop](https://www.typescriptlang.org/ja/tsconfig/#esModuleInterop)

設定値: `true`

CommonJSモジュールをimportする際に、NameSpaceオブジェクトを生成することでESModuleと同じように扱えるようになる。

基本的には`true`にしておく。

### [Force Consistent Casing In File Names](https://www.typescriptlang.org/ja/tsconfig/#forceConsistentCasingInFileNames)

設定値: `true`

ファイル名の大文字・小文字を厳密にチェックするかどうかを設定する。

基本的には`true`にしておく。

### [Isolated Modules](https://www.typescriptlang.org/ja/tsconfig/#isolatedModules)

設定値: `true`

単一ファイルだけの情報でトランスパイルするとき、正しく解釈されない可能性のあるコードに警告を出す。主に再exportや`declare const enum`の使用を警告する。

基本的には`true`にしておく。

### [Preserve Symlinks](https://www.typescriptlang.org/ja/tsconfig/#preserveSymlinks)

設定値: `false (default)`

一般的には設定されないオプション。あまりわからなかったのでドキュメントを読んで欲しい。

### [Verbatim Module Syntax](https://www.typescriptlang.org/ja/tsconfig/#verbatimModuleSyntax)

設定値: `false (default)`

import文の処理が逐語的なトランスパイルになる。

このため、`import type {}`文は丸ごと削除され、`import {a, type B}`のような文は`import {a}`に変換される。

しかし、このオプションを有効にするとCommon JS向けにトランスパイルする際にもimport文がrequire文に変換されないため非常に面倒になる。

これと同等のチェックをESLintのプリセットで行うように設定しているため、TypeScript側ではデフォルト値のままとする。

## Backwards Compatibility

### [No Implicit Use Strict](https://www.typescriptlang.org/ja/tsconfig/#noImplicitUseStrict)

設定値: `false (default)`

トランスパイル後のJavaScriptファイルに`"use strict";`を追加するかどうかを設定する。

基本的には`false`にしておく。

### [No Strict Generic Checks](https://www.typescriptlang.org/ja/tsconfig/#noStrictGenericChecks)

設定値: `false (default)`

有効にするとジェネリクスの型チェックが甘くなる。

基本的には`false`にしておく。

### [Suppress Excess Property Errors](https://www.typescriptlang.org/ja/tsconfig/#suppressExcessPropertyErrors)

設定値: `false (default)`

有効にすると、オブジェクトの型定義に存在しないプロパティを追加してもエラーを出さなくなる。

基本的には`false`にしておく。

### [Suppress Implicit Any Index Errors](https://www.typescriptlang.org/ja/tsconfig/#suppressImplicitAnyIndexErrors)

設定値: `false (default)`

有効にすると、オブジェクトの型定義に存在しないプロパティにindex accessした際の暗黙的なAny型のエラーを出さなくなる。

基本的には`false`にしておく。

## Language and Environment

### [Emit Decorator Metadata](https://www.typescriptlang.org/ja/tsconfig/#emitDecoratorMetadata)

設定値: `false (default)`

デコレータのメタデータを出力するかどうかを設定する。

デコレータ自体が実験的な機能であることからベースとなる設定では`false`にしておく。

### [Experimental Decorators](https://www.typescriptlang.org/ja/tsconfig/#experimentalDecorators)

設定値: `false (default)`

デコレータを有効にするかどうかを設定する。

デコレータ自体が実験的な機能であることからベースとなる設定では`false`にしておく。

### [JSX](https://www.typescriptlang.org/ja/tsconfig/#jsx)

設定値: **プロジェクトによって異なるため注意が必要**

JSXをどのJSX Runtimeに合わせたJavaScriptにトランスパイルするかを設定する。
基本的には使用するライブラリまたはフレームワークの設定に準拠する。

> [!NOTE]
> このオプションの詳細な説明は英語版ドキュメントを参照してください。
>
> <https://www.typescriptlang.org/tsconfig#jsx>

### [JSX Factory](https://www.typescriptlang.org/ja/tsconfig/#jsxFactory)

設定値: `React.createElement (default)`

JSXをトランスパイルする際に使用する関数を指定する。

基本的には必要ないので設定しない。

### [jsxImportSource](https://www.typescriptlang.org/ja/tsconfig/#jsxImportSource)

設定値: `react (default)`

[JSX](#jsx)を`react-jsx`や`react-jsxdev`に設定する場合に、`jsx()`や`jsxs()`のFactory関数をインポートする際のパッケージ名を指定する。

### [Lib](https://www.typescriptlang.org/ja/tsconfig/#lib)

設定値: **プロジェクトによって異なるため注意が必要**

TypeScriptには特定のバージョンのECMA Scriptやブラウザ上のDOM APIの型定義が含まれている。
ここで指定したものは、importなしでグローバルに使用できる型として認識される。

何もしなくても[target](#target)で指定したECMA Scriptのバージョンに合わせた型定義は自動的に追加されるが、それ以外に追加の型定義をグローバルで使用したい場合に設定する。

### [Module Detection](https://www.typescriptlang.org/ja/tsconfig/#moduleResolution)

設定値: `auto (default)`

TypeScriptがスクリプトとモジュールを区別する方法を指定する。
デフォルトの値に設定しておくと他のオプションから自動的に最適な方法で判断されるので、基本的には設定しない。

### [No Lib](https://www.typescriptlang.org/ja/tsconfig/#noLib)

設定値: not set

[Lib](#lib)とは逆に、TypeScriptが提供する標準ライブラリの型定義を無効にする。

基本的には設定しない。

### [Target](https://www.typescriptlang.org/ja/tsconfig/#target)

設定値: **プロジェクトによって異なるため注意が必要**

トランスパイル後のJavaScriptのバージョンを指定する。

設定値より新しい構文のJavaScriptは、古いバージョンで解釈できる記法に変換される。

> [!WARNING]
> targetを`ESNext`に指定した場合、常に最新のJavaScript構文が使えると解釈される。
> これは予期せぬ挙動を生む可能性があるため、使用には注意が必要である。
>
> とはいえ最新の構文をどんどん使うことはあまりなく、かなりのライブラリが`ESNext`を指定しているため、あまり気にしなくてよいのも事実である。

### [Use Define For Class Fields](https://www.typescriptlang.org/ja/tsconfig/#useDefineForClassFields)

設定値: デフォルト

クラス宣言がどのようにトランスパイルされるかを指定する。`true`に設定すると、クラスフィールドを`Object.defineProperty`で定義するようになる。

基本的にはデフォルト値のままとする。
