import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { fixupConfigRules } from "@eslint/compat";

import { compat } from "../lib/compat";
import { jsFiles, tsFiles } from "../utils/files";
import { reactConfig } from "./react";

const nextJsConfig = [
  ...reactConfig,
  {
    files: [jsFiles, tsFiles],
    /**
     *
     * この設定は、利用側のnode_modulesからnext/core-web-vitalsを探すので、
     * 利用側でeslint-config-nextがインストールされている必要がある
     * Next.js側がFlat Configに対応した場合は更新が必要。
     * Flat対応に際して、このpackageでeslint-config-nextを持ちたくないので、
     * Next.jsプリセットを削除するBreaking Changeを行う可能性が高い
     */
    ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  },
] satisfies FlatConfig.ConfigArray;

export { nextJsConfig };
