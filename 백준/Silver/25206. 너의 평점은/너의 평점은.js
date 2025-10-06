const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const mapped = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
  'P': 0.0,
}
let total = 0
let totalGpa = 0
input.forEach(i => {
  const [point, grade] = i.split(' ').slice(1)
  if (grade != 'P') {
    total += Number(point) * mapped[grade]
    totalGpa += Number(point)
  }
})

console.log(total / totalGpa)