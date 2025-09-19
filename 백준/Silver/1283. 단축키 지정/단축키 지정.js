const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs.readFileSync(path, "utf-8").trim().split('\n')
const n = input[0]
const words = input.slice(1)
const shortcutKey = []
for (const word of words) {
  const parts = word.split(' ')
  let find = false;
  for (let i = 0; i < parts.length; i++) {
    if (!shortcutKey.includes(parts[i][0].toUpperCase())) {
      shortcutKey.push(parts[i][0].toUpperCase())
      parts[i] = `[${parts[i][0]}]${parts[i].slice(1)}`
      find = true;
      console.log(parts.join(' '))
      break
    }
  }
  if (!find) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== ' ' && !shortcutKey.includes(word[i].toUpperCase())) {
        shortcutKey.push(word[i].toUpperCase())
        console.log(word.slice(0, i) + `[${word[i]}]` + word.slice(i + 1, word.length))
        find = true
        break
      }
    }
    if (!find) console.log(word)
  }
}