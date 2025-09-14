const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = parseInt(fs.readFileSync(path, "utf8").trim())
for (let i = 1; i <= input; i++) {
  console.log('*'.repeat(i).padStart(input,' '))
}
