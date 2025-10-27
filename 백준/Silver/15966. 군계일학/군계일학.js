const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(path, "utf8").trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = Array(n).fill(1); // 자기 자신으로 최소 길이 1
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] + 1 === arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
