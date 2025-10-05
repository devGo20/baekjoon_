const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().toUpperCase();
const inputCount = new Map()
input.split('').forEach((ch) => {
  inputCount.set(ch, (inputCount.get(ch) || 0) + 1)
})
const sorted = Array.from(inputCount.entries())
  .sort((a, b) => b[1] - a[1]);

if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
  console.log('?');
} else {
  console.log(sorted[0][0]);
}