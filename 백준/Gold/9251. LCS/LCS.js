const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const [first, second] = fs.readFileSync(path, "utf8").trim().split("\n")
const dp = Array.from({ length: second.length + 1 }, () => Array(first.length + 1).fill(0));
for (let y = 1; y <= second.length; y++) {
  for (let x = 1; x <= first.length; x++) {
    if (first[x - 1] === second[y - 1]) {
      dp[y][x] = dp[y - 1][x - 1] + 1
    } else {
      dp[y][x] = Math.max(dp[y][x - 1], dp[y - 1][x])
    }
  }
}
console.log(dp.at(-1).at(-1))