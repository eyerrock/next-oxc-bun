import packageJson from "../package.json" with { type: "json" };

const expected = packageJson.packageManager?.replace(/^bun@/, "");

if (!expected) {
  console.error("Missing Bun version in package.json#packageManager.");
  process.exit(1);
}

if (Bun.version !== expected) {
  console.error(`
Incorrect Bun version.

Expected: ${expected}
Current:  ${Bun.version}

Please install Bun ${expected}.
`);
  process.exit(1);
}
