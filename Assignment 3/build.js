/**
 * Build verification script for Student Task Manager
 * Used by Jenkins automated build pipeline
 */
const fs = require('fs');
const path = require('path');

console.log("==========================================");
console.log("🛠️ Starting Student Task Manager Build...");
console.log("==========================================");

const requiredFiles = ['app.js', 'package.json', 'public/index.html', 'public/style.css', 'public/script.js'];
let buildPassed = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`[PASS] Required asset verified: ${file}`);
  } else {
    console.error(`[FAIL] Missing required asset: ${file}`);
    buildPassed = false;
  }
});

if (buildPassed) {
  console.log("==========================================");
  console.log("✅ BUILD SUCCESS: All application checks passed.");
  console.log("Ready for deployment & containerization.");
  console.log("==========================================");
  process.exit(0);
} else {
  console.error("❌ BUILD FAILED: One or more assets missing.");
  process.exit(1);
}
