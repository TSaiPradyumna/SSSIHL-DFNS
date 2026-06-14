import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const serverDir = join(process.cwd(), 'dist', 'server');
const targetPath = join(serverDir, 'server.js');

await mkdir(serverDir, { recursive: true });
await writeFile(targetPath, 'export { default } from "./server.mjs";\n', 'utf8');
console.log('Created', targetPath);
