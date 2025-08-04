const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'

const input = fs.readFileSync(path).toString().trim().split('\n')

const [n, r] = input[0].split(' ').map(Number)

const answer = []
const returned = input[1].split(' ').map(Number).sort((a, b) => a - b)
for (let i = 1; i <= n; i++) {
  if (!returned.includes(i)) {
    answer.push(i)
  }
}

if (answer.length === 0) {
  console.log('*')
} else {
  console.log(answer.sort((a, b) => a - b).join(' '))
}
