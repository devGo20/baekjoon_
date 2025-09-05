const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(path, "utf-8").trim().split("\n");

let line = 0;
const T = Number(input[line++]);
const inputs = []
for (let t = 0; t < T; t++) {
  const N = Number(input[line++]); // 날 수
  const prices = input[line++].split(" ").map(Number); // 주가 배열
  inputs.push({ N: N, prices: prices })
}
const answer = []
for (const { N, prices } of inputs) {
  let maxPrice = 0
  let result = 0

  for (let i = N - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i]
    } else {
      result += maxPrice - prices[i]
    }
  }

  answer.push(result)
}

console.log(answer.join('\n'))
