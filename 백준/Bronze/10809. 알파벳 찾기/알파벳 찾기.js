const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const str = fs.readFileSync(path, "utf8").trim()
const answer = Array.from({length: 26}).fill(-1)

for (let i = str.length-1; i >= 0; i--){
  const unicode = str[i].charCodeAt(0)
  answer[unicode-97] = i
}

console.log(answer.join(' '))