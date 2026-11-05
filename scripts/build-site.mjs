import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const sourcePath = path.join(root, "index.source.html");
const originalIndex = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8") : "";
const visualSourceDir = path.join(root, "assets", "latex");
const visualPublicDir = path.join(root, "public", "assets", "latex");

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
  if (fs.existsSync(visualSourceDir)) {
    fs.mkdirSync(visualPublicDir, { recursive: true });
    for (const file of fs.readdirSync(visualSourceDir)) {
      if (path.extname(file).toLowerCase() === ".svg") {
        fs.copyFileSync(path.join(visualSourceDir, file), path.join(visualPublicDir, file));
      }
    }
  }
  fs.copyFileSync(sourcePath, indexPath);
  run("npx", ["vite", "build"]);
  run("node", ["scripts/generate-static-site.mjs"]);
} finally {
  fs.writeFileSync(indexPath, originalIndex);
}
