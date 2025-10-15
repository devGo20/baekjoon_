const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [n,b] = fs.readFileSync(path, "utf8").trim().split(' ').map(Number);

// N: B진법 문자열, B: 진법 숫자
console.log(n.toString(b).toUpperCase())
