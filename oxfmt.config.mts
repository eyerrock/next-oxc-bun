import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  arrowParens: "always",

  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: false,

  endOfLine: "lf",
  insertFinalNewline: true,

  ignorePatterns: [
    ".next/**",
    "out/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "node_modules/**",
    "next-env.d.ts",
    "**/*.md",
  ],

  sortPackageJson: {
    sortScripts: true,
    sortDependencies: true,
    sortDevDependencies: true,
  },

  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },

  sortTailwindcss: {
    stylesheet: "./src/app/globals.css",
    functions: ["cn", "clsx", "cva", "tw"],
  },
});
