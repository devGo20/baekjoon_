const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = parseInt(input[0]);

const matrix = input.slice(1).map(line => line.split(" ").map(Number));

if (n === 1) {
  console.log(Math.min(...matrix[0]));
}
let dp = Array(n).fill().map(() => [0, 0, 0]);

dp[0][0] = matrix[0][0]
dp[0][1] = matrix[0][1]
dp[0][2] = matrix[0][2]
for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + matrix[i][0]
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + matrix[i][1]
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + matrix[i][2]
}
console.log(Math.min(...[dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]]))


