import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const sourcePath = path.join(root, "index.source.html");
const originalIndex = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with exit code ${result.status}`);
  }
}

try {
  fs.copyFileSync(sourcePath, indexPath);
  run("npx", ["vite", "build"]);
  run("node", ["scripts/generate-static-site.mjs"]);
} finally {
  fs.writeFileSync(indexPath, originalIndex);
}
