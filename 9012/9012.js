const fs = require('fs');
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");
const logs = [];

for (let i = 1; i < input.length; i++) {
  const stack = []
  for (let j = 0; j < input[i].length; j++) {
    if (stack.length === 0) {
      stack.push(input[i][j])
      continue
    }
    if (stack[stack.length - 1] === '(' && input[i][j] === '(') {
      stack.push(input[i][j])
      continue
    }
    if (stack[stack.length - 1] === '(' && input[i][j] === ')') {
      stack.pop()
      continue
    }
  }
  stack.length === 0 ? logs.push('YES') : logs.push('NO');
}

console.log(logs.join('\n'));