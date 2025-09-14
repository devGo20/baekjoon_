const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const arr = input[1].split(' ').map(Number)
console.log(Math.min(...arr), Math.max(...arr))