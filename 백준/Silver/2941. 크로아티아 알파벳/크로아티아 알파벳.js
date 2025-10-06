const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./i.txt";

let str = fs.readFileSync(path, "utf8").trim();
const cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
cro.forEach(c => {
  if (str.includes(c)) {
    str = str.replaceAll(c, '1')
  }
})
console.log(str.length)
