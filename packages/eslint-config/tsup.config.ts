import { defineConfig } from "tsup"

export default defineConfig({
  clean: true, // build前にディレクトリ内を削除するか
  entry: ["./src/*.ts", "./src/addons/*.ts"], // バンドルするファイルを指定
  experimentalDts: true,
  format: ["esm"], // 出力する形式を指定
  minify: process.env.NODE_ENV === "production",
  outDir: "dist",
  sourcemap: false, // soucemapを出力するか
  splitting: false, // バンドルしないで分割するか
  treeshake: true,
})
