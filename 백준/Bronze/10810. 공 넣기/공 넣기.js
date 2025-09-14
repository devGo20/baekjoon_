const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const [n,m] = input[0].split(' ').map(Number)
const buckets = Array(n).fill(0)
const methods = input.slice(1)
methods.forEach((method) => {
  const [start, end, num] = method.split(' ').map(Number)
  for (let i = start-1; i < end; i++){
    buckets[i] = num
  }
})
console.log(buckets.join(' '))