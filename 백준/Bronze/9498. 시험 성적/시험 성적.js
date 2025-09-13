//  90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const score = Number(fs.readFileSync(path, "utf8"))
if (score >= 90){
    console.log('A')
} else if(score >= 80){
    console.log('B')
} else if(score >= 70){
    console.log('C')
} else if(score >= 60){
    console.log('D')
} else {
    console.log('F')
    
}