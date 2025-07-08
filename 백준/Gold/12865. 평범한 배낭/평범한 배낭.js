const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input[0].split(' ').map(Number)
const items = input.slice(1).map(line => line.split(' ').map(Number))

const dp = Array(K + 1).fill(0)
dp[0] = 0
for (let item of items) {
  for (let i = K; i >= item[0]; i--) {
    // dp[무게] = Math.max(dp[무게], dp[무게 - 현재아이템무게] + 현재아이템가치)
    dp[i] = Math.max(dp[i], dp[i - item[0]] + item[1])
  }
}
console.log(dp.at(-1))
