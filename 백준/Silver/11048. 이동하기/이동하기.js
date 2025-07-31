const fs = require('fs')
const path = process.platform === 'linux' ? '/dev/stdin' : '../i.txt'

const input = fs.readFileSync(path, 'utf-8').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

const board = input.slice(1).map(line => line.split(' ').map(Number))
const dp = Array.from({ length: n }, () => Array(m).fill(0))

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    const left = j > 0 ? dp[i][j - 1] : 0
    const up = i > 0 ? dp[i - 1][j] : 0
    const diag = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0
    dp[i][j] = Math.max(left, up, diag) + board[i][j]
  }
}

console.log(dp[n - 1][m - 1])
