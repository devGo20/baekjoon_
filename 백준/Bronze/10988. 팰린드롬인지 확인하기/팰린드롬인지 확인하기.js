const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";
const s = fs.readFileSync(path, "utf8").trim();

console.log(s === s.split('').reverse().join('') ? 1 : 0);
