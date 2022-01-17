// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const fs = require('fs');
const [n, ...arr] = fs.readFileSync("./test.txt").toString().trim().split(/\s/);

const stack = []
const logs = []

for (let i = 0; i < arr.length; i++) {
  switch(arr[i]) {
    case 'push':
      stack.push(arr[i + 1])
      break;
    case 'pop':
      stack.length === 0 ? logs.push(-1) : logs.push(stack.pop())
      break;
    case 'top':
      stack.length === 0 ? logs.push(-1) : logs.push(stack[stack.length - 1])
      break;
    case 'size':
      logs.push(stack.length)
      break;
    case 'empty':
      stack.length === 0 ? logs.push(1) : logs.push(0)
      break;
    default: break;
  }
}

console.log(logs.join('\n'));
