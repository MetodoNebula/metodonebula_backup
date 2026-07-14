import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src/content/latex");
const OUT_DIR = path.join(ROOT, "public/assets/latex");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    stdio: "pipe",
  });
  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(" ")} failed\n${result.stdout ?? ""}\n${result.stderr ?? ""}`,
    );
  }
}

if (!fs.existsSync(SRC_DIR)) {
  console.log("No LaTeX assets to compile.");
  process.exit(0);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const texFiles = fs.readdirSync(SRC_DIR).filter((file) => file.endsWith(".tex"));

for (const file of texFiles) {
  const slug = file.replace(/\.tex$/, "");
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "nebula-latex-"));
  const source = path.join(SRC_DIR, file);
  const tempSource = path.join(tempDir, file);
  const output = path.join(OUT_DIR, `${slug}.svg`);

  try {
    fs.copyFileSync(source, tempSource);
    run("latex", ["-interaction=nonstopmode", "-halt-on-error", file], tempDir);
    run(
      "dvisvgm",
      ["--no-fonts", "--exact-bbox", `--output=${output}`, path.join(tempDir, `${slug}.dvi`)],
      tempDir,
    );
    console.log(`Compiled ${file} -> ${path.relative(ROOT, output)}`);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
