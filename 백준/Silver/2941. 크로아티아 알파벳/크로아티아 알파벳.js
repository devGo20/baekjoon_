const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

let str = fs.readFileSync(path, "utf8").trim();
const result = str.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, 'X');
console.log(result.length);