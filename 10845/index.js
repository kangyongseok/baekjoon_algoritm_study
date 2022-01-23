const fs = require('fs');
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");
const len = parseInt(input[0])

const queue = []
const logs = [];

for (let i = 1; i <= len; i++) {
  switch(input[i].split(' ')[0]) {
    case 'push':
      queue.push(input[i].split(' ')[1])
      break;
    case 'pop':
      queue.length === 0 ? logs.push(-1) : logs.push(queue.splice(0, 1)[0])
      break;
    case 'back':
      queue.length === 0 ? logs.push(-1) : logs.push(queue[queue.length - 1])
      break;
    case 'front':
      queue.length === 0 ? logs.push(-1) : logs.push(queue[0]) 
      break;
    case 'empty':
      queue.length === 0 ? logs.push(1) : logs.push(0)
      break;
    case 'size':
      logs.push(queue.length)
      break;
    default: break;
  }
}

console.log(logs.join('\n')); 