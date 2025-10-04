const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split(' ').map(Number)
const correct = [1, 1, 2, 2, 2, 8]
const answer = []
for (let i = 0; i < correct.length; i++){
  answer.push(correct[i] - input[i])  
}
console.log(answer.join(' '))