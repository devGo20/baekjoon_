function solution(survey, choices) {
  var answer = '';
  let typeMap = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

  for (let i = 0; i < survey.length; i++) {
    let types = survey[i].split('');
    let choice = choices[i];

    if (choice > 4) {
      typeMap[types[1]] += choice - 4
    } else if (choice < 4) {
      typeMap[types[0]] += 4 - choice
    }
  }
  const types = ['RT', 'CF', 'JM', 'AN'];

  for (let [first, second] of types) {
    answer += (typeMap[first] >= typeMap[second]) ? first : second;
  }
  return answer;
}