const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number); // n 공갯수 m 바꿀횟수
const swaps = input.slice(1).map(line => line.split(" ").map(Number));
const buckets = Array(n).fill(null).map((_, i) => i + 1);
for (const [a, b] of swaps) {
  [buckets[a - 1], buckets[b - 1]] = [buckets[b - 1], buckets[a - 1]];
}
console.log(buckets.join(' '))