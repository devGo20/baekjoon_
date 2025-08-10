const fs = require('fs')

const path = process.platform === 'linux' ? '/dev/stdin' : './i.txt'
const passwords = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1)

// 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
// 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
// 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.

const vowels = ['a', 'e', 'i', 'o', 'u']
for (const password of passwords) {
  console.log(
    `<${password}> is${hasVowel(password) &&
    checkConsecutiveLetters(password) &&
    checkDuplicateLetters(password)
      ? ''
      : ' not'} acceptable.`
  )
}
function hasVowel (password) {
  return password.split('').some(char => vowels.includes(char))
}

function checkConsecutiveLetters (password) {
  for (let i = 0; i < password.length - 2; i++) {
    const isVowel1 = vowels.includes(password[i])
    const isVowel2 = vowels.includes(password[i + 1])
    const isVowel3 = vowels.includes(password[i + 2])

    if (
      (isVowel1 && isVowel2 && isVowel3) ||
      (!isVowel1 && !isVowel2 && !isVowel3)
    ) {
      return false
    }
  }
  return true
}

function checkDuplicateLetters (password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i+1]) {
      if (!['e', 'o'].includes(password[i])) {
        return false
      }
    }
  }
  return true
}
