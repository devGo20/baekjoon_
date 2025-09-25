const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split("\n");
const n = input[0]
const strings = input.slice(1)
strings.forEach((string) => {
  console.log([string.at(0),string.at(-1)].join(''))
})
