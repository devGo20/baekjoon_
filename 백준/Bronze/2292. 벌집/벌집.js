const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";
const N = Number(fs.readFileSync(path, "utf8").trim());

let k = 1;
while (N > 1 + 3 * k * (k - 1)) {
  k++;
}

console.log(k);
