const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").split(' ').map(Number).sort((a, b) => a - b);
const inputSet = new Set(input)
if (inputSet.size === 1) {
  console.log(10000 + input[0] * 1000)
} else if (inputSet.size === 3) {
  console.log(
    Math.max(...input) * 100)
} else {
  console.log(1000 + input[1] * 100)
}
