const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = parseInt(fs.readFileSync(path, "utf8").trim())
let answer = ''
for (let i = 1; i <= input/4; i++){
  answer += 'long '
}

console.log(answer + 'int')