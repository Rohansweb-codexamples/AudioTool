const fs = require('fs');
const path = require('path');
const root = process.cwd();
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'logo.svg', 'manifest.webmanifest']) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) throw new Error('Required app file missing: ' + file);
  fs.copyFileSync(source, path.join(out, file));
}
console.log('AudioTool web app prepared in www/');
