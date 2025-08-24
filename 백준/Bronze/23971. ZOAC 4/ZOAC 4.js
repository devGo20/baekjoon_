// ZOAC 4
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [H, W, Y, X] = fs.readFileSync(path, "utf8").split(' ').map(Number);
console.log(Math.ceil(H / (Y + 1)) * Math.ceil(W / (X + 1)))

