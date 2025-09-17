const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const numbers = fs.readFileSync(path, "utf-8").trim().split("\n").map(Number);
numbers.sort((a, b) => a - b);

Array.from({ length: 30 }, (_, idx) => {
  if (!numbers.includes(idx + 1)) {
    console.log(idx + 1)
  }
})
