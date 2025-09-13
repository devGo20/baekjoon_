const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [a, b, c] = fs.readFileSync(path, "utf8").split(' ').map(Number);
console.log(a+b+c)