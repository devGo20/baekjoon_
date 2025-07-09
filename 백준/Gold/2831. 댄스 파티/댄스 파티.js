const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const men = input[1]
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => Math.abs(a) - Math.abs(b))

const women = input[2]
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => Math.abs(a) - Math.abs(b))
const tallerWantMen = []
const shorterWantMen = []
men.forEach(m => {
  if (m > 0) tallerWantMen.push(m)
  else shorterWantMen.push(-m)
})

const tallerWantWomen = []
const shorterWantWomen = []
women.forEach(w => {
  if (w > 0) tallerWantWomen.push(w)
  else shorterWantWomen.push(-w)
})

function match (men, women) {
  let menIdx = 0
  let womenIdx = 0
  let count = 0
  while (menIdx < men.length && womenIdx < women.length) {
    if (men[menIdx] < women[womenIdx]) {
      menIdx++
      womenIdx++
      count++
    } else {
      womenIdx++
    }
  }
  return count
}
console.log(
  match(tallerWantMen, shorterWantWomen) +
    match(tallerWantWomen, shorterWantMen)
)
