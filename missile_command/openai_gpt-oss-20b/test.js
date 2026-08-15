// Simple test to ensure script.js parses without syntax errors
const fs = require('fs');
const vm = require('vm');
const path = '/Users/steve/dev/missile_command_test/openai_gpt-oss-20b/script.js';
const code = fs.readFileSync(path, 'utf8');
try {
  new vm.Script(code);
  console.log('Test passed: script.js is syntactically valid');
} catch (e) {
  console.error('Test failed: syntax error in script.js');
  console.error(e);
}
