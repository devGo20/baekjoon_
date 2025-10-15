const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const [n, ...changes] = fs.readFileSync(path, "utf8").trim().split('\n').map(Number)

// 쿼터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수, 니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01)
changes.forEach(change => {
  const bucket = []
  let remain = change
  for (const target of [25,10,5,1]) {
    bucket.push(parseInt(remain / target))
    remain = remain % target
  }
  console.log(bucket.join(' '))
})