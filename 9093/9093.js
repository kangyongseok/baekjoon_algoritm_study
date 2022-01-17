const fs = require('fs');
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");
for (let i = 1; i < input.length; i++) {
  const result = input[i].split(' ').map(word => word.split('').reverse().join(''))
  console.log(result.join(' '))
}