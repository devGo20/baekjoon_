const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const [n, m] = input[0].split(' ').map(Number)
const swaps = input.splice(1).map((e) => e.split(' ').map(Number))
let buckets = Array.from({ length: n }, (_, i) => i + 1)
for (const [start, end] of swaps) {
  const temp = buckets.slice(start - 1, end);
  buckets.splice(start - 1, end - start + 1, ...temp.reverse());
}
console.log(buckets.join(' '))