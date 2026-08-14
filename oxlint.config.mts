import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
    reportUnusedDisableDirectives: "error",
  },

  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "react",
    "react-perf",
    "nextjs",
    "jsx-a11y",
  ],

  categories: {
    correctness: "error",
    suspicious: "warn",
    perf: "warn",
  },

  env: {
    browser: true,
    node: true,
  },

  ignorePatterns: [
    ".next/**",
    "out/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "node_modules/**",
    "next-env.d.ts",
  ],

  rules: {
    // TypeScript handles undefined variables
    "eslint/no-undef": "off",

    // TypeScript-friendly unused-variable checking
    "eslint/no-unused-vars": "off",
    "typescript/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    // React 17+ and Next.js do not require React imports
    "react/react-in-jsx-scope": "off",

    // Application-level preferences
    "eslint/no-console": ["warn", { allow: ["warn", "error"] }],
    "typescript/no-explicit-any": "warn",
    "unicorn/prefer-node-protocol": "error",
    "react/react-compiler": "warn",
  },
});
