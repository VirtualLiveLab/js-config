/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/ts/block-spacing
   */
  '@stylistic/ts/block-spacing'?: Linter.RuleEntry<StylisticTsBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/ts/brace-style
   */
  '@stylistic/ts/brace-style'?: Linter.RuleEntry<StylisticTsBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/ts/comma-dangle
   */
  '@stylistic/ts/comma-dangle'?: Linter.RuleEntry<StylisticTsCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/ts/comma-spacing
   */
  '@stylistic/ts/comma-spacing'?: Linter.RuleEntry<StylisticTsCommaSpacing>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/ts/func-call-spacing'?: Linter.RuleEntry<StylisticTsFuncCallSpacing>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  '@stylistic/ts/function-call-spacing'?: Linter.RuleEntry<StylisticTsFunctionCallSpacing>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/ts/indent
   */
  '@stylistic/ts/indent'?: Linter.RuleEntry<StylisticTsIndent>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/ts/key-spacing
   */
  '@stylistic/ts/key-spacing'?: Linter.RuleEntry<StylisticTsKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/ts/keyword-spacing
   */
  '@stylistic/ts/keyword-spacing'?: Linter.RuleEntry<StylisticTsKeywordSpacing>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/ts/lines-around-comment
   */
  '@stylistic/ts/lines-around-comment'?: Linter.RuleEntry<StylisticTsLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/ts/lines-between-class-members
   */
  '@stylistic/ts/lines-between-class-members'?: Linter.RuleEntry<StylisticTsLinesBetweenClassMembers>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/ts/member-delimiter-style
   */
  '@stylistic/ts/member-delimiter-style'?: Linter.RuleEntry<StylisticTsMemberDelimiterStyle>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/ts/no-extra-parens
   */
  '@stylistic/ts/no-extra-parens'?: Linter.RuleEntry<StylisticTsNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/ts/no-extra-semi
   */
  '@stylistic/ts/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/ts/object-curly-newline
   */
  '@stylistic/ts/object-curly-newline'?: Linter.RuleEntry<StylisticTsObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/ts/object-curly-spacing
   */
  '@stylistic/ts/object-curly-spacing'?: Linter.RuleEntry<StylisticTsObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/ts/object-property-newline
   */
  '@stylistic/ts/object-property-newline'?: Linter.RuleEntry<StylisticTsObjectPropertyNewline>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/ts/padding-line-between-statements
   */
  '@stylistic/ts/padding-line-between-statements'?: Linter.RuleEntry<StylisticTsPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/ts/quote-props
   */
  '@stylistic/ts/quote-props'?: Linter.RuleEntry<StylisticTsQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/ts/quotes
   */
  '@stylistic/ts/quotes'?: Linter.RuleEntry<StylisticTsQuotes>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/ts/semi
   */
  '@stylistic/ts/semi'?: Linter.RuleEntry<StylisticTsSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/ts/semi-spacing
   */
  '@stylistic/ts/semi-spacing'?: Linter.RuleEntry<StylisticTsSemiSpacing>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/ts/space-before-blocks
   */
  '@stylistic/ts/space-before-blocks'?: Linter.RuleEntry<StylisticTsSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/ts/space-before-function-paren
   */
  '@stylistic/ts/space-before-function-paren'?: Linter.RuleEntry<StylisticTsSpaceBeforeFunctionParen>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/ts/space-infix-ops
   */
  '@stylistic/ts/space-infix-ops'?: Linter.RuleEntry<StylisticTsSpaceInfixOps>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/ts/type-annotation-spacing
   */
  '@stylistic/ts/type-annotation-spacing'?: Linter.RuleEntry<StylisticTsTypeAnnotationSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce getter and setter pairs in objects and classes
   * @see https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-newline
   * @deprecated
   */
  'array-bracket-newline'?: Linter.RuleEntry<ArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
   * @deprecated
   */
  'array-bracket-spacing'?: Linter.RuleEntry<ArrayBracketSpacing>
  /**
   * Enforce `return` statements in callbacks of array methods
   * @see https://eslint.org/docs/latest/rules/array-callback-return
   */
  'array-callback-return'?: Linter.RuleEntry<ArrayCallbackReturn>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.org/docs/latest/rules/array-element-newline
   * @deprecated
   */
  'array-element-newline'?: Linter.RuleEntry<ArrayElementNewline>
  /**
   * Require braces around arrow function bodies
   * @see https://eslint.org/docs/latest/rules/arrow-body-style
   */
  'arrow-body-style'?: Linter.RuleEntry<ArrowBodyStyle>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.org/docs/latest/rules/arrow-parens
   * @deprecated
   */
  'arrow-parens'?: Linter.RuleEntry<ArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.org/docs/latest/rules/arrow-spacing
   * @deprecated
   */
  'arrow-spacing'?: Linter.RuleEntry<ArrowSpacing>
  /**
   * apply `jsx-a11y/alt-text` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/
   */
  'astro/jsx-a11y/alt-text'?: Linter.RuleEntry<AstroJsxA11YAltText>
  /**
   * apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/
   */
  'astro/jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<AstroJsxA11YAnchorAmbiguousText>
  /**
   * apply `jsx-a11y/anchor-has-content` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/
   */
  'astro/jsx-a11y/anchor-has-content'?: Linter.RuleEntry<AstroJsxA11YAnchorHasContent>
  /**
   * apply `jsx-a11y/anchor-is-valid` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/
   */
  'astro/jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<AstroJsxA11YAnchorIsValid>
  /**
   * apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/
   */
  'astro/jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<AstroJsxA11YAriaActivedescendantHasTabindex>
  /**
   * apply `jsx-a11y/aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/
   */
  'astro/jsx-a11y/aria-props'?: Linter.RuleEntry<AstroJsxA11YAriaProps>
  /**
   * apply `jsx-a11y/aria-proptypes` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/
   */
  'astro/jsx-a11y/aria-proptypes'?: Linter.RuleEntry<AstroJsxA11YAriaProptypes>
  /**
   * apply `jsx-a11y/aria-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/
   */
  'astro/jsx-a11y/aria-role'?: Linter.RuleEntry<AstroJsxA11YAriaRole>
  /**
   * apply `jsx-a11y/aria-unsupported-elements` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/
   */
  'astro/jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<AstroJsxA11YAriaUnsupportedElements>
  /**
   * apply `jsx-a11y/autocomplete-valid` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/
   */
  'astro/jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<AstroJsxA11YAutocompleteValid>
  /**
   * apply `jsx-a11y/click-events-have-key-events` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/
   */
  'astro/jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<AstroJsxA11YClickEventsHaveKeyEvents>
  /**
   * apply `jsx-a11y/control-has-associated-label` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/
   */
  'astro/jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<AstroJsxA11YControlHasAssociatedLabel>
  /**
   * apply `jsx-a11y/heading-has-content` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/
   */
  'astro/jsx-a11y/heading-has-content'?: Linter.RuleEntry<AstroJsxA11YHeadingHasContent>
  /**
   * apply `jsx-a11y/html-has-lang` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/
   */
  'astro/jsx-a11y/html-has-lang'?: Linter.RuleEntry<AstroJsxA11YHtmlHasLang>
  /**
   * apply `jsx-a11y/iframe-has-title` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/
   */
  'astro/jsx-a11y/iframe-has-title'?: Linter.RuleEntry<AstroJsxA11YIframeHasTitle>
  /**
   * apply `jsx-a11y/img-redundant-alt` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/
   */
  'astro/jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<AstroJsxA11YImgRedundantAlt>
  /**
   * apply `jsx-a11y/interactive-supports-focus` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/
   */
  'astro/jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<AstroJsxA11YInteractiveSupportsFocus>
  /**
   * apply `jsx-a11y/label-has-associated-control` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/
   */
  'astro/jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<AstroJsxA11YLabelHasAssociatedControl>
  /**
   * apply `jsx-a11y/lang` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/
   */
  'astro/jsx-a11y/lang'?: Linter.RuleEntry<AstroJsxA11YLang>
  /**
   * apply `jsx-a11y/media-has-caption` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/
   */
  'astro/jsx-a11y/media-has-caption'?: Linter.RuleEntry<AstroJsxA11YMediaHasCaption>
  /**
   * apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/
   */
  'astro/jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<AstroJsxA11YMouseEventsHaveKeyEvents>
  /**
   * apply `jsx-a11y/no-access-key` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/
   */
  'astro/jsx-a11y/no-access-key'?: Linter.RuleEntry<AstroJsxA11YNoAccessKey>
  /**
   * apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/
   */
  'astro/jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<AstroJsxA11YNoAriaHiddenOnFocusable>
  /**
   * apply `jsx-a11y/no-autofocus` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/
   */
  'astro/jsx-a11y/no-autofocus'?: Linter.RuleEntry<AstroJsxA11YNoAutofocus>
  /**
   * apply `jsx-a11y/no-distracting-elements` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/
   */
  'astro/jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<AstroJsxA11YNoDistractingElements>
  /**
   * apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/
   */
  'astro/jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<AstroJsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/
   */
  'astro/jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveElementInteractions>
  /**
   * apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/
   */
  'astro/jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/
   */
  'astro/jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<AstroJsxA11YNoNoninteractiveTabindex>
  /**
   * apply `jsx-a11y/no-redundant-roles` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/
   */
  'astro/jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<AstroJsxA11YNoRedundantRoles>
  /**
   * apply `jsx-a11y/no-static-element-interactions` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/
   */
  'astro/jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<AstroJsxA11YNoStaticElementInteractions>
  /**
   * apply `jsx-a11y/prefer-tag-over-role` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/
   */
  'astro/jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<AstroJsxA11YPreferTagOverRole>
  /**
   * apply `jsx-a11y/role-has-required-aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/
   */
  'astro/jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<AstroJsxA11YRoleHasRequiredAriaProps>
  /**
   * apply `jsx-a11y/role-supports-aria-props` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/
   */
  'astro/jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<AstroJsxA11YRoleSupportsAriaProps>
  /**
   * apply `jsx-a11y/scope` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/
   */
  'astro/jsx-a11y/scope'?: Linter.RuleEntry<AstroJsxA11YScope>
  /**
   * apply `jsx-a11y/tabindex-no-positive` rule to Astro components
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/
   */
  'astro/jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<AstroJsxA11YTabindexNoPositive>
  /**
   * the client:only directive is missing the correct component's framework value
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/missing-client-only-directive-value/
   */
  'astro/missing-client-only-directive-value'?: Linter.RuleEntry<[]>
  /**
   * disallow conflicting set directives and child contents
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/
   */
  'astro/no-conflict-set-directives'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.canonicalURL`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/
   */
  'astro/no-deprecated-astro-canonicalurl'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.fetchContent()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/
   */
  'astro/no-deprecated-astro-fetchcontent'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Astro.resolve()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/
   */
  'astro/no-deprecated-astro-resolve'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `getEntryBySlug()`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/
   */
  'astro/no-deprecated-getentrybyslug'?: Linter.RuleEntry<[]>
  /**
   * disallow value export
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-exports-from-components/
   */
  'astro/no-exports-from-components'?: Linter.RuleEntry<[]>
  /**
   * disallow use of `set:html` to prevent XSS attack
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/
   */
  'astro/no-set-html-directive'?: Linter.RuleEntry<[]>
  /**
   * disallow use of `set:text`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/
   */
  'astro/no-set-text-directive'?: Linter.RuleEntry<[]>
  /**
   * disallow selectors defined in `style` tag that don't use in HTML
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/
   */
  'astro/no-unused-css-selector'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `define:vars={...}` in `style` tag
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/
   */
  'astro/no-unused-define-vars-in-style'?: Linter.RuleEntry<[]>
  /**
   * require `class:list` directives instead of `class` with expressions
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/
   */
  'astro/prefer-class-list-directive'?: Linter.RuleEntry<[]>
  /**
   * require use object instead of ternary expression in `class:list`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/
   */
  'astro/prefer-object-class-list'?: Linter.RuleEntry<[]>
  /**
   * require use split array elements in `class:list`
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/
   */
  'astro/prefer-split-class-list'?: Linter.RuleEntry<AstroPreferSplitClassList>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/
   */
  'astro/semi'?: Linter.RuleEntry<AstroSemi>
  /**
   * enforce sorting of attributes
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/sort-attributes/
   */
  'astro/sort-attributes'?: Linter.RuleEntry<AstroSortAttributes>
  /**
   * disallow warnings when compiling.
   * @see https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/
   */
  'astro/valid-compile'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of variables within the scope they are defined
   * @see https://eslint.org/docs/latest/rules/block-scoped-var
   */
  'block-scoped-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.org/docs/latest/rules/block-spacing
   * @deprecated
   */
  'block-spacing'?: Linter.RuleEntry<BlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.org/docs/latest/rules/brace-style
   * @deprecated
   */
  'brace-style'?: Linter.RuleEntry<BraceStyle>
  /**
   * Require `return` statements after callbacks
   * @see https://eslint.org/docs/latest/rules/callback-return
   * @deprecated
   */
  'callback-return'?: Linter.RuleEntry<CallbackReturn>
  /**
   * Enforce camelcase naming convention
   * @see https://eslint.org/docs/latest/rules/camelcase
   */
  'camelcase'?: Linter.RuleEntry<Camelcase>
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   * @see https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments'?: Linter.RuleEntry<CapitalizedComments>
  /**
   * Enforce that class methods utilize `this`
   * @see https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  'class-methods-use-this'?: Linter.RuleEntry<ClassMethodsUseThis>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.org/docs/latest/rules/comma-dangle
   * @deprecated
   */
  'comma-dangle'?: Linter.RuleEntry<CommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.org/docs/latest/rules/comma-spacing
   * @deprecated
   */
  'comma-spacing'?: Linter.RuleEntry<CommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.org/docs/latest/rules/comma-style
   * @deprecated
   */
  'comma-style'?: Linter.RuleEntry<CommaStyle>
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   * @see https://eslint.org/docs/latest/rules/complexity
   */
  'complexity'?: Linter.RuleEntry<Complexity>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.org/docs/latest/rules/computed-property-spacing
   * @deprecated
   */
  'computed-property-spacing'?: Linter.RuleEntry<ComputedPropertySpacing>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return'?: Linter.RuleEntry<ConsistentReturn>
  /**
   * Enforce consistent naming when capturing the current execution context
   * @see https://eslint.org/docs/latest/rules/consistent-this
   */
  'consistent-this'?: Linter.RuleEntry<ConsistentThis>
  /**
   * Require `super()` calls in constructors
   * @see https://eslint.org/docs/latest/rules/constructor-super
   */
  'constructor-super'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent brace style for all control statements
   * @see https://eslint.org/docs/latest/rules/curly
   */
  'curly'?: Linter.RuleEntry<Curly>
  /**
   * Require `default` cases in `switch` statements
   * @see https://eslint.org/docs/latest/rules/default-case
   */
  'default-case'?: Linter.RuleEntry<DefaultCase>
  /**
   * Enforce `default` clauses in `switch` statements to be last
   * @see https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce default parameters to be last
   * @see https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.org/docs/latest/rules/dot-location
   * @deprecated
   */
  'dot-location'?: Linter.RuleEntry<DotLocation>
  /**
   * Enforce dot notation whenever possible
   * @see https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation'?: Linter.RuleEntry<DotNotation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.org/docs/latest/rules/eol-last
   * @deprecated
   */
  'eol-last'?: Linter.RuleEntry<EolLast>
  /**
   * Require the use of `===` and `!==`
   * @see https://eslint.org/docs/latest/rules/eqeqeq
   */
  'eqeqeq'?: Linter.RuleEntry<Eqeqeq>
  /**
   * Enforce `for` loop update clause moving the counter in the right direction
   * @see https://eslint.org/docs/latest/rules/for-direction
   */
  'for-direction'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.org/docs/latest/rules/func-call-spacing
   * @deprecated
   */
  'func-call-spacing'?: Linter.RuleEntry<FuncCallSpacing>
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   * @see https://eslint.org/docs/latest/rules/func-name-matching
   */
  'func-name-matching'?: Linter.RuleEntry<FuncNameMatching>
  /**
   * Require or disallow named `function` expressions
   * @see https://eslint.org/docs/latest/rules/func-names
   */
  'func-names'?: Linter.RuleEntry<FuncNames>
  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style'?: Linter.RuleEntry<FuncStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
   * @deprecated
   */
  'function-call-argument-newline'?: Linter.RuleEntry<FunctionCallArgumentNewline>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.org/docs/latest/rules/function-paren-newline
   * @deprecated
   */
  'function-paren-newline'?: Linter.RuleEntry<FunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.org/docs/latest/rules/generator-star-spacing
   * @deprecated
   */
  'generator-star-spacing'?: Linter.RuleEntry<GeneratorStarSpacing>
  /**
   * Enforce `return` statements in getters
   * @see https://eslint.org/docs/latest/rules/getter-return
   */
  'getter-return'?: Linter.RuleEntry<GetterReturn>
  /**
   * Require `require()` calls to be placed at top-level module scope
   * @see https://eslint.org/docs/latest/rules/global-require
   * @deprecated
   */
  'global-require'?: Linter.RuleEntry<[]>
  /**
   * Require grouped accessor pairs in object literals and classes
   * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs'?: Linter.RuleEntry<GroupedAccessorPairs>
  /**
   * Require `for-in` loops to include an `if` statement
   * @see https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in'?: Linter.RuleEntry<[]>
  /**
   * Require error handling in callbacks
   * @see https://eslint.org/docs/latest/rules/handle-callback-err
   * @deprecated
   */
  'handle-callback-err'?: Linter.RuleEntry<HandleCallbackErr>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-blacklist
   * @deprecated
   */
  'id-blacklist'?: Linter.RuleEntry<IdBlacklist>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist'?: Linter.RuleEntry<IdDenylist>
  /**
   * Enforce minimum and maximum identifier lengths
   * @see https://eslint.org/docs/latest/rules/id-length
   */
  'id-length'?: Linter.RuleEntry<IdLength>
  /**
   * Require identifiers to match a specified regular expression
   * @see https://eslint.org/docs/latest/rules/id-match
   */
  'id-match'?: Linter.RuleEntry<IdMatch>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
   * @deprecated
   */
  'implicit-arrow-linebreak'?: Linter.RuleEntry<ImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent
   * @deprecated
   */
  'indent'?: Linter.RuleEntry<Indent>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent-legacy
   * @deprecated
   */
  'indent-legacy'?: Linter.RuleEntry<IndentLegacy>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://eslint.org/docs/latest/rules/init-declarations
   */
  'init-declarations'?: Linter.RuleEntry<InitDeclarations>
  /**
   * Enforce emojis are wrapped in `<span>` and provide screen reader access.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md
   * @deprecated
   */
  'jsx-a11y/accessible-emoji'?: Linter.RuleEntry<JsxA11YAccessibleEmoji>
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text'?: Linter.RuleEntry<JsxA11YAltText>
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text'?: Linter.RuleEntry<JsxA11YAnchorAmbiguousText>
  /**
   * Enforce all anchors to contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content'?: Linter.RuleEntry<JsxA11YAnchorHasContent>
  /**
   * Enforce all anchors are valid, navigable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid'?: Linter.RuleEntry<JsxA11YAnchorIsValid>
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex'?: Linter.RuleEntry<JsxA11YAriaActivedescendantHasTabindex>
  /**
   * Enforce all `aria-*` props are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props'?: Linter.RuleEntry<JsxA11YAriaProps>
  /**
   * Enforce ARIA state and property values are valid.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes'?: Linter.RuleEntry<JsxA11YAriaProptypes>
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role'?: Linter.RuleEntry<JsxA11YAriaRole>
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements'?: Linter.RuleEntry<JsxA11YAriaUnsupportedElements>
  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid'?: Linter.RuleEntry<JsxA11YAutocompleteValid>
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events'?: Linter.RuleEntry<JsxA11YClickEventsHaveKeyEvents>
  /**
   * Enforce that a control (an interactive element) has a text label.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   */
  'jsx-a11y/control-has-associated-label'?: Linter.RuleEntry<JsxA11YControlHasAssociatedLabel>
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content'?: Linter.RuleEntry<JsxA11YHeadingHasContent>
  /**
   * Enforce `<html>` element has `lang` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang'?: Linter.RuleEntry<JsxA11YHtmlHasLang>
  /**
   * Enforce iframe elements have a title attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title'?: Linter.RuleEntry<JsxA11YIframeHasTitle>
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt'?: Linter.RuleEntry<JsxA11YImgRedundantAlt>
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus'?: Linter.RuleEntry<JsxA11YInteractiveSupportsFocus>
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control'?: Linter.RuleEntry<JsxA11YLabelHasAssociatedControl>
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md
   * @deprecated
   */
  'jsx-a11y/label-has-for'?: Linter.RuleEntry<JsxA11YLabelHasFor>
  /**
   * Enforce lang attribute has a valid value.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md
   */
  'jsx-a11y/lang'?: Linter.RuleEntry<JsxA11YLang>
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption'?: Linter.RuleEntry<JsxA11YMediaHasCaption>
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events'?: Linter.RuleEntry<JsxA11YMouseEventsHaveKeyEvents>
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key'?: Linter.RuleEntry<JsxA11YNoAccessKey>
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md
   */
  'jsx-a11y/no-aria-hidden-on-focusable'?: Linter.RuleEntry<JsxA11YNoAriaHiddenOnFocusable>
  /**
   * Enforce autoFocus prop is not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus'?: Linter.RuleEntry<JsxA11YNoAutofocus>
  /**
   * Enforce distracting elements are not used.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements'?: Linter.RuleEntry<JsxA11YNoDistractingElements>
  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role'?: Linter.RuleEntry<JsxA11YNoInteractiveElementToNoninteractiveRole>
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementInteractions>
  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role'?: Linter.RuleEntry<JsxA11YNoNoninteractiveElementToInteractiveRole>
  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex'?: Linter.RuleEntry<JsxA11YNoNoninteractiveTabindex>
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md
   * @deprecated
   */
  'jsx-a11y/no-onchange'?: Linter.RuleEntry<JsxA11YNoOnchange>
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles'?: Linter.RuleEntry<JsxA11YNoRedundantRoles>
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md
   */
  'jsx-a11y/no-static-element-interactions'?: Linter.RuleEntry<JsxA11YNoStaticElementInteractions>
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md
   */
  'jsx-a11y/prefer-tag-over-role'?: Linter.RuleEntry<JsxA11YPreferTagOverRole>
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md
   */
  'jsx-a11y/role-has-required-aria-props'?: Linter.RuleEntry<JsxA11YRoleHasRequiredAriaProps>
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props'?: Linter.RuleEntry<JsxA11YRoleSupportsAriaProps>
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md
   */
  'jsx-a11y/scope'?: Linter.RuleEntry<JsxA11YScope>
  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive'?: Linter.RuleEntry<JsxA11YTabindexNoPositive>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.org/docs/latest/rules/jsx-quotes
   * @deprecated
   */
  'jsx-quotes'?: Linter.RuleEntry<JsxQuotes>
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   * @see https://eslint.org/docs/latest/rules/key-spacing
   * @deprecated
   */
  'key-spacing'?: Linter.RuleEntry<KeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.org/docs/latest/rules/keyword-spacing
   * @deprecated
   */
  'keyword-spacing'?: Linter.RuleEntry<KeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.org/docs/latest/rules/line-comment-position
   * @deprecated
   */
  'line-comment-position'?: Linter.RuleEntry<LineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.org/docs/latest/rules/linebreak-style
   * @deprecated
   */
  'linebreak-style'?: Linter.RuleEntry<LinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.org/docs/latest/rules/lines-around-comment
   * @deprecated
   */
  'lines-around-comment'?: Linter.RuleEntry<LinesAroundComment>
  /**
   * Require or disallow newlines around directives
   * @see https://eslint.org/docs/latest/rules/lines-around-directive
   * @deprecated
   */
  'lines-around-directive'?: Linter.RuleEntry<LinesAroundDirective>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.org/docs/latest/rules/lines-between-class-members
   * @deprecated
   */
  'lines-between-class-members'?: Linter.RuleEntry<LinesBetweenClassMembers>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
   */
  'logical-assignment-operators'?: Linter.RuleEntry<LogicalAssignmentOperators>
  /**
   * Enforce a maximum number of classes per file
   * @see https://eslint.org/docs/latest/rules/max-classes-per-file
   */
  'max-classes-per-file'?: Linter.RuleEntry<MaxClassesPerFile>
  /**
   * Enforce a maximum depth that blocks can be nested
   * @see https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth'?: Linter.RuleEntry<MaxDepth>
  /**
   * Enforce a maximum line length
   * @see https://eslint.org/docs/latest/rules/max-len
   * @deprecated
   */
  'max-len'?: Linter.RuleEntry<MaxLen>
  /**
   * Enforce a maximum number of lines per file
   * @see https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines'?: Linter.RuleEntry<MaxLines>
  /**
   * Enforce a maximum number of lines of code in a function
   * @see https://eslint.org/docs/latest/rules/max-lines-per-function
   */
  'max-lines-per-function'?: Linter.RuleEntry<MaxLinesPerFunction>
  /**
   * Enforce a maximum depth that callbacks can be nested
   * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks'?: Linter.RuleEntry<MaxNestedCallbacks>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://eslint.org/docs/latest/rules/max-params
   */
  'max-params'?: Linter.RuleEntry<MaxParams>
  /**
   * Enforce a maximum number of statements allowed in function blocks
   * @see https://eslint.org/docs/latest/rules/max-statements
   */
  'max-statements'?: Linter.RuleEntry<MaxStatements>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.org/docs/latest/rules/max-statements-per-line
   * @deprecated
   */
  'max-statements-per-line'?: Linter.RuleEntry<MaxStatementsPerLine>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.org/docs/latest/rules/multiline-comment-style
   * @deprecated
   */
  'multiline-comment-style'?: Linter.RuleEntry<MultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.org/docs/latest/rules/multiline-ternary
   * @deprecated
   */
  'multiline-ternary'?: Linter.RuleEntry<MultilineTernary>
  /**
   * Require constructor names to begin with a capital letter
   * @see https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap'?: Linter.RuleEntry<NewCap>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.org/docs/latest/rules/new-parens
   * @deprecated
   */
  'new-parens'?: Linter.RuleEntry<NewParens>
  /**
   * Require or disallow an empty line after variable declarations
   * @see https://eslint.org/docs/latest/rules/newline-after-var
   * @deprecated
   */
  'newline-after-var'?: Linter.RuleEntry<NewlineAfterVar>
  /**
   * Require an empty line before `return` statements
   * @see https://eslint.org/docs/latest/rules/newline-before-return
   * @deprecated
   */
  'newline-before-return'?: Linter.RuleEntry<[]>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
   * @deprecated
   */
  'newline-per-chained-call'?: Linter.RuleEntry<NewlinePerChainedCall>
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   * @see https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array` constructors
   * @see https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using an async function as a Promise executor
   * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
   */
  'no-async-promise-executor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `await` inside of loops
   * @see https://eslint.org/docs/latest/rules/no-await-in-loop
   */
  'no-await-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators
   * @see https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise'?: Linter.RuleEntry<NoBitwise>
  /**
   * Disallow use of the `Buffer()` constructor
   * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
   * @deprecated
   */
  'no-buffer-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   * @see https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller'?: Linter.RuleEntry<[]>
  /**
   * Disallow lexical declarations in case clauses
   * @see https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-catch-shadow
   * @deprecated
   */
  'no-catch-shadow'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning class members
   * @see https://eslint.org/docs/latest/rules/no-class-assign
   */
  'no-class-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing against `-0`
   * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignment operators in conditional expressions
   * @see https://eslint.org/docs/latest/rules/no-cond-assign
   */
  'no-cond-assign'?: Linter.RuleEntry<NoCondAssign>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
   * @deprecated
   */
  'no-confusing-arrow'?: Linter.RuleEntry<NoConfusingArrow>
  /**
   * Disallow the use of `console`
   * @see https://eslint.org/docs/latest/rules/no-console
   */
  'no-console'?: Linter.RuleEntry<NoConsole>
  /**
   * Disallow reassigning `const` variables
   * @see https://eslint.org/docs/latest/rules/no-const-assign
   */
  'no-const-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow expressions where the operation doesn't affect the value
   * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow constant expressions in conditions
   * @see https://eslint.org/docs/latest/rules/no-constant-condition
   */
  'no-constant-condition'?: Linter.RuleEntry<NoConstantCondition>
  /**
   * Disallow returning value from constructor
   * @see https://eslint.org/docs/latest/rules/no-constructor-return
   */
  'no-constructor-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow `continue` statements
   * @see https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow control characters in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-control-regex
   */
  'no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `debugger`
   * @see https://eslint.org/docs/latest/rules/no-debugger
   */
  'no-debugger'?: Linter.RuleEntry<[]>
  /**
   * Disallow deleting variables
   * @see https://eslint.org/docs/latest/rules/no-delete-var
   */
  'no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   * @see https://eslint.org/docs/latest/rules/no-div-regex
   */
  'no-div-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate arguments in `function` definitions
   * @see https://eslint.org/docs/latest/rules/no-dupe-args
   */
  'no-dupe-args'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate class members
   * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  'no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate conditions in if-else-if chains
   * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
   */
  'no-dupe-else-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate keys in object literals
   * @see https://eslint.org/docs/latest/rules/no-dupe-keys
   */
  'no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate case labels
   * @see https://eslint.org/docs/latest/rules/no-duplicate-case
   */
  'no-duplicate-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate module imports
   * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
   */
  'no-duplicate-imports'?: Linter.RuleEntry<NoDuplicateImports>
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   * @see https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return'?: Linter.RuleEntry<NoElseReturn>
  /**
   * Disallow empty block statements
   * @see https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty'?: Linter.RuleEntry<NoEmpty>
  /**
   * Disallow empty character classes in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-empty-character-class
   */
  'no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://eslint.org/docs/latest/rules/no-empty-function
   */
  'no-empty-function'?: Linter.RuleEntry<NoEmptyFunction>
  /**
   * Disallow empty destructuring patterns
   * @see https://eslint.org/docs/latest/rules/no-empty-pattern
   */
  'no-empty-pattern'?: Linter.RuleEntry<NoEmptyPattern>
  /**
   * Disallow empty static blocks
   * @see https://eslint.org/docs/latest/rules/no-empty-static-block
   */
  'no-empty-static-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow `null` comparisons without type-checking operators
   * @see https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`
   * @see https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval'?: Linter.RuleEntry<NoEval>
  /**
   * Disallow reassigning exceptions in `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-ex-assign
   */
  'no-ex-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow extending native types
   * @see https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native'?: Linter.RuleEntry<NoExtendNative>
  /**
   * Disallow unnecessary calls to `.bind()`
   * @see https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary boolean casts
   * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast'?: Linter.RuleEntry<NoExtraBooleanCast>
  /**
   * Disallow unnecessary labels
   * @see https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.org/docs/latest/rules/no-extra-parens
   * @deprecated
   */
  'no-extra-parens'?: Linter.RuleEntry<NoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.org/docs/latest/rules/no-extra-semi
   * @deprecated
   */
  'no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow fallthrough of `case` statements
   * @see https://eslint.org/docs/latest/rules/no-fallthrough
   */
  'no-fallthrough'?: Linter.RuleEntry<NoFallthrough>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.org/docs/latest/rules/no-floating-decimal
   * @deprecated
   */
  'no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning `function` declarations
   * @see https://eslint.org/docs/latest/rules/no-func-assign
   */
  'no-func-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign'?: Linter.RuleEntry<NoGlobalAssign>
  /**
   * Disallow shorthand type conversions
   * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion'?: Linter.RuleEntry<NoImplicitCoercion>
  /**
   * Disallow declarations in the global scope
   * @see https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals'?: Linter.RuleEntry<NoImplicitGlobals>
  /**
   * Disallow the use of `eval()`-like methods
   * @see https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to imported bindings
   * @see https://eslint.org/docs/latest/rules/no-import-assign
   */
  'no-import-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow inline comments after code
   * @see https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments'?: Linter.RuleEntry<NoInlineComments>
  /**
   * Disallow variable or `function` declarations in nested blocks
   * @see https://eslint.org/docs/latest/rules/no-inner-declarations
   */
  'no-inner-declarations'?: Linter.RuleEntry<NoInnerDeclarations>
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
   */
  'no-invalid-regexp'?: Linter.RuleEntry<NoInvalidRegexp>
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   * @see https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this'?: Linter.RuleEntry<NoInvalidThis>
  /**
   * Disallow irregular whitespace
   * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace'?: Linter.RuleEntry<NoIrregularWhitespace>
  /**
   * Disallow the use of the `__iterator__` property
   * @see https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator'?: Linter.RuleEntry<[]>
  /**
   * Disallow labels that share a name with a variable
   * @see https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow labeled statements
   * @see https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels'?: Linter.RuleEntry<NoLabels>
  /**
   * Disallow unnecessary nested blocks
   * @see https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   * @see https://eslint.org/docs/latest/rules/no-lonely-if
   */
  'no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   */
  'no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
   */
  'no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers'?: Linter.RuleEntry<NoMagicNumbers>
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
   */
  'no-misleading-character-class'?: Linter.RuleEntry<NoMisleadingCharacterClass>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.org/docs/latest/rules/no-mixed-operators
   * @deprecated
   */
  'no-mixed-operators'?: Linter.RuleEntry<NoMixedOperators>
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   * @see https://eslint.org/docs/latest/rules/no-mixed-requires
   * @deprecated
   */
  'no-mixed-requires'?: Linter.RuleEntry<NoMixedRequires>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
   * @deprecated
   */
  'no-mixed-spaces-and-tabs'?: Linter.RuleEntry<NoMixedSpacesAndTabs>
  /**
   * Disallow use of chained assignment expressions
   * @see https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign'?: Linter.RuleEntry<NoMultiAssign>
  /**
   * Disallow multiple spaces
   * @see https://eslint.org/docs/latest/rules/no-multi-spaces
   * @deprecated
   */
  'no-multi-spaces'?: Linter.RuleEntry<NoMultiSpaces>
  /**
   * Disallow multiline strings
   * @see https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
   * @deprecated
   */
  'no-multiple-empty-lines'?: Linter.RuleEntry<NoMultipleEmptyLines>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-native-reassign
   * @deprecated
   */
  'no-native-reassign'?: Linter.RuleEntry<NoNativeReassign>
  /**
   * Disallow negated conditions
   * @see https://eslint.org/docs/latest/rules/no-negated-condition
   */
  'no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand in `in` expressions
   * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
   * @deprecated
   */
  'no-negated-in-lhs'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions
   * @see https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators outside of assignments or comparisons
   * @see https://eslint.org/docs/latest/rules/no-new
   */
  'no-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Function` object
   * @see https://eslint.org/docs/latest/rules/no-new-func
   */
  'no-new-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with global non-constructor functions
   * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   */
  'no-new-native-nonconstructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` constructors
   * @see https://eslint.org/docs/latest/rules/no-new-object
   * @deprecated
   */
  'no-new-object'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with calls to `require`
   * @see https://eslint.org/docs/latest/rules/no-new-require
   * @deprecated
   */
  'no-new-require'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Symbol` object
   * @see https://eslint.org/docs/latest/rules/no-new-symbol
   * @deprecated
   */
  'no-new-symbol'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   * @see https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling global object properties as functions
   * @see https://eslint.org/docs/latest/rules/no-obj-calls
   */
  'no-obj-calls'?: Linter.RuleEntry<[]>
  /**
   * Disallow calls to the `Object` constructor without an argument
   * @see https://eslint.org/docs/latest/rules/no-object-constructor
   */
  'no-object-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal literals
   * @see https://eslint.org/docs/latest/rules/no-octal
   */
  'no-octal'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning function parameters
   * @see https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign'?: Linter.RuleEntry<NoParamReassign>
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   * @see https://eslint.org/docs/latest/rules/no-path-concat
   * @deprecated
   */
  'no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow the unary operators `++` and `--`
   * @see https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus'?: Linter.RuleEntry<NoPlusplus>
  /**
   * Disallow the use of `process.env`
   * @see https://eslint.org/docs/latest/rules/no-process-env
   * @deprecated
   */
  'no-process-env'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `process.exit()`
   * @see https://eslint.org/docs/latest/rules/no-process-exit
   * @deprecated
   */
  'no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning values from Promise executor functions
   * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
   */
  'no-promise-executor-return'?: Linter.RuleEntry<NoPromiseExecutorReturn>
  /**
   * Disallow the use of the `__proto__` property
   * @see https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
   */
  'no-prototype-builtins'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://eslint.org/docs/latest/rules/no-redeclare
   */
  'no-redeclare'?: Linter.RuleEntry<NoRedeclare>
  /**
   * Disallow multiple spaces in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-regex-spaces
   */
  'no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow specified names in exports
   * @see https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports'?: Linter.RuleEntry<NoRestrictedExports>
  /**
   * Disallow specified global variables
   * @see https://eslint.org/docs/latest/rules/no-restricted-globals
   */
  'no-restricted-globals'?: Linter.RuleEntry<NoRestrictedGlobals>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports'?: Linter.RuleEntry<NoRestrictedImports>
  /**
   * Disallow specified modules when loaded by `require`
   * @see https://eslint.org/docs/latest/rules/no-restricted-modules
   * @deprecated
   */
  'no-restricted-modules'?: Linter.RuleEntry<NoRestrictedModules>
  /**
   * Disallow certain properties on certain objects
   * @see https://eslint.org/docs/latest/rules/no-restricted-properties
   */
  'no-restricted-properties'?: Linter.RuleEntry<NoRestrictedProperties>
  /**
   * Disallow specified syntax
   * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax'?: Linter.RuleEntry<NoRestrictedSyntax>
  /**
   * Disallow assignment operators in `return` statements
   * @see https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign'?: Linter.RuleEntry<NoReturnAssign>
  /**
   * Disallow unnecessary `return await`
   * @see https://eslint.org/docs/latest/rules/no-return-await
   * @deprecated
   */
  'no-return-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs
   * @see https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-assign
   */
  'no-self-assign'?: Linter.RuleEntry<NoSelfAssign>
  /**
   * Disallow comparisons where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-compare
   */
  'no-self-compare'?: Linter.RuleEntry<[]>
  /**
   * Disallow comma operators
   * @see https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences'?: Linter.RuleEntry<NoSequences>
  /**
   * Disallow returning values from setters
   * @see https://eslint.org/docs/latest/rules/no-setter-return
   */
  'no-setter-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-shadow
   */
  'no-shadow'?: Linter.RuleEntry<NoShadow>
  /**
   * Disallow identifiers from shadowing restricted names
   * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names'?: Linter.RuleEntry<NoShadowRestrictedNames>
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   * @see https://eslint.org/docs/latest/rules/no-spaced-func
   * @deprecated
   */
  'no-spaced-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays
   * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
   */
  'no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * Disallow synchronous methods
   * @see https://eslint.org/docs/latest/rules/no-sync
   * @deprecated
   */
  'no-sync'?: Linter.RuleEntry<NoSync>
  /**
   * Disallow all tabs
   * @see https://eslint.org/docs/latest/rules/no-tabs
   * @deprecated
   */
  'no-tabs'?: Linter.RuleEntry<NoTabs>
  /**
   * Disallow template literal placeholder syntax in regular strings
   * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators
   * @see https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   * @see https://eslint.org/docs/latest/rules/no-this-before-super
   */
  'no-this-before-super'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing literals as exceptions
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal'?: Linter.RuleEntry<[]>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
   * @deprecated
   */
  'no-trailing-spaces'?: Linter.RuleEntry<NoTrailingSpaces>
  /**
   * Disallow `let` or `var` variables that are read but never assigned
   * @see https://eslint.org/docs/latest/rules/no-unassigned-vars
   */
  'no-unassigned-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   * @see https://eslint.org/docs/latest/rules/no-undef
   */
  'no-undef'?: Linter.RuleEntry<NoUndef>
  /**
   * Disallow initializing variables to `undefined`
   * @see https://eslint.org/docs/latest/rules/no-undef-init
   */
  'no-undef-init'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `undefined` as an identifier
   * @see https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined'?: Linter.RuleEntry<[]>
  /**
   * Disallow dangling underscores in identifiers
   * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle'?: Linter.RuleEntry<NoUnderscoreDangle>
  /**
   * Disallow confusing multiline expressions
   * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
   */
  'no-unexpected-multiline'?: Linter.RuleEntry<[]>
  /**
   * Disallow unmodified loop conditions
   * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   */
  'no-unmodified-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators when simpler alternatives exist
   * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary'?: Linter.RuleEntry<NoUnneededTernary>
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   * @see https://eslint.org/docs/latest/rules/no-unreachable
   */
  'no-unreachable'?: Linter.RuleEntry<[]>
  /**
   * Disallow loops with a body that allows only one iteration
   * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
   */
  'no-unreachable-loop'?: Linter.RuleEntry<NoUnreachableLoop>
  /**
   * Disallow control flow statements in `finally` blocks
   * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
   */
  'no-unsafe-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand of relational operators
   * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
   */
  'no-unsafe-negation'?: Linter.RuleEntry<NoUnsafeNegation>
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   */
  'no-unsafe-optional-chaining'?: Linter.RuleEntry<NoUnsafeOptionalChaining>
  /**
   * Disallow unused expressions
   * @see https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions'?: Linter.RuleEntry<NoUnusedExpressions>
  /**
   * Disallow unused labels
   * @see https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused private class members
   * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
   */
  'no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars'?: Linter.RuleEntry<NoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define'?: Linter.RuleEntry<NoUseBeforeDefine>
  /**
   * Disallow variable assignments when the value is not used
   * @see https://eslint.org/docs/latest/rules/no-useless-assignment
   */
  'no-useless-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless backreferences in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-useless-backreference
   */
  'no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   * @see https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary computed property keys in objects and classes
   * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
   */
  'no-useless-computed-key'?: Linter.RuleEntry<NoUselessComputedKey>
  /**
   * Disallow unnecessary concatenation of literals or template literals
   * @see https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary constructors
   * @see https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary escape characters
   * @see https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape'?: Linter.RuleEntry<NoUselessEscape>
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   * @see https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename'?: Linter.RuleEntry<NoUselessRename>
  /**
   * Disallow redundant return statements
   * @see https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return'?: Linter.RuleEntry<[]>
  /**
   * Require `let` or `const` instead of `var`
   * @see https://eslint.org/docs/latest/rules/no-var
   */
  'no-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow `void` operators
   * @see https://eslint.org/docs/latest/rules/no-void
   */
  'no-void'?: Linter.RuleEntry<NoVoid>
  /**
   * Disallow specified warning terms in comments
   * @see https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments'?: Linter.RuleEntry<NoWarningComments>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
   * @deprecated
   */
  'no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Disallow `with` statements
   * @see https://eslint.org/docs/latest/rules/no-with
   */
  'no-with'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
   * @deprecated
   */
  'nonblock-statement-body-position'?: Linter.RuleEntry<NonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.org/docs/latest/rules/object-curly-newline
   * @deprecated
   */
  'object-curly-newline'?: Linter.RuleEntry<ObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.org/docs/latest/rules/object-curly-spacing
   * @deprecated
   */
  'object-curly-spacing'?: Linter.RuleEntry<ObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.org/docs/latest/rules/object-property-newline
   * @deprecated
   */
  'object-property-newline'?: Linter.RuleEntry<ObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals
   * @see https://eslint.org/docs/latest/rules/object-shorthand
   */
  'object-shorthand'?: Linter.RuleEntry<ObjectShorthand>
  /**
   * Enforce variables to be declared either together or separately in functions
   * @see https://eslint.org/docs/latest/rules/one-var
   */
  'one-var'?: Linter.RuleEntry<OneVar>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   * @deprecated
   */
  'one-var-declaration-per-line'?: Linter.RuleEntry<OneVarDeclarationPerLine>
  /**
   * Require or disallow assignment operator shorthand where possible
   * @see https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment'?: Linter.RuleEntry<OperatorAssignment>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.org/docs/latest/rules/operator-linebreak
   * @deprecated
   */
  'operator-linebreak'?: Linter.RuleEntry<OperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.org/docs/latest/rules/padded-blocks
   * @deprecated
   */
  'padded-blocks'?: Linter.RuleEntry<PaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
   * @deprecated
   */
  'padding-line-between-statements'?: Linter.RuleEntry<PaddingLineBetweenStatements>
  /**
   * Enforce sorted arrays before include method.
   * @see https://perfectionist.dev/rules/sort-array-includes
   */
  'perfectionist/sort-array-includes'?: Linter.RuleEntry<PerfectionistSortArrayIncludes>
  /**
   * Enforce sorted classes.
   * @see https://perfectionist.dev/rules/sort-classes
   */
  'perfectionist/sort-classes'?: Linter.RuleEntry<PerfectionistSortClasses>
  /**
   * Enforce sorted decorators.
   * @see https://perfectionist.dev/rules/sort-decorators
   */
  'perfectionist/sort-decorators'?: Linter.RuleEntry<PerfectionistSortDecorators>
  /**
   * Enforce sorted TypeScript enums.
   * @see https://perfectionist.dev/rules/sort-enums
   */
  'perfectionist/sort-enums'?: Linter.RuleEntry<PerfectionistSortEnums>
  /**
   * Enforce sorted exports.
   * @see https://perfectionist.dev/rules/sort-exports
   */
  'perfectionist/sort-exports'?: Linter.RuleEntry<PerfectionistSortExports>
  /**
   * Enforce sorted heritage clauses.
   * @see https://perfectionist.dev/rules/sort-heritage-clauses
   */
  'perfectionist/sort-heritage-clauses'?: Linter.RuleEntry<PerfectionistSortHeritageClauses>
  /**
   * Enforce sorted imports.
   * @see https://perfectionist.dev/rules/sort-imports
   */
  'perfectionist/sort-imports'?: Linter.RuleEntry<PerfectionistSortImports>
  /**
   * Enforce sorted interface properties.
   * @see https://perfectionist.dev/rules/sort-interfaces
   */
  'perfectionist/sort-interfaces'?: Linter.RuleEntry<PerfectionistSortInterfaces>
  /**
   * Enforce sorted intersection types.
   * @see https://perfectionist.dev/rules/sort-intersection-types
   */
  'perfectionist/sort-intersection-types'?: Linter.RuleEntry<PerfectionistSortIntersectionTypes>
  /**
   * Enforce sorted JSX props.
   * @see https://perfectionist.dev/rules/sort-jsx-props
   */
  'perfectionist/sort-jsx-props'?: Linter.RuleEntry<PerfectionistSortJsxProps>
  /**
   * Enforce sorted Map elements.
   * @see https://perfectionist.dev/rules/sort-maps
   */
  'perfectionist/sort-maps'?: Linter.RuleEntry<PerfectionistSortMaps>
  /**
   * Enforce sorted modules.
   * @see https://perfectionist.dev/rules/sort-modules
   */
  'perfectionist/sort-modules'?: Linter.RuleEntry<PerfectionistSortModules>
  /**
   * Enforce sorted named exports.
   * @see https://perfectionist.dev/rules/sort-named-exports
   */
  'perfectionist/sort-named-exports'?: Linter.RuleEntry<PerfectionistSortNamedExports>
  /**
   * Enforce sorted named imports.
   * @see https://perfectionist.dev/rules/sort-named-imports
   */
  'perfectionist/sort-named-imports'?: Linter.RuleEntry<PerfectionistSortNamedImports>
  /**
   * Enforce sorted object types.
   * @see https://perfectionist.dev/rules/sort-object-types
   */
  'perfectionist/sort-object-types'?: Linter.RuleEntry<PerfectionistSortObjectTypes>
  /**
   * Enforce sorted objects.
   * @see https://perfectionist.dev/rules/sort-objects
   */
  'perfectionist/sort-objects'?: Linter.RuleEntry<PerfectionistSortObjects>
  /**
   * Enforce sorted sets.
   * @see https://perfectionist.dev/rules/sort-sets
   */
  'perfectionist/sort-sets'?: Linter.RuleEntry<PerfectionistSortSets>
  /**
   * Enforce sorted switch cases.
   * @see https://perfectionist.dev/rules/sort-switch-case
   */
  'perfectionist/sort-switch-case'?: Linter.RuleEntry<PerfectionistSortSwitchCase>
  /**
   * Enforce sorted union types.
   * @see https://perfectionist.dev/rules/sort-union-types
   */
  'perfectionist/sort-union-types'?: Linter.RuleEntry<PerfectionistSortUnionTypes>
  /**
   * Enforce sorted variable declarations.
   * @see https://perfectionist.dev/rules/sort-variable-declarations
   */
  'perfectionist/sort-variable-declarations'?: Linter.RuleEntry<PerfectionistSortVariableDeclarations>
  /**
   * Require using arrow functions for callbacks
   * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback'?: Linter.RuleEntry<PreferArrowCallback>
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   * @see https://eslint.org/docs/latest/rules/prefer-const
   */
  'prefer-const'?: Linter.RuleEntry<PreferConst>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring'?: Linter.RuleEntry<PreferDestructuring>
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using named capture group in regular expression
   * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
   */
  'prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
   * @see https://eslint.org/docs/latest/rules/prefer-object-spread
   */
  'prefer-object-spread'?: Linter.RuleEntry<[]>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors'?: Linter.RuleEntry<PreferPromiseRejectErrors>
  /**
   * Require `Reflect` methods where applicable
   * @see https://eslint.org/docs/latest/rules/prefer-reflect
   * @deprecated
   */
  'prefer-reflect'?: Linter.RuleEntry<PreferReflect>
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
   */
  'prefer-regex-literals'?: Linter.RuleEntry<PreferRegexLiterals>
  /**
   * Require rest parameters instead of `arguments`
   * @see https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params'?: Linter.RuleEntry<[]>
  /**
   * Require spread operators instead of `.apply()`
   * @see https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation
   * @see https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template'?: Linter.RuleEntry<[]>
  /**
   * Require quotes around object literal property names
   * @see https://eslint.org/docs/latest/rules/quote-props
   * @deprecated
   */
  'quote-props'?: Linter.RuleEntry<QuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.org/docs/latest/rules/quotes
   * @deprecated
   */
  'quotes'?: Linter.RuleEntry<Quotes>
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   * @see https://eslint.org/docs/latest/rules/radix
   */
  'radix'?: Linter.RuleEntry<Radix>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * enforces the Rules of Hooks
   * @see https://reactjs.org/docs/hooks-rules.html
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<[]>
  'react-refresh/only-export-components'?: Linter.RuleEntry<ReactRefreshOnlyExportComponents>
  /**
   * Enforces consistent naming for boolean props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md
   */
  'react/boolean-prop-naming'?: Linter.RuleEntry<ReactBooleanPropNaming>
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
   */
  'react/button-has-type'?: Linter.RuleEntry<ReactButtonHasType>
  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md
   */
  'react/checked-requires-onchange-or-readonly'?: Linter.RuleEntry<ReactCheckedRequiresOnchangeOrReadonly>
  /**
   * Enforce all defaultProps have a corresponding non-required PropType
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md
   */
  'react/default-props-match-prop-types'?: Linter.RuleEntry<ReactDefaultPropsMatchPropTypes>
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment'?: Linter.RuleEntry<ReactDestructuringAssignment>
  /**
   * Disallow missing displayName in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md
   */
  'react/display-name'?: Linter.RuleEntry<ReactDisplayName>
  /**
   * Disallow certain props on components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md
   */
  'react/forbid-component-props'?: Linter.RuleEntry<ReactForbidComponentProps>
  /**
   * Disallow certain props on DOM Nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md
   */
  'react/forbid-dom-props'?: Linter.RuleEntry<ReactForbidDomProps>
  /**
   * Disallow certain elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md
   */
  'react/forbid-elements'?: Linter.RuleEntry<ReactForbidElements>
  /**
   * Disallow using another component's propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md
   */
  'react/forbid-foreign-prop-types'?: Linter.RuleEntry<ReactForbidForeignPropTypes>
  /**
   * Disallow certain propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md
   */
  'react/forbid-prop-types'?: Linter.RuleEntry<ReactForbidPropTypes>
  /**
   * Require all forwardRef components include a ref parameter
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forward-ref-uses-ref.md
   */
  'react/forward-ref-uses-ref'?: Linter.RuleEntry<[]>
  /**
   * Enforce a specific function type for function components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
   */
  'react/function-component-definition'?: Linter.RuleEntry<ReactFunctionComponentDefinition>
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state'?: Linter.RuleEntry<ReactHookUseState>
  /**
   * Enforce sandbox attribute on iframe elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md
   */
  'react/iframe-missing-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Enforce boolean attributes notation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md
   */
  'react/jsx-boolean-value'?: Linter.RuleEntry<ReactJsxBooleanValue>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md
   */
  'react/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location'?: Linter.RuleEntry<ReactJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md
   */
  'react/jsx-closing-tag-location'?: Linter.RuleEntry<ReactJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence'?: Linter.RuleEntry<ReactJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md
   */
  'react/jsx-curly-newline'?: Linter.RuleEntry<ReactJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md
   */
  'react/jsx-curly-spacing'?: Linter.RuleEntry<ReactJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md
   */
  'react/jsx-equals-spacing'?: Linter.RuleEntry<ReactJsxEqualsSpacing>
  /**
   * Disallow file extensions that may contain JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension'?: Linter.RuleEntry<ReactJsxFilenameExtension>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
   */
  'react/jsx-first-prop-new-line'?: Linter.RuleEntry<ReactJsxFirstPropNewLine>
  /**
   * Enforce shorthand or standard form for React fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments'?: Linter.RuleEntry<ReactJsxFragments>
  /**
   * Enforce event handler naming conventions in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md
   */
  'react/jsx-handler-names'?: Linter.RuleEntry<ReactJsxHandlerNames>
  /**
   * Enforce JSX indentation
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
   */
  'react/jsx-indent'?: Linter.RuleEntry<ReactJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
   */
  'react/jsx-indent-props'?: Linter.RuleEntry<ReactJsxIndentProps>
  /**
   * Disallow missing `key` props in iterators/collection literals
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md
   */
  'react/jsx-key'?: Linter.RuleEntry<ReactJsxKey>
  /**
   * Enforce JSX maximum depth
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md
   */
  'react/jsx-max-depth'?: Linter.RuleEntry<ReactJsxMaxDepth>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
   */
  'react/jsx-max-props-per-line'?: Linter.RuleEntry<ReactJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md
   */
  'react/jsx-newline'?: Linter.RuleEntry<ReactJsxNewline>
  /**
   * Disallow `.bind()` or arrow functions in JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md
   */
  'react/jsx-no-bind'?: Linter.RuleEntry<ReactJsxNoBind>
  /**
   * Disallow comments from being inserted as text nodes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md
   */
  'react/jsx-no-constructed-context-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate properties in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md
   */
  'react/jsx-no-duplicate-props'?: Linter.RuleEntry<ReactJsxNoDuplicateProps>
  /**
   * Disallow problematic leaked values from being rendered
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render'?: Linter.RuleEntry<ReactJsxNoLeakedRender>
  /**
   * Disallow usage of string literals in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md
   */
  'react/jsx-no-literals'?: Linter.RuleEntry<ReactJsxNoLiterals>
  /**
   * Disallow usage of `javascript:` URLs
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
   */
  'react/jsx-no-script-url'?: Linter.RuleEntry<ReactJsxNoScriptUrl>
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
   */
  'react/jsx-no-target-blank'?: Linter.RuleEntry<ReactJsxNoTargetBlank>
  /**
   * Disallow undeclared variables in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md
   */
  'react/jsx-no-undef'?: Linter.RuleEntry<ReactJsxNoUndef>
  /**
   * Disallow unnecessary fragments
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Require one JSX element per line
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line'?: Linter.RuleEntry<ReactJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md
   */
  'react/jsx-pascal-case'?: Linter.RuleEntry<ReactJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  'react/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading the same identifier multiple times
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spread-multi.md
   */
  'react/jsx-props-no-spread-multi'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX prop spreading
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md
   */
  'react/jsx-props-no-spreading'?: Linter.RuleEntry<ReactJsxPropsNoSpreading>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md
   * @deprecated
   */
  'react/jsx-sort-default-props'?: Linter.RuleEntry<ReactJsxSortDefaultProps>
  /**
   * Enforce props alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
   */
  'react/jsx-sort-props'?: Linter.RuleEntry<ReactJsxSortProps>
  /**
   * Enforce spacing before closing bracket in JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md
   * @deprecated
   */
  'react/jsx-space-before-closing'?: Linter.RuleEntry<ReactJsxSpaceBeforeClosing>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md
   */
  'react/jsx-tag-spacing'?: Linter.RuleEntry<ReactJsxTagSpacing>
  /**
   * Disallow React to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md
   */
  'react/jsx-uses-react'?: Linter.RuleEntry<[]>
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md
   */
  'react/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md
   */
  'react/jsx-wrap-multilines'?: Linter.RuleEntry<ReactJsxWrapMultilines>
  /**
   * Disallow when this.state is accessed within setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md
   */
  'react/no-adjacent-inline-elements'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of Array index in keys
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Lifecycle methods should be methods on the prototype, not class fields
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md
   */
  'react/no-arrow-function-lifecycle'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing of children as props
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md
   */
  'react/no-children-prop'?: Linter.RuleEntry<ReactNoChildrenProp>
  /**
   * Disallow usage of dangerous JSX properties
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md
   */
  'react/no-danger'?: Linter.RuleEntry<ReactNoDanger>
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md
   */
  'react/no-danger-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of deprecated methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md
   */
  'react/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentDidMount
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md
   */
  'react/no-did-mount-set-state'?: Linter.RuleEntry<ReactNoDidMountSetState>
  /**
   * Disallow usage of setState in componentDidUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md
   */
  'react/no-did-update-set-state'?: Linter.RuleEntry<ReactNoDidUpdateSetState>
  /**
   * Disallow direct mutation of this.state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of findDOMNode
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md
   */
  'react/no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of invalid attributes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md
   */
  'react/no-invalid-html-attribute'?: Linter.RuleEntry<ReactNoInvalidHtmlAttribute>
  /**
   * Disallow usage of isMounted
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md
   */
  'react/no-is-mounted'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple component definition per file
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md
   */
  'react/no-multi-comp'?: Linter.RuleEntry<ReactNoMultiComp>
  /**
   * Enforce that namespaces are not used in React elements
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md
   */
  'react/no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of referential-type variables as default param in functional component
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md
   */
  'react/no-object-type-as-default-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of the return value of ReactDOM.render
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md
   */
  'react/no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md
   */
  'react/no-set-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow using string references
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md
   */
  'react/no-string-refs'?: Linter.RuleEntry<ReactNoStringRefs>
  /**
   * Disallow `this` from being used in stateless functional components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md
   */
  'react/no-this-in-sfc'?: Linter.RuleEntry<[]>
  /**
   * Disallow common typos
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md
   */
  'react/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Disallow unescaped HTML entities from appearing in markup
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md
   */
  'react/no-unescaped-entities'?: Linter.RuleEntry<ReactNoUnescapedEntities>
  /**
   * Disallow usage of unknown DOM property
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md
   */
  'react/no-unknown-property'?: Linter.RuleEntry<ReactNoUnknownProperty>
  /**
   * Disallow usage of unsafe lifecycle methods
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md
   */
  'react/no-unsafe'?: Linter.RuleEntry<ReactNoUnsafe>
  /**
   * Disallow creating unstable components inside components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md
   */
  'react/no-unstable-nested-components'?: Linter.RuleEntry<ReactNoUnstableNestedComponents>
  /**
   * Disallow declaring unused methods of component class
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md
   */
  'react/no-unused-class-component-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow definitions of unused propTypes
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md
   */
  'react/no-unused-prop-types'?: Linter.RuleEntry<ReactNoUnusedPropTypes>
  /**
   * Disallow definitions of unused state
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of setState in componentWillUpdate
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
   */
  'react/no-will-update-set-state'?: Linter.RuleEntry<ReactNoWillUpdateSetState>
  /**
   * Enforce ES5 or ES6 class for React Components
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md
   */
  'react/prefer-es6-class'?: Linter.RuleEntry<ReactPreferEs6Class>
  /**
   * Prefer exact proptype definitions
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md
   */
  'react/prefer-exact-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce that props are read-only
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md
   */
  'react/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * Enforce stateless components to be written as a pure function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md
   */
  'react/prefer-stateless-function'?: Linter.RuleEntry<ReactPreferStatelessFunction>
  /**
   * Disallow missing props validation in a React component definition
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
   */
  'react/prop-types'?: Linter.RuleEntry<ReactPropTypes>
  /**
   * Disallow missing React when using JSX
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md
   */
  'react/react-in-jsx-scope'?: Linter.RuleEntry<[]>
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md
   */
  'react/require-default-props'?: Linter.RuleEntry<ReactRequireDefaultProps>
  /**
   * Enforce React components to have a shouldComponentUpdate method
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md
   */
  'react/require-optimization'?: Linter.RuleEntry<ReactRequireOptimization>
  /**
   * Enforce ES5 or ES6 class for returning value in render function
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md
   */
  'react/require-render-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow extra closing tags for components without children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md
   */
  'react/self-closing-comp'?: Linter.RuleEntry<ReactSelfClosingComp>
  /**
   * Enforce component methods order
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md
   */
  'react/sort-comp'?: Linter.RuleEntry<ReactSortComp>
  /**
   * Enforce defaultProps declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md
   */
  'react/sort-default-props'?: Linter.RuleEntry<ReactSortDefaultProps>
  /**
   * Enforce propTypes declarations alphabetical sorting
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md
   */
  'react/sort-prop-types'?: Linter.RuleEntry<ReactSortPropTypes>
  /**
   * Enforce class component state initialization style
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor'?: Linter.RuleEntry<ReactStateInConstructor>
  /**
   * Enforces where React component static properties should be positioned.
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md
   */
  'react/static-property-placement'?: Linter.RuleEntry<ReactStaticPropertyPlacement>
  /**
   * Enforce style prop value is an object
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md
   */
  'react/style-prop-object'?: Linter.RuleEntry<ReactStylePropObject>
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children
   * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md
   */
  'react/void-dom-elements-no-children'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   * @see https://eslint.org/docs/latest/rules/require-atomic-updates
   */
  'require-atomic-updates'?: Linter.RuleEntry<RequireAtomicUpdates>
  /**
   * Disallow async functions which have no `await` expression
   * @see https://eslint.org/docs/latest/rules/require-await
   */
  'require-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `u` or `v` flag on regular expressions
   * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
   */
  'require-unicode-regexp'?: Linter.RuleEntry<RequireUnicodeRegexp>
  /**
   * Require generator functions to contain `yield`
   * @see https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield'?: Linter.RuleEntry<[]>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
   * @deprecated
   */
  'rest-spread-spacing'?: Linter.RuleEntry<RestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.org/docs/latest/rules/semi
   * @deprecated
   */
  'semi'?: Linter.RuleEntry<Semi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.org/docs/latest/rules/semi-spacing
   * @deprecated
   */
  'semi-spacing'?: Linter.RuleEntry<SemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.org/docs/latest/rules/semi-style
   * @deprecated
   */
  'semi-style'?: Linter.RuleEntry<SemiStyle>
  /**
   * Enforce sorted `import` declarations within modules
   * @see https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports'?: Linter.RuleEntry<SortImports>
  /**
   * Require object keys to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-keys
   */
  'sort-keys'?: Linter.RuleEntry<SortKeys>
  /**
   * Require variables within the same declaration block to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-vars
   */
  'sort-vars'?: Linter.RuleEntry<SortVars>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.org/docs/latest/rules/space-before-blocks
   * @deprecated
   */
  'space-before-blocks'?: Linter.RuleEntry<SpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   * @see https://eslint.org/docs/latest/rules/space-before-function-paren
   * @deprecated
   */
  'space-before-function-paren'?: Linter.RuleEntry<SpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.org/docs/latest/rules/space-in-parens
   * @deprecated
   */
  'space-in-parens'?: Linter.RuleEntry<SpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.org/docs/latest/rules/space-infix-ops
   * @deprecated
   */
  'space-infix-ops'?: Linter.RuleEntry<SpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.org/docs/latest/rules/space-unary-ops
   * @deprecated
   */
  'space-unary-ops'?: Linter.RuleEntry<SpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.org/docs/latest/rules/spaced-comment
   * @deprecated
   */
  'spaced-comment'?: Linter.RuleEntry<SpacedComment>
  /**
   * Require or disallow strict mode directives
   * @see https://eslint.org/docs/latest/rules/strict
   */
  'strict'?: Linter.RuleEntry<Strict>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
   * @deprecated
   */
  'switch-colon-spacing'?: Linter.RuleEntry<SwitchColonSpacing>
  /**
   * Require symbol descriptions
   * @see https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.org/docs/latest/rules/template-curly-spacing
   * @deprecated
   */
  'template-curly-spacing'?: Linter.RuleEntry<TemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.org/docs/latest/rules/template-tag-spacing
   * @deprecated
   */
  'template-tag-spacing'?: Linter.RuleEntry<TemplateTagSpacing>
  /**
   * Require or disallow Unicode byte order mark (BOM)
   * @see https://eslint.org/docs/latest/rules/unicode-bom
   */
  'unicode-bom'?: Linter.RuleEntry<UnicodeBom>
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   * @see https://eslint.org/docs/latest/rules/use-isnan
   */
  'use-isnan'?: Linter.RuleEntry<UseIsnan>
  /**
   * Enforce comparing `typeof` expressions against valid strings
   * @see https://eslint.org/docs/latest/rules/valid-typeof
   */
  'valid-typeof'?: Linter.RuleEntry<ValidTypeof>
  /**
   * Require `var` declarations be placed at the top of their containing scope
   * @see https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.org/docs/latest/rules/wrap-iife
   * @deprecated
   */
  'wrap-iife'?: Linter.RuleEntry<WrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.org/docs/latest/rules/wrap-regex
   * @deprecated
   */
  'wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.org/docs/latest/rules/yield-star-spacing
   * @deprecated
   */
  'yield-star-spacing'?: Linter.RuleEntry<YieldStarSpacing>
  /**
   * Require or disallow "Yoda" conditions
   * @see https://eslint.org/docs/latest/rules/yoda
   */
  'yoda'?: Linter.RuleEntry<Yoda>
}

/* ======= Declarations ======= */
// ----- @stylistic/ts/block-spacing -----
type StylisticTsBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/ts/brace-style -----
type StylisticTsBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/ts/comma-dangle -----
type StylisticTsCommaDangle = []|[(_StylisticTsCommaDangleValue | {
  arrays?: _StylisticTsCommaDangleValueWithIgnore
  objects?: _StylisticTsCommaDangleValueWithIgnore
  imports?: _StylisticTsCommaDangleValueWithIgnore
  exports?: _StylisticTsCommaDangleValueWithIgnore
  functions?: _StylisticTsCommaDangleValueWithIgnore
  importAttributes?: _StylisticTsCommaDangleValueWithIgnore
  dynamicImports?: _StylisticTsCommaDangleValueWithIgnore
  enums?: _StylisticTsCommaDangleValueWithIgnore
  generics?: _StylisticTsCommaDangleValueWithIgnore
  tuples?: _StylisticTsCommaDangleValueWithIgnore
})]
type _StylisticTsCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StylisticTsCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/ts/comma-spacing -----
type StylisticTsCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/ts/func-call-spacing -----
type StylisticTsFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/ts/function-call-spacing -----
type StylisticTsFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/ts/indent -----
type StylisticTsIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/ts/key-spacing -----
type StylisticTsKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/ts/keyword-spacing -----
type StylisticTsKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/ts/lines-around-comment -----
type StylisticTsLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/ts/lines-between-class-members -----
type StylisticTsLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/ts/member-delimiter-style -----
type StylisticTsMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticTsMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticTsMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticTsMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/ts/no-extra-parens -----
type StylisticTsNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
}])
// ----- @stylistic/ts/object-curly-newline -----
type StylisticTsObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/ts/object-curly-spacing -----
type StylisticTsObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- @stylistic/ts/object-property-newline -----
type StylisticTsObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- @stylistic/ts/padding-line-between-statements -----
type _StylisticTsPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylisticTsPaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload") | [("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"), ...(("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"))[]])
type StylisticTsPaddingLineBetweenStatements = {
  blankLine: _StylisticTsPaddingLineBetweenStatementsPaddingType
  prev: _StylisticTsPaddingLineBetweenStatementsStatementType
  next: _StylisticTsPaddingLineBetweenStatementsStatementType
}[]
// ----- @stylistic/ts/quote-props -----
type StylisticTsQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/ts/quotes -----
type StylisticTsQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/ts/semi -----
type StylisticTsSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/ts/semi-spacing -----
type StylisticTsSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/ts/space-before-blocks -----
type StylisticTsSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- @stylistic/ts/space-before-function-paren -----
type StylisticTsSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/ts/space-infix-ops -----
type StylisticTsSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- @stylistic/ts/type-annotation-spacing -----
type StylisticTsTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
    arrow?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
    variable?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTsTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTsTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @typescript-eslint/array-type -----
type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    accessors?: ("explicit" | "no-public" | "off")
    constructors?: ("explicit" | "no-public" | "off")
    methods?: ("explicit" | "no-public" | "off")
    parameterProperties?: ("explicit" | "no-public" | "off")
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
type TypescriptEslintMemberOrdering = []|[{
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
type TypescriptEslintNoBaseToString = []|[{
  
  checkUnknown?: boolean
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unused-expressions -----
type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-var-requires -----
type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
  [k: string]: unknown | undefined
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
    [k: string]: unknown | undefined
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- accessor-pairs -----
type AccessorPairs = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
}]
// ----- array-bracket-newline -----
type ArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- array-bracket-spacing -----
type ArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- array-callback-return -----
type ArrayCallbackReturn = []|[{
  allowImplicit?: boolean
  checkForEach?: boolean
  allowVoid?: boolean
}]
// ----- array-element-newline -----
type ArrayElementNewline = []|[(_ArrayElementNewlineBasicConfig | {
  ArrayExpression?: _ArrayElementNewlineBasicConfig
  ArrayPattern?: _ArrayElementNewlineBasicConfig
})]
type _ArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- arrow-body-style -----
type ArrowBodyStyle = ([]|[("always" | "never")] | []|["as-needed"]|["as-needed", {
  requireReturnForObjectLiteral?: boolean
}])
// ----- arrow-parens -----
type ArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- arrow-spacing -----
type ArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- astro/jsx-a11y/alt-text -----
type AstroJsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-ambiguous-text -----
type AstroJsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-has-content -----
type AstroJsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/anchor-is-valid -----
type AstroJsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-activedescendant-has-tabindex -----
type AstroJsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-props -----
type AstroJsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-proptypes -----
type AstroJsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-role -----
type AstroJsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/aria-unsupported-elements -----
type AstroJsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/autocomplete-valid -----
type AstroJsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/click-events-have-key-events -----
type AstroJsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/control-has-associated-label -----
type AstroJsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/heading-has-content -----
type AstroJsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/html-has-lang -----
type AstroJsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/iframe-has-title -----
type AstroJsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/img-redundant-alt -----
type AstroJsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/interactive-supports-focus -----
type AstroJsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/label-has-associated-control -----
type AstroJsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/lang -----
type AstroJsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/media-has-caption -----
type AstroJsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/mouse-events-have-key-events -----
type AstroJsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-access-key -----
type AstroJsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-aria-hidden-on-focusable -----
type AstroJsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-autofocus -----
type AstroJsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-distracting-elements -----
type AstroJsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-interactive-element-to-noninteractive-role -----
type AstroJsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-element-interactions -----
type AstroJsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-element-to-interactive-role -----
type AstroJsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-noninteractive-tabindex -----
type AstroJsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/no-redundant-roles -----
type AstroJsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- astro/jsx-a11y/no-static-element-interactions -----
type AstroJsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/prefer-tag-over-role -----
type AstroJsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/role-has-required-aria-props -----
type AstroJsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/role-supports-aria-props -----
type AstroJsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/scope -----
type AstroJsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/jsx-a11y/tabindex-no-positive -----
type AstroJsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- astro/prefer-split-class-list -----
type AstroPreferSplitClassList = []|[{
  splitLiteral?: boolean
}]
// ----- astro/semi -----
type AstroSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- astro/sort-attributes -----
type AstroSortAttributes = []|[{
  type?: ("alphabetical" | "line-length")
  ignoreCase?: boolean
  order?: ("asc" | "desc")
}]
// ----- block-spacing -----
type BlockSpacing = []|[("always" | "never")]
// ----- brace-style -----
type BraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- callback-return -----
type CallbackReturn = []|[string[]]
// ----- camelcase -----
type Camelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- capitalized-comments -----
type CapitalizedComments = []|[("always" | "never")]|[("always" | "never"), ({
  ignorePattern?: string
  ignoreInlineComments?: boolean
  ignoreConsecutiveComments?: boolean
} | {
  line?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
  block?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
})]
// ----- class-methods-use-this -----
type ClassMethodsUseThis = []|[{
  exceptMethods?: string[]
  enforceForClassFields?: boolean
  ignoreOverrideMethods?: boolean
  ignoreClassesWithImplements?: ("all" | "public-fields")
}]
// ----- comma-dangle -----
type CommaDangle = []|[(_CommaDangleValue | {
  arrays?: _CommaDangleValueWithIgnore
  objects?: _CommaDangleValueWithIgnore
  imports?: _CommaDangleValueWithIgnore
  exports?: _CommaDangleValueWithIgnore
  functions?: _CommaDangleValueWithIgnore
})]
type _CommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _CommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- comma-spacing -----
type CommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- comma-style -----
type CommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- complexity -----
type Complexity = []|[(number | {
  maximum?: number
  max?: number
  variant?: ("classic" | "modified")
})]
// ----- computed-property-spacing -----
type ComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- consistent-return -----
type ConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- consistent-this -----
type ConsistentThis = string[]
// ----- curly -----
type Curly = ([]|["all"] | []|[("multi" | "multi-line" | "multi-or-nest")]|[("multi" | "multi-line" | "multi-or-nest"), "consistent"])
// ----- default-case -----
type DefaultCase = []|[{
  commentPattern?: string
}]
// ----- dot-location -----
type DotLocation = []|[("object" | "property")]
// ----- dot-notation -----
type DotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- eol-last -----
type EolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- eqeqeq -----
type Eqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- func-call-spacing -----
type FuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])
// ----- func-name-matching -----
type FuncNameMatching = ([]|[("always" | "never")]|[("always" | "never"), {
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}] | []|[{
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}])
// ----- func-names -----
type FuncNames = []|[_FuncNamesValue]|[_FuncNamesValue, {
  generators?: _FuncNamesValue
}]
type _FuncNamesValue = ("always" | "as-needed" | "never")
// ----- func-style -----
type FuncStyle = []|[("declaration" | "expression")]|[("declaration" | "expression"), {
  allowArrowFunctions?: boolean
  allowTypeAnnotation?: boolean
  overrides?: {
    namedExports?: ("declaration" | "expression" | "ignore")
  }
}]
// ----- function-call-argument-newline -----
type FunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- function-paren-newline -----
type FunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- generator-star-spacing -----
type GeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- getter-return -----
type GetterReturn = []|[{
  allowImplicit?: boolean
}]
// ----- grouped-accessor-pairs -----
type GroupedAccessorPairs = []|[("anyOrder" | "getBeforeSet" | "setBeforeGet")]
// ----- handle-callback-err -----
type HandleCallbackErr = []|[string]
// ----- id-blacklist -----
type IdBlacklist = string[]
// ----- id-denylist -----
type IdDenylist = string[]
// ----- id-length -----
type IdLength = []|[{
  min?: number
  max?: number
  exceptions?: string[]
  exceptionPatterns?: string[]
  properties?: ("always" | "never")
}]
// ----- id-match -----
type IdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
}]
// ----- implicit-arrow-linebreak -----
type ImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- indent -----
type Indent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- indent-legacy -----
type IndentLegacy = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: unknown | undefined
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  FunctionExpression?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  CallExpression?: {
    parameters?: (number | "first")
    [k: string]: unknown | undefined
  }
  ArrayExpression?: (number | "first")
  ObjectExpression?: (number | "first")
}]
// ----- init-declarations -----
type InitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- jsx-a11y/accessible-emoji -----
type JsxA11YAccessibleEmoji = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/alt-text -----
type JsxA11YAltText = []|[{
  elements?: string[]
  img?: string[]
  object?: string[]
  area?: string[]
  "input[type=\"image\"]"?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-ambiguous-text -----
type JsxA11YAnchorAmbiguousText = []|[{
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-has-content -----
type JsxA11YAnchorHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/anchor-is-valid -----
type JsxA11YAnchorIsValid = []|[{
  components?: string[]
  specialLink?: string[]
  
  aspects?: [("noHref" | "invalidHref" | "preferButton"), ...(("noHref" | "invalidHref" | "preferButton"))[]]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-activedescendant-has-tabindex -----
type JsxA11YAriaActivedescendantHasTabindex = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-props -----
type JsxA11YAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-proptypes -----
type JsxA11YAriaProptypes = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-role -----
type JsxA11YAriaRole = []|[{
  allowedInvalidRoles?: string[]
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/aria-unsupported-elements -----
type JsxA11YAriaUnsupportedElements = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/autocomplete-valid -----
type JsxA11YAutocompleteValid = []|[{
  inputComponents?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/click-events-have-key-events -----
type JsxA11YClickEventsHaveKeyEvents = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/control-has-associated-label -----
type JsxA11YControlHasAssociatedLabel = []|[{
  labelAttributes?: string[]
  controlComponents?: string[]
  ignoreElements?: string[]
  ignoreRoles?: string[]
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/heading-has-content -----
type JsxA11YHeadingHasContent = []|[{
  components?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/html-has-lang -----
type JsxA11YHtmlHasLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/iframe-has-title -----
type JsxA11YIframeHasTitle = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/img-redundant-alt -----
type JsxA11YImgRedundantAlt = []|[{
  components?: string[]
  words?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/interactive-supports-focus -----
type JsxA11YInteractiveSupportsFocus = []|[{
  
  tabbable?: ("button" | "checkbox" | "columnheader" | "combobox" | "grid" | "gridcell" | "link" | "listbox" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "radiogroup" | "row" | "rowheader" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "switch" | "tab" | "tablist" | "textbox" | "tree" | "treegrid" | "treeitem" | "doc-backlink" | "doc-biblioref" | "doc-glossref" | "doc-noteref")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-associated-control -----
type JsxA11YLabelHasAssociatedControl = []|[{
  labelComponents?: string[]
  labelAttributes?: string[]
  controlComponents?: string[]
  
  assert?: ("htmlFor" | "nesting" | "both" | "either")
  
  depth?: number
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/label-has-for -----
type JsxA11YLabelHasFor = []|[{
  components?: string[]
  required?: (("nesting" | "id") | {
    
    some: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  } | {
    
    every: ("nesting" | "id")[]
    [k: string]: unknown | undefined
  })
  allowChildren?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/lang -----
type JsxA11YLang = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/media-has-caption -----
type JsxA11YMediaHasCaption = []|[{
  audio?: string[]
  video?: string[]
  track?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/mouse-events-have-key-events -----
type JsxA11YMouseEventsHaveKeyEvents = []|[{
  
  hoverInHandlers?: string[]
  
  hoverOutHandlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-access-key -----
type JsxA11YNoAccessKey = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-aria-hidden-on-focusable -----
type JsxA11YNoAriaHiddenOnFocusable = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-autofocus -----
type JsxA11YNoAutofocus = []|[{
  ignoreNonDOM?: boolean
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-distracting-elements -----
type JsxA11YNoDistractingElements = []|[{
  
  elements?: ("marquee" | "blink")[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-interactive-element-to-noninteractive-role -----
type JsxA11YNoInteractiveElementToNoninteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-interactions -----
type JsxA11YNoNoninteractiveElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-noninteractive-element-to-interactive-role -----
type JsxA11YNoNoninteractiveElementToInteractiveRole = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-noninteractive-tabindex -----
type JsxA11YNoNoninteractiveTabindex = []|[{
  
  roles?: string[]
  
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-onchange -----
type JsxA11YNoOnchange = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/no-redundant-roles -----
type JsxA11YNoRedundantRoles = []|[{
  [k: string]: string[] | undefined
}]
// ----- jsx-a11y/no-static-element-interactions -----
type JsxA11YNoStaticElementInteractions = []|[{
  handlers?: string[]
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/prefer-tag-over-role -----
type JsxA11YPreferTagOverRole = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-has-required-aria-props -----
type JsxA11YRoleHasRequiredAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/role-supports-aria-props -----
type JsxA11YRoleSupportsAriaProps = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/scope -----
type JsxA11YScope = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-a11y/tabindex-no-positive -----
type JsxA11YTabindexNoPositive = []|[{
  [k: string]: unknown | undefined
}]
// ----- jsx-quotes -----
type JsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- key-spacing -----
type KeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- keyword-spacing -----
type KeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- line-comment-position -----
type LineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- linebreak-style -----
type LinebreakStyle = []|[("unix" | "windows")]
// ----- lines-around-comment -----
type LinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- lines-around-directive -----
type LinesAroundDirective = []|[(("always" | "never") | {
  before?: ("always" | "never")
  after?: ("always" | "never")
})]
// ----- lines-between-class-members -----
type LinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
}]
// ----- logical-assignment-operators -----
type LogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- max-classes-per-file -----
type MaxClassesPerFile = []|[(number | {
  ignoreExpressions?: boolean
  max?: number
})]
// ----- max-depth -----
type MaxDepth = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-len -----
type MaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- max-lines -----
type MaxLines = []|[(number | {
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
})]
// ----- max-lines-per-function -----
type MaxLinesPerFunction = []|[({
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
  IIFEs?: boolean
} | number)]
// ----- max-nested-callbacks -----
type MaxNestedCallbacks = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-params -----
type MaxParams = []|[(number | {
  maximum?: number
  max?: number
  
  countVoidThis?: boolean
})]
// ----- max-statements -----
type MaxStatements = []|[(number | {
  maximum?: number
  max?: number
})]|[(number | {
  maximum?: number
  max?: number
}), {
  ignoreTopLevelFunctions?: boolean
}]
// ----- max-statements-per-line -----
type MaxStatementsPerLine = []|[{
  max?: number
}]
// ----- multiline-comment-style -----
type MultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- multiline-ternary -----
type MultilineTernary = []|[("always" | "always-multiline" | "never")]
// ----- new-cap -----
type NewCap = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]
// ----- new-parens -----
type NewParens = []|[("always" | "never")]
// ----- newline-after-var -----
type NewlineAfterVar = []|[("never" | "always")]
// ----- newline-per-chained-call -----
type NewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- no-bitwise -----
type NoBitwise = []|[{
  allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[]
  int32Hint?: boolean
}]
// ----- no-cond-assign -----
type NoCondAssign = []|[("except-parens" | "always")]
// ----- no-confusing-arrow -----
type NoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- no-console -----
type NoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- no-constant-condition -----
type NoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- no-duplicate-imports -----
type NoDuplicateImports = []|[{
  includeExports?: boolean
}]
// ----- no-else-return -----
type NoElseReturn = []|[{
  allowElseIf?: boolean
}]
// ----- no-empty -----
type NoEmpty = []|[{
  allowEmptyCatch?: boolean
}]
// ----- no-empty-function -----
type NoEmptyFunction = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods" | "privateConstructors" | "protectedConstructors" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- no-empty-pattern -----
type NoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- no-eval -----
type NoEval = []|[{
  allowIndirect?: boolean
}]
// ----- no-extend-native -----
type NoExtendNative = []|[{
  exceptions?: string[]
}]
// ----- no-extra-boolean-cast -----
type NoExtraBooleanCast = []|[({
  enforceForInnerExpressions?: boolean
} | {
  enforceForLogicalOperands?: boolean
})]
// ----- no-extra-parens -----
type NoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- no-fallthrough -----
type NoFallthrough = []|[{
  commentPattern?: string
  allowEmptyCase?: boolean
  reportUnusedFallthroughComment?: boolean
}]
// ----- no-global-assign -----
type NoGlobalAssign = []|[{
  exceptions?: string[]
}]
// ----- no-implicit-coercion -----
type NoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- no-implicit-globals -----
type NoImplicitGlobals = []|[{
  lexicalBindings?: boolean
}]
// ----- no-inline-comments -----
type NoInlineComments = []|[{
  ignorePattern?: string
}]
// ----- no-inner-declarations -----
type NoInnerDeclarations = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]
// ----- no-invalid-regexp -----
type NoInvalidRegexp = []|[{
  allowConstructorFlags?: string[]
}]
// ----- no-invalid-this -----
type NoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- no-irregular-whitespace -----
type NoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- no-labels -----
type NoLabels = []|[{
  allowLoop?: boolean
  allowSwitch?: boolean
}]
// ----- no-magic-numbers -----
type NoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  ignoreEnums?: boolean
  ignoreNumericLiteralTypes?: boolean
  ignoreReadonlyClassProperties?: boolean
  ignoreTypeIndexes?: boolean
}]
// ----- no-misleading-character-class -----
type NoMisleadingCharacterClass = []|[{
  allowEscape?: boolean
}]
// ----- no-mixed-operators -----
type NoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- no-mixed-requires -----
type NoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- no-mixed-spaces-and-tabs -----
type NoMixedSpacesAndTabs = []|[("smart-tabs" | true | false)]
// ----- no-multi-assign -----
type NoMultiAssign = []|[{
  ignoreNonDeclaration?: boolean
}]
// ----- no-multi-spaces -----
type NoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
}]
// ----- no-multiple-empty-lines -----
type NoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- no-native-reassign -----
type NoNativeReassign = []|[{
  exceptions?: string[]
}]
// ----- no-param-reassign -----
type NoParamReassign = []|[({
  props?: false
} | {
  props?: true
  ignorePropertyModificationsFor?: string[]
  ignorePropertyModificationsForRegex?: string[]
})]
// ----- no-plusplus -----
type NoPlusplus = []|[{
  allowForLoopAfterthoughts?: boolean
}]
// ----- no-promise-executor-return -----
type NoPromiseExecutorReturn = []|[{
  allowVoid?: boolean
}]
// ----- no-redeclare -----
type NoRedeclare = []|[{
  builtinGlobals?: boolean
}]
// ----- no-restricted-exports -----
type NoRestrictedExports = []|[({
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
} | {
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
  restrictDefaultExports?: {
    direct?: boolean
    named?: boolean
    defaultFrom?: boolean
    namedFrom?: boolean
    namespaceFrom?: boolean
  }
})]
// ----- no-restricted-globals -----
type NoRestrictedGlobals = (string | {
  name: string
  message?: string
})[]
// ----- no-restricted-imports -----
type NoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
  })[]
  patterns?: (string[] | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  })[])
}])
// ----- no-restricted-modules -----
type NoRestrictedModules = ((string | {
  name: string
  message?: string
})[] | {
  paths?: (string | {
    name: string
    message?: string
  })[]
  patterns?: string[]
}[])
// ----- no-restricted-properties -----
type NoRestrictedProperties = ({
  [k: string]: unknown | undefined
} | {
  [k: string]: unknown | undefined
})[]
// ----- no-restricted-syntax -----
type NoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- no-return-assign -----
type NoReturnAssign = []|[("except-parens" | "always")]
// ----- no-self-assign -----
type NoSelfAssign = []|[{
  props?: boolean
}]
// ----- no-sequences -----
type NoSequences = []|[{
  allowInParentheses?: boolean
}]
// ----- no-shadow -----
type NoShadow = []|[{
  builtinGlobals?: boolean
  hoist?: ("all" | "functions" | "never" | "types" | "functions-and-types")
  allow?: string[]
  ignoreOnInitialization?: boolean
  ignoreTypeValueShadow?: boolean
  ignoreFunctionTypeParameterNameValueShadow?: boolean
}]
// ----- no-shadow-restricted-names -----
type NoShadowRestrictedNames = []|[{
  reportGlobalThis?: boolean
}]
// ----- no-sync -----
type NoSync = []|[{
  allowAtRootLevel?: boolean
}]
// ----- no-tabs -----
type NoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- no-trailing-spaces -----
type NoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- no-undef -----
type NoUndef = []|[{
  typeof?: boolean
}]
// ----- no-underscore-dangle -----
type NoUnderscoreDangle = []|[{
  allow?: string[]
  allowAfterThis?: boolean
  allowAfterSuper?: boolean
  allowAfterThisConstructor?: boolean
  enforceInMethodNames?: boolean
  allowFunctionParams?: boolean
  enforceInClassFields?: boolean
  allowInArrayDestructuring?: boolean
  allowInObjectDestructuring?: boolean
}]
// ----- no-unneeded-ternary -----
type NoUnneededTernary = []|[{
  defaultAssignment?: boolean
}]
// ----- no-unreachable-loop -----
type NoUnreachableLoop = []|[{
  ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
}]
// ----- no-unsafe-negation -----
type NoUnsafeNegation = []|[{
  enforceForOrderingRelations?: boolean
}]
// ----- no-unsafe-optional-chaining -----
type NoUnsafeOptionalChaining = []|[{
  disallowArithmeticOperators?: boolean
}]
// ----- no-unused-expressions -----
type NoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- no-unused-vars -----
type NoUnusedVars = []|[(("all" | "local") | {
  vars?: ("all" | "local")
  varsIgnorePattern?: string
  args?: ("all" | "after-used" | "none")
  ignoreRestSiblings?: boolean
  argsIgnorePattern?: string
  caughtErrors?: ("all" | "none")
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreClassWithStaticInitBlock?: boolean
  reportUsedIgnorePattern?: boolean
})]
// ----- no-use-before-define -----
type NoUseBeforeDefine = []|[("nofunc" | {
  functions?: boolean
  classes?: boolean
  variables?: boolean
  allowNamedExports?: boolean
  enums?: boolean
  typedefs?: boolean
  ignoreTypeReferences?: boolean
})]
// ----- no-useless-computed-key -----
type NoUselessComputedKey = []|[{
  enforceForClassMembers?: boolean
}]
// ----- no-useless-escape -----
type NoUselessEscape = []|[{
  allowRegexCharacters?: string[]
}]
// ----- no-useless-rename -----
type NoUselessRename = []|[{
  ignoreDestructuring?: boolean
  ignoreImport?: boolean
  ignoreExport?: boolean
}]
// ----- no-void -----
type NoVoid = []|[{
  allowAsStatement?: boolean
}]
// ----- no-warning-comments -----
type NoWarningComments = []|[{
  terms?: string[]
  location?: ("start" | "anywhere")
  
  decoration?: [string, ...(string)[]]
}]
// ----- nonblock-statement-body-position -----
type NonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- object-curly-newline -----
type ObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- object-curly-spacing -----
type ObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- object-property-newline -----
type ObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- object-shorthand -----
type ObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- one-var -----
type OneVar = []|[(("always" | "never" | "consecutive") | {
  separateRequires?: boolean
  var?: ("always" | "never" | "consecutive")
  let?: ("always" | "never" | "consecutive")
  const?: ("always" | "never" | "consecutive")
} | {
  initialized?: ("always" | "never" | "consecutive")
  uninitialized?: ("always" | "never" | "consecutive")
})]
// ----- one-var-declaration-per-line -----
type OneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- operator-assignment -----
type OperatorAssignment = []|[("always" | "never")]
// ----- operator-linebreak -----
type OperatorLinebreak = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- padded-blocks -----
type PaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- padding-line-between-statements -----
type _PaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _PaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with") | [("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"), ...(("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"))[]])
type PaddingLineBetweenStatements = {
  blankLine: _PaddingLineBetweenStatementsPaddingType
  prev: _PaddingLineBetweenStatementsStatementType
  next: _PaddingLineBetweenStatementsStatementType
}[]
// ----- perfectionist/sort-array-includes -----
type PerfectionistSortArrayIncludes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-classes -----
type PerfectionistSortClasses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
      
      selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "protected" | "private" | "public" | "static" | "abstract" | "override" | "readonly" | "decorated" | "declare" | "optional")[]
    
    selector?: ("accessor-property" | "index-signature" | "constructor" | "static-block" | "get-method" | "set-method" | "function-property" | "property" | "method")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  ignoreCallbackDependenciesPatterns?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-decorators -----
type PerfectionistSortDecorators = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  sortOnParameters?: boolean
  
  sortOnProperties?: boolean
  
  sortOnAccessors?: boolean
  
  sortOnMethods?: boolean
  
  sortOnClasses?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-enums -----
type PerfectionistSortEnums = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  forceNumericSort?: boolean
  
  sortByValue?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-exports -----
type PerfectionistSortExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-heritage-clauses -----
type PerfectionistSortHeritageClauses = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: {
    [k: string]: (string | string[]) | undefined
  }
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-imports -----
type PerfectionistSortImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    
    value?: {
      [k: string]: (string | string[]) | undefined
    }
    
    type?: {
      [k: string]: (string | string[]) | undefined
    }
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
      
      selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("default" | "named" | "require" | "side-effect" | "ts-equals" | "type" | "value" | "wildcard")[]
    
    selector?: ("side-effect-style" | "tsconfig-path" | "side-effect" | "external" | "internal" | "builtin" | "sibling" | "subpath" | "import" | "parent" | "index" | "style" | "type")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  tsconfig?: {
    
    rootDir: string
    
    filename?: string
  }
  
  maxLineLength?: number
  
  sortSideEffects?: boolean
  
  environment?: ("node" | "bun")
  
  tsconfigRootDir?: string
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  internalPattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-interfaces -----
type PerfectionistSortInterfaces = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-intersection-types -----
type PerfectionistSortIntersectionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-jsx-props -----
type PerfectionistSortJsxProps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("shorthand" | "multiline")[]
      
      selector?: ("multiline" | "prop" | "shorthand")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("shorthand" | "multiline")[]
    
    selector?: ("multiline" | "prop" | "shorthand")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    tagMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-maps -----
type PerfectionistSortMaps = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-modules -----
type PerfectionistSortModules = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
      
      selector?: ("enum" | "function" | "interface" | "type" | "class")
      
      decoratorNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[]
    
    selector?: ("enum" | "function" | "interface" | "type" | "class")
    
    decoratorNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- perfectionist/sort-named-exports -----
type PerfectionistSortNamedExports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "export"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "export"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-named-imports -----
type PerfectionistSortNamedImports = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "values-first" | "types-first")
  
  ignoreAlias?: boolean
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("value" | "type")[]
      
      selector?: "import"
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("value" | "type")[]
    
    selector?: "import"
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-object-types -----
type PerfectionistSortObjectTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    sortBy?: ("name" | "value")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      sortBy?: ("name" | "value")
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
      sortBy?: ("name" | "value")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("index-signature" | "member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    sortBy?: ("name" | "value")
  })[])
  
  groupKind?: ("mixed" | "required-first" | "optional-first")
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    declarationMatchesPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  sortBy?: ("name" | "value")
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-objects -----
type PerfectionistSortObjects = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  destructuredObjects?: (boolean | {
    
    groups?: boolean
  })
  customGroups?: ({
    [k: string]: (string | string[]) | undefined
  } | ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      modifiers?: ("optional" | "required" | "multiline")[]
      
      selector?: ("member" | "method" | "multiline" | "property")
      
      elementValuePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    modifiers?: ("optional" | "required" | "multiline")[]
    
    selector?: ("member" | "method" | "multiline" | "property")
    
    elementValuePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[])
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
    
    callingFunctionNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  destructureOnly?: boolean
  
  objectDeclarations?: boolean
  
  styledComponents?: boolean
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  ignorePattern?: (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string))
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-sets -----
type PerfectionistSortSets = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  groupKind?: ("mixed" | "literals-first" | "spreads-first")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("literal" | "spread")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("literal" | "spread")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  useConfigurationIf?: {
    
    allNamesMatchPattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  }
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-switch-case -----
type PerfectionistSortSwitchCase = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
}]
// ----- perfectionist/sort-union-types -----
type PerfectionistSortUnionTypes = {
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("intersection" | "conditional" | "function" | "operator" | "keyword" | "literal" | "nullish" | "import" | "object" | "named" | "tuple" | "union")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}[]
// ----- perfectionist/sort-variable-declarations -----
type PerfectionistSortVariableDeclarations = []|[{
  
  fallbackSort?: {
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  }
  
  specialCharacters?: ("remove" | "trim" | "keep")
  
  ignoreCase?: boolean
  
  alphabet?: string
  
  locales?: (string | string[])
  
  order?: ("asc" | "desc")
  
  type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
  
  customGroups?: ({
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    anyOf?: {
      
      selector?: ("initialized" | "uninitialized")
      
      elementNamePattern?: (({
        
        pattern: string
        
        flags?: string
      } | string)[] | ({
        
        pattern: string
        
        flags?: string
      } | string))
    }[]
  } | {
    newlinesInside?: (("always" | "never") | number)
    
    fallbackSort?: {
      
      order?: ("asc" | "desc")
      
      type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    }
    
    groupName: string
    
    order?: ("asc" | "desc")
    
    type?: ("alphabetical" | "natural" | "line-length" | "custom" | "unsorted")
    
    selector?: ("initialized" | "uninitialized")
    
    elementNamePattern?: (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string))
  })[]
  
  partitionByComment?: (boolean | (({
    
    pattern: string
    
    flags?: string
  } | string)[] | ({
    
    pattern: string
    
    flags?: string
  } | string)) | {
    
    block?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
    
    line?: (boolean | (({
      
      pattern: string
      
      flags?: string
    } | string)[] | ({
      
      pattern: string
      
      flags?: string
    } | string)))
  })
  
  partitionByNewLine?: boolean
  newlinesBetween?: (("ignore" | "always" | "never") | number)
  
  groups?: (string | string[] | {
    newlinesBetween?: (("ignore" | "always" | "never") | number)
    
    commentAbove?: string
  })[]
}]
// ----- prefer-arrow-callback -----
type PreferArrowCallback = []|[{
  allowNamedFunctions?: boolean
  allowUnboundThis?: boolean
}]
// ----- prefer-const -----
type PreferConst = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
}]
// ----- prefer-destructuring -----
type PreferDestructuring = []|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  enforceForRenamedProperties?: boolean
}]
// ----- prefer-promise-reject-errors -----
type PreferPromiseRejectErrors = []|[{
  allowEmptyReject?: boolean
}]
// ----- prefer-reflect -----
type PreferReflect = []|[{
  exceptions?: ("apply" | "call" | "delete" | "defineProperty" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "setPrototypeOf" | "isExtensible" | "getOwnPropertyNames" | "preventExtensions")[]
}]
// ----- prefer-regex-literals -----
type PreferRegexLiterals = []|[{
  disallowRedundantWrapping?: boolean
}]
// ----- quote-props -----
type QuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- quotes -----
type Quotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- radix -----
type Radix = []|[("always" | "as-needed")]
// ----- react-hooks/exhaustive-deps -----
type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
}]
// ----- react-refresh/only-export-components -----
type ReactRefreshOnlyExportComponents = []|[{
  allowExportNames?: string[]
  allowConstantExport?: boolean
  customHOCs?: string[]
  checkJS?: boolean
}]
// ----- react/boolean-prop-naming -----
type ReactBooleanPropNaming = []|[{
  
  propTypeNames?: [string, ...(string)[]]
  rule?: string
  message?: string
  validateNested?: boolean
}]
// ----- react/button-has-type -----
type ReactButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]
// ----- react/checked-requires-onchange-or-readonly -----
type ReactCheckedRequiresOnchangeOrReadonly = []|[{
  ignoreMissingProperties?: boolean
  ignoreExclusiveCheckedAttribute?: boolean
}]
// ----- react/default-props-match-prop-types -----
type ReactDefaultPropsMatchPropTypes = []|[{
  allowRequiredDefaults?: boolean
}]
// ----- react/destructuring-assignment -----
type ReactDestructuringAssignment = []|[("always" | "never")]|[("always" | "never"), {
  ignoreClassFields?: boolean
  destructureInSignature?: ("always" | "ignore")
}]
// ----- react/display-name -----
type ReactDisplayName = []|[{
  ignoreTranspilerName?: boolean
  checkContextObjects?: boolean
}]
// ----- react/forbid-component-props -----
type ReactForbidComponentProps = []|[{
  forbid?: (string | {
    propName?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }) | {
    propNamePattern?: string
    allowedFor?: string[]
    allowedForPatterns?: string[]
    message?: string
  } | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  }))[]
  [k: string]: unknown | undefined
}]
// ----- react/forbid-dom-props -----
type ReactForbidDomProps = []|[{
  forbid?: (string | {
    propName?: string
    disallowedFor?: string[]
    message?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/forbid-elements -----
type ReactForbidElements = []|[{
  forbid?: (string | {
    element: string
    message?: string
  })[]
}]
// ----- react/forbid-foreign-prop-types -----
type ReactForbidForeignPropTypes = []|[{
  allowInPropTypes?: boolean
}]
// ----- react/forbid-prop-types -----
type ReactForbidPropTypes = []|[{
  forbid?: string[]
  checkContextTypes?: boolean
  checkChildContextTypes?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/function-component-definition -----
type ReactFunctionComponentDefinition = []|[{
  namedComponents?: (("function-declaration" | "arrow-function" | "function-expression") | ("function-declaration" | "arrow-function" | "function-expression")[])
  unnamedComponents?: (("arrow-function" | "function-expression") | ("arrow-function" | "function-expression")[])
  [k: string]: unknown | undefined
}]
// ----- react/hook-use-state -----
type ReactHookUseState = []|[{
  allowDestructuredState?: boolean
}]
// ----- react/jsx-boolean-value -----
type ReactJsxBooleanValue = ([]|[("always" | "never")] | []|["always"]|["always", {
  never?: string[]
  assumeUndefinedIsFalse?: boolean
}] | []|["never"]|["never", {
  always?: string[]
  assumeUndefinedIsFalse?: boolean
}])
// ----- react/jsx-closing-bracket-location -----
type ReactJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
  selfClosing?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false)
})]
// ----- react/jsx-closing-tag-location -----
type ReactJsxClosingTagLocation = []|[(("tag-aligned" | "line-aligned") | {
  location?: ("tag-aligned" | "line-aligned")
})]
// ----- react/jsx-curly-brace-presence -----
type ReactJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- react/jsx-curly-newline -----
type ReactJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- react/jsx-curly-spacing -----
type ReactJsxCurlySpacing = []|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_ReactJsxCurlySpacing_BasicConfig & {
  attributes?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  children?: _ReactJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
type _ReactJsxCurlySpacingBasicConfigOrBoolean = (_ReactJsxCurlySpacing_BasicConfig | boolean)
interface _ReactJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- react/jsx-equals-spacing -----
type ReactJsxEqualsSpacing = []|[("always" | "never")]
// ----- react/jsx-filename-extension -----
type ReactJsxFilenameExtension = []|[{
  allow?: ("always" | "as-needed")
  extensions?: string[]
  ignoreFilesWithoutCode?: boolean
}]
// ----- react/jsx-first-prop-new-line -----
type ReactJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- react/jsx-fragments -----
type ReactJsxFragments = []|[("syntax" | "element")]
// ----- react/jsx-handler-names -----
type ReactJsxHandlerNames = []|[({
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: false
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  eventHandlerPrefix?: false
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
  ignoreComponentNames?: string[]
} | {
  checkLocalVariables?: boolean
} | {
  checkInlineFunction?: boolean
} | {
  ignoreComponentNames?: string[]
  [k: string]: unknown | undefined
})]
// ----- react/jsx-indent -----
type ReactJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- react/jsx-indent-props -----
type ReactJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- react/jsx-key -----
type ReactJsxKey = []|[{
  checkFragmentShorthand?: boolean
  checkKeyMustBeforeSpread?: boolean
  warnOnDuplicates?: boolean
}]
// ----- react/jsx-max-depth -----
type ReactJsxMaxDepth = []|[{
  max?: number
}]
// ----- react/jsx-max-props-per-line -----
type ReactJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- react/jsx-newline -----
type ReactJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- react/jsx-no-bind -----
type ReactJsxNoBind = []|[{
  allowArrowFunctions?: boolean
  allowBind?: boolean
  allowFunctions?: boolean
  ignoreRefs?: boolean
  ignoreDOMComponents?: boolean
}]
// ----- react/jsx-no-duplicate-props -----
type ReactJsxNoDuplicateProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-no-leaked-render -----
type ReactJsxNoLeakedRender = []|[{
  validStrategies?: ("ternary" | "coerce")[]
}]
// ----- react/jsx-no-literals -----
type ReactJsxNoLiterals = []|[{
  elementOverrides?: {
    [k: string]: {
      applyToNestedElements?: boolean
      noStrings?: boolean
      allowedStrings?: string[]
      ignoreProps?: boolean
      noAttributeStrings?: boolean
      [k: string]: unknown | undefined
    }
  }
  noStrings?: boolean
  allowedStrings?: string[]
  ignoreProps?: boolean
  noAttributeStrings?: boolean
}]
// ----- react/jsx-no-script-url -----
type ReactJsxNoScriptUrl = ([]|[{
  name: string
  props: string[]
}[]]|[{
  name: string
  props: string[]
}[], {
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  includeFromSettings?: boolean
  [k: string]: unknown | undefined
}])
// ----- react/jsx-no-target-blank -----
type ReactJsxNoTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
  warnOnSpreadAttributes?: boolean
  links?: boolean
  forms?: boolean
}]
// ----- react/jsx-no-undef -----
type ReactJsxNoUndef = []|[{
  allowGlobals?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  allowExpressions?: boolean
  [k: string]: unknown | undefined
}]
// ----- react/jsx-one-expression-per-line -----
type ReactJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "non-jsx")
}]
// ----- react/jsx-pascal-case -----
type ReactJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  
  ignore?: []|[string]
}]
// ----- react/jsx-props-no-spreading -----
type ReactJsxPropsNoSpreading = []|[({
  html?: ("enforce" | "ignore")
  custom?: ("enforce" | "ignore")
  explicitSpread?: ("enforce" | "ignore")
  exceptions?: string[]
  [k: string]: unknown | undefined
} & {
  [k: string]: unknown | undefined
})]
// ----- react/jsx-sort-default-props -----
type ReactJsxSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/jsx-sort-props -----
type ReactJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- react/jsx-space-before-closing -----
type ReactJsxSpaceBeforeClosing = []|[("always" | "never")]
// ----- react/jsx-tag-spacing -----
type ReactJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- react/jsx-wrap-multilines -----
type ReactJsxWrapMultilines = []|[{
  declaration?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  assignment?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  return?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  arrow?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  condition?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  logical?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
  prop?: (true | false | "ignore" | "parens" | "parens-new-line" | "never")
}]
// ----- react/no-children-prop -----
type ReactNoChildrenProp = []|[{
  allowFunctions?: boolean
}]
// ----- react/no-danger -----
type ReactNoDanger = []|[{
  
  customComponentNames?: string[]
  [k: string]: unknown | undefined
}]
// ----- react/no-did-mount-set-state -----
type ReactNoDidMountSetState = []|["disallow-in-func"]
// ----- react/no-did-update-set-state -----
type ReactNoDidUpdateSetState = []|["disallow-in-func"]
// ----- react/no-invalid-html-attribute -----
type ReactNoInvalidHtmlAttribute = []|[("rel")[]]
// ----- react/no-multi-comp -----
type ReactNoMultiComp = []|[{
  ignoreStateless?: boolean
}]
// ----- react/no-string-refs -----
type ReactNoStringRefs = []|[{
  noTemplateLiterals?: boolean
}]
// ----- react/no-unescaped-entities -----
type ReactNoUnescapedEntities = []|[{
  forbid?: (string | {
    char?: string
    alternatives?: string[]
    [k: string]: unknown | undefined
  })[]
}]
// ----- react/no-unknown-property -----
type ReactNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react/no-unsafe -----
type ReactNoUnsafe = []|[{
  checkAliases?: boolean
}]
// ----- react/no-unstable-nested-components -----
type ReactNoUnstableNestedComponents = []|[{
  customValidators?: string[]
  allowAsProps?: boolean
  propNamePattern?: string
}]
// ----- react/no-unused-prop-types -----
type ReactNoUnusedPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipShapeProps?: boolean
}]
// ----- react/no-will-update-set-state -----
type ReactNoWillUpdateSetState = []|["disallow-in-func"]
// ----- react/prefer-es6-class -----
type ReactPreferEs6Class = []|[("always" | "never")]
// ----- react/prefer-stateless-function -----
type ReactPreferStatelessFunction = []|[{
  ignorePureComponents?: boolean
}]
// ----- react/prop-types -----
type ReactPropTypes = []|[{
  ignore?: string[]
  customValidators?: string[]
  skipUndeclared?: boolean
}]
// ----- react/require-default-props -----
type ReactRequireDefaultProps = []|[{
  forbidDefaultForRequired?: boolean
  classes?: ("defaultProps" | "ignore")
  functions?: ("defaultArguments" | "defaultProps" | "ignore")
  ignoreFunctionalComponents?: boolean
}]
// ----- react/require-optimization -----
type ReactRequireOptimization = []|[{
  allowDecorators?: string[]
}]
// ----- react/self-closing-comp -----
type ReactSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- react/sort-comp -----
type ReactSortComp = []|[{
  order?: string[]
  groups?: {
    [k: string]: string[]
  }
}]
// ----- react/sort-default-props -----
type ReactSortDefaultProps = []|[{
  ignoreCase?: boolean
}]
// ----- react/sort-prop-types -----
type ReactSortPropTypes = []|[{
  requiredFirst?: boolean
  callbacksLast?: boolean
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  sortShapeProp?: boolean
  checkTypes?: boolean
}]
// ----- react/state-in-constructor -----
type ReactStateInConstructor = []|[("always" | "never")]
// ----- react/static-property-placement -----
type ReactStaticPropertyPlacement = []|[("static public field" | "static getter" | "property assignment")]|[("static public field" | "static getter" | "property assignment"), {
  propTypes?: ("static public field" | "static getter" | "property assignment")
  defaultProps?: ("static public field" | "static getter" | "property assignment")
  childContextTypes?: ("static public field" | "static getter" | "property assignment")
  contextTypes?: ("static public field" | "static getter" | "property assignment")
  contextType?: ("static public field" | "static getter" | "property assignment")
  displayName?: ("static public field" | "static getter" | "property assignment")
}]
// ----- react/style-prop-object -----
type ReactStylePropObject = []|[{
  allow?: string[]
  [k: string]: unknown | undefined
}]
// ----- require-atomic-updates -----
type RequireAtomicUpdates = []|[{
  allowProperties?: boolean
}]
// ----- require-unicode-regexp -----
type RequireUnicodeRegexp = []|[{
  requireFlag?: ("u" | "v")
}]
// ----- rest-spread-spacing -----
type RestSpreadSpacing = []|[("always" | "never")]
// ----- semi -----
type Semi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- semi-spacing -----
type SemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- semi-style -----
type SemiStyle = []|[("last" | "first")]
// ----- sort-imports -----
type SortImports = []|[{
  ignoreCase?: boolean
  
  memberSyntaxSortOrder?: [("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single")]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}]
// ----- sort-keys -----
type SortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
  ignoreComputedKeys?: boolean
}]
// ----- sort-vars -----
type SortVars = []|[{
  ignoreCase?: boolean
}]
// ----- space-before-blocks -----
type SpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- space-before-function-paren -----
type SpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- space-in-parens -----
type SpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- space-infix-ops -----
type SpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- space-unary-ops -----
type SpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- spaced-comment -----
type SpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- strict -----
type Strict = []|[("never" | "global" | "function" | "safe")]
// ----- switch-colon-spacing -----
type SwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- template-curly-spacing -----
type TemplateCurlySpacing = []|[("always" | "never")]
// ----- template-tag-spacing -----
type TemplateTagSpacing = []|[("always" | "never")]
// ----- unicode-bom -----
type UnicodeBom = []|[("always" | "never")]
// ----- use-isnan -----
type UseIsnan = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]
// ----- valid-typeof -----
type ValidTypeof = []|[{
  requireStringLiterals?: boolean
}]
// ----- wrap-iife -----
type WrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- yield-star-spacing -----
type YieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- yoda -----
type Yoda = []|[("always" | "never")]|[("always" | "never"), {
  exceptRange?: boolean
  onlyEquality?: boolean
}]
// Names of all the configs
export type ConfigNames = 'gitignore' | '@virtual-live-lab/eslint-config/stylistic__config-prettier' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/recommended-type-checked' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/stylistic-type-checked' | '@virtual-live-lab/eslint-config/typescript' | '@virtual-live-lab/eslint-config/astro' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/stylistic__config-prettier' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/recommended-type-checked' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript__typescript-eslint/stylistic-type-checked' | '@virtual-live-lab/eslint-config/astro__@virtual-live-lab/eslint-config/typescript' | '@virtual-live-lab/eslint-config/astro__astro/base/plugin' | '@virtual-live-lab/eslint-config/astro__astro/base' | '@virtual-live-lab/eslint-config/astro__astro/base/javascript' | '@virtual-live-lab/eslint-config/astro__astro/base/typescript' | '@virtual-live-lab/eslint-config/astro__astro/recommended' | '@virtual-live-lab/eslint-config/astro__astro/base/plugin' | '@virtual-live-lab/eslint-config/astro__astro/base' | '@virtual-live-lab/eslint-config/astro__astro/base/javascript' | '@virtual-live-lab/eslint-config/astro__astro/base/typescript' | '@virtual-live-lab/eslint-config/astro' | '@virtual-live-lab/eslint-config/astro' | 'gitignore' | '@virtual-live-lab/eslint-config/stylistic__config-prettier' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/stylistic' | 'gitignore' | '@virtual-live-lab/eslint-config/stylistic__config-prettier' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/recommended-type-checked' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/stylistic-type-checked' | '@virtual-live-lab/eslint-config/typescript' | '@virtual-live-lab/eslint-config/react' | '@virtual-live-lab/eslint-config/react' | '@virtual-live-lab/eslint-config/react' | '@virtual-live-lab/eslint-config/react' | 'gitignore' | '@virtual-live-lab/eslint-config/stylistic__config-prettier' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/stylistic' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/recommended-type-checked' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/base' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/eslint-recommended' | '@virtual-live-lab/eslint-config/typescript__typescript-eslint/stylistic-type-checked' | '@virtual-live-lab/eslint-config/typescript'
