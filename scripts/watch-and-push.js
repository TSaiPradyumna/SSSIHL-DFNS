#!/usr/bin/env node
import chokidar from "chokidar";
import { exec } from "child_process";
import path from "path";

const IGNORES = [
  "**/.git/**",
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/.lovable/**",
  "**/package-lock.json",
  "**/bun.lock",
];

const watcher = chokidar.watch(["src", "public", "vite.config.ts", "package.json", "src/lib", "src/routes"], {
  ignored: IGNORES,
  ignoreInitial: true,
  awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 100 },
});

let timer = null;
function debounce(fn, ms) {
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const commitAndPush = (filePath) => {
  const rel = path.relative(process.cwd(), filePath || "");
  const when = new Date().toISOString();
  const message = `Auto: ${rel || "files"} updated @ ${when}`;

  const cmd = `git add -A && git commit -m "${message}" --author "Auto Commit <auto@local>" || echo "No changes to commit" && git push`;
  console.log(`Running: ${cmd}`);
  exec(cmd, (err, stdout, stderr) => {
    if (stdout) console.log(stdout.trim());
    if (stderr) console.error(stderr.trim());
    if (err) console.error("Commit/push error:", err.message);
  });
};

const debounced = debounce(commitAndPush, 1500);

watcher.on("all", (event, filePath) => {
  console.log(`Detected ${event} -> ${filePath}`);
  // ignore changes to this script itself
  if (filePath && filePath.includes("scripts/watch-and-push.js")) return;
  debounced(filePath);
});

console.log("watch-and-push started — watching src/, public/, package.json, vite.config.ts");
