import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const serverDir = join(process.cwd(), 'dist', 'server');
const targetPath = join(serverDir, 'server.js');
const content = "import handler from './server.mjs';\nexport default { fetch: handler };\n";

await mkdir(serverDir, { recursive: true });
await writeFile(targetPath, content, 'utf8');
console.log('Created', targetPath);
