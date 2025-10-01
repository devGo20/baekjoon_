const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

const input = fs.readFileSync(path, "utf8").trim().split('\n')
const n = parseInt(input[0])
const cases = input.slice(1).map((i) => {
  const [cnt, str] = i.split(' ')
  return { cnt: parseInt(cnt), str: str }
})

cases.forEach((c) => {
  console.log(
    c.str
      .split('')
      .map((s) => s.repeat(c.cnt))
      .join('')
  )
})