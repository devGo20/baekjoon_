const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number);

const n = input[0];  // 계단 개수
const numbers = input.slice(1);  // 각 계단의 점수

if (n === 1) {
  console.log(numbers[0]);
  process.exit(0);
}

const dp = Array(n).fill(0);

dp[0] = numbers[0];
dp[1] = numbers[0] + numbers[1];

for (let i = 2; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + numbers[i], // 두 칸 전에서 오는 경우
    (i > 2 ? dp[i - 3] : 0) + numbers[i - 1] + numbers[i] // 세 칸 전에서 오는 경우
  );
}

console.log(dp[n - 1]);
