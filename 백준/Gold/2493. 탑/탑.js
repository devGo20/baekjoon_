const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'
const input = require('fs')
  .readFileSync(path, 'utf-8')
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])
const towers = input[1].split(' ').map(Number)
const answer = []
const stack = []
for (let i = 0; i < n; i++) {
  const currentHeight = towers[i]
  while (stack.length && stack.at(-1)[1] < currentHeight) {
    stack.pop()
  }

  if (stack.length === 0) {
    answer.push(0)
  } else {
    answer.push(stack.at(-1)[0])
  }

  stack.push([i + 1, currentHeight])
}

console.log(answer.join(' '))

