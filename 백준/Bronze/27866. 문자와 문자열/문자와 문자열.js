const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const string = input[0]
const idx = parseInt(input[1])
console.log(string[idx - 1])
