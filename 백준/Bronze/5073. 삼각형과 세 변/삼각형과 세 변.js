const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'

const input = fs.readFileSync(path).toString().trim().split('\n')

// 예: 0 0 0이 나올 때까지 반복
for (let line of input) {
  if (line === '0 0 0') break

  const [a, b, c] = line.split(' ').map(Number).sort((a, b) => a - b)
  if (a + b <= c) {
    console.log('Invalid')
  } else if (a == b && b == c) {
    console.log('Equilateral')
  } else if (a == b || b == c) {
    console.log('Isosceles')
  } else {
    console.log('Scalene')
  }
}
