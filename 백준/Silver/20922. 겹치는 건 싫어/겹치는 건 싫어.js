const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0
let left = 0
const count = new Map()
for (let right = 0; right < n; right++) {
  const target = arr[right]
  count.set(target, (count.get(target) || 0) + 1);
  while (count.get(target) > k) {
    const leftNum = arr[left]
    count.set(leftNum, count.get(leftNum) - 1)
    left++
  }
  answer = Math.max(answer, right - left + 1)
}
console.log(answer)