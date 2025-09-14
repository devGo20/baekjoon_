const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const total = Number(input[0])
const list = input.slice(2)
let sum = 0
list.forEach((item) => {
  const [price, quantity] = item.split(' ').map(Number)
  sum += price * quantity
})

console.log(total === sum ? 'Yes' : 'No')