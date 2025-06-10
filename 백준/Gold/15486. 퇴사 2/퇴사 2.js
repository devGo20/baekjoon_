const fs = require('fs')
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n')
const N = Number(input[0]) // N: 퇴사일
const schedule = input.slice(1).map(line => line.split(' ').map(Number))

function solution (N, schedule) {
  const dp = Array(N + 1).fill(0)

  dp[N + 1] = 0
  for (let i = N; i >= 1; i--) {
    const [day, profit] = schedule[i - 1]
    if (i + day > N + 1) {
      // 퇴사일 이후
      dp[i] = dp[i + 1]
    } else {
      dp[i] = Math.max(dp[i + 1], dp[i + day] + profit)
    }
  }
  console.log(dp[1])
}

solution(N, schedule)
