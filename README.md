This is a [Next.js](https://nextjs.org) project using [Bun](https://bun.sh) as the runtime/package manager and [oxc](https://oxc.rs) (oxlint + oxfmt) for linting and formatting instead of ESLint/Prettier.

> [!IMPORTANT]
> This project pins a Next.js version that may include breaking changes relative to what you know. Before writing code, read the relevant guide in `node_modules/next/dist/docs/`.

## Getting Started

Install dependencies and run the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Stack

- **[Next.js 16](https://nextjs.org)** with the App Router and the [React Compiler](https://react.dev/learn/react-compiler) enabled
- **React 19**
- **[Tailwind CSS 4](https://tailwindcss.com)**
- **TypeScript 7**
- **[oxlint](https://oxc.rs/docs/guide/usage/linter.html)** / **[oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)** for linting and formatting

## Scripts

| Command              | Description                                |
| --------------------- | ------------------------------------------- |
| `bun dev`             | Start the dev server                        |
| `bun run build`       | Build for production                        |
| `bun start`           | Start the production server                 |
| `bun run lint`        | Lint with oxlint                            |
| `bun run lint:fix`    | Lint and auto-fix with oxlint               |
| `bun run format`      | Check formatting with oxfmt                 |
| `bun run format:fix`  | Format with oxfmt                           |
| `bun run typecheck`   | Generate Next.js types and run `tsc --noEmit` |
| `bun run typegen`     | Generate Next.js types only                 |

CI (`.github/workflows/ci.yml`) runs `lint`, `format`, `typecheck`, and `build` on every push/PR to `main`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
