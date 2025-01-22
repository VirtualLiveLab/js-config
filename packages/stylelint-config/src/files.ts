// css
export const cssFiles = ["*.css", "**/*.css"] as const satisfies string[];

// sass
const _sassFiles = ["*.sass", "**/*.sass"] as const satisfies string[];
const _scssFiles = ["*.scss", "**/*.scss"] as const satisfies string[];
export const sassFiles = [
  ..._sassFiles,
  ..._scssFiles,
] as const satisfies string[];

// astro
export const astroFiles = ["*.astro", "**/*.astro"] as const satisfies string[];
