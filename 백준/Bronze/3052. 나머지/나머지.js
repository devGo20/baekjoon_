const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const numbers = fs.readFileSync(path, "utf8").trim().split("\n").map(Number);
const answerSet = new Set();
numbers.forEach((number) => {
  answerSet.add(number % 42)
})

console.log(answerSet.size)