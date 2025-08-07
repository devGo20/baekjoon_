const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'

const input = fs.readFileSync(path, 'utf-8').toString().trim().split('\n')
const N = +input[0]
const players = input.slice(1).map(line => line.split(' ').map(Number))

let winner = 0
let maxScore = -1
for (let i = 0; i < N; i++) {
  const cards = players[i]
  let best = 0

  // 5장 중 3장을 뽑는 조합
  for (let a = 0; a < 5; a++) {
    for (let b = a + 1; b < 5; b++) {
      for (let c = b + 1; c < 5; c++) {
        const sum = cards[a] + cards[b] + cards[c]
        const digit = sum % 10
        best = Math.max(best, digit)
      }
    }
  }

  // 동점이면 번호가 더 큰 사람이 우선
  if (best >= maxScore) {
    maxScore = best
    winner = i + 1
  }
}

console.log(winner)
