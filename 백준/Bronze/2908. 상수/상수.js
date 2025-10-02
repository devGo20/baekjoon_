const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [first, second] = fs.readFileSync(path, "utf8").trim().split(' ').map((i) => i.split('').reverse().join(''))
if (parseInt(first) < parseInt(second)) {
  console.log(second)
} else {
  console.log(first)
}

