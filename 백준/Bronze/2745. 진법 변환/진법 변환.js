const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split(' ')
const s = parseInt(input[1])
console.log(parseInt(input[0], s));