const { execSync } = require('child_process');
const path = require('path');

const files = ['game.test.js', 'admin.test.js', 'structure.test.js'];
let totalPassed = 0;
let totalFailed = 0;

for (const file of files) {
  const out = execSync(`node ${path.join(__dirname, file)}`, { encoding: 'utf8', stdio: 'pipe' });
  process.stdout.write(out);
  const match = out.match(/(\d+) tests: (\d+) passed, (\d+) failed/);
  if (match) {
    totalPassed += Number(match[2]);
    totalFailed += Number(match[3]);
  }
}

console.log('─'.repeat(40));
console.log(`Total: ${totalPassed + totalFailed} tests — ${totalPassed} passed, ${totalFailed} failed`);
if (totalFailed > 0) process.exit(1);
