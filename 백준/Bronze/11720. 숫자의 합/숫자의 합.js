const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = input[0]
const numbers = input[1]
let sum = 0
numbers.split('').forEach((number) => {
  sum += parseInt(number)
})

console.log(sum)