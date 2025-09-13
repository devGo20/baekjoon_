const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [a, b] = fs.readFileSync(path, "utf8").split(' ').map(Number);
if (a < b){
    console.log('<')
} else if (a > b){
    console.log('>')
} else {
    console.log('==')
}