import { defineConfig } from "tsup"

export default defineConfig({
  clean: true, // build前にディレクトリ内を削除するか
  dts: true,
  entry: ["./index.ts"],
  format: ["cjs", "esm"], // 出力する形式を指定
  minify: process.env.NODE_ENV === "production",
  sourcemap: false, // soucemapを出力するか
  splitting: false, // バンドルしないで分割するか
  treeshake: true,
})
