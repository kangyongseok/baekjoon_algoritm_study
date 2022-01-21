const fs = require('fs');
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");

// 생각나는 대로 풀기
// for (let i = 1; i < input.length; i++) {
//   const result = input[i].split(' ').map(word => word.split('').reverse().join(''))
//   console.log(result.join(' '))
// }

// 스택으로 풀기
function reverse(word) {
  if (word.length === 1) return word
  const result = []
  for (let i = word.length - 1; i >= 0 ; i--) {
    result.push(word[i])
  }
  return result.join('')
}

for (let i = 1; i < input.length; i++) {
  const result = input[i].split(' ').map(word => reverse(word))
  console.log(result.join(' '))
}