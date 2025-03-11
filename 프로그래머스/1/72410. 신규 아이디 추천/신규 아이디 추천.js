function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9\-_.]/g, '')  // 1단계: 허용된 문자만 남김
        .replace(/\.{2,}/g, '.')        // 2단계: 연속된 마침표(.) 하나로 축소
        .replace(/^\.|\.$/g, '');       // 3단계: 처음과 끝의 마침표 제거

    if (answer.length === 0) answer = 'a';  // 4단계: 빈 문자열이면 "a" 대입

    if (answer.length >= 16) {
        answer = answer.slice(0, 15).replace(/\.$/, ''); // 5단계: 길이 제한 후 마지막 마침표 제거
    }

    answer = answer.padEnd(3, answer[answer.length - 1]); // 6단계: 길이가 2 이하라면 마지막 문자 반복

    return answer;
}
