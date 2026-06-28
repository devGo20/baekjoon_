function solution(info, n, m) {
    let states = new Set(["0,0"]);

    for (const [aCost, bCost] of info) {
        const nextStates = new Set();

        for (const state of states) {
            const [a, b] = state.split(",").map(Number);

            // A가 훔침
            if (a + aCost < n) {
                nextStates.add(`${a + aCost},${b}`);
            }

            // B가 훔침
            if (b + bCost < m) {
                nextStates.add(`${a},${b + bCost}`);
            }
        }

        states = nextStates;
    }

    if (states.size === 0) {
        return -1;
    }

    let answer = Infinity;
    for (const state of states) {
        const [a] = state.split(",").map(Number);
        answer = Math.min(answer, a);
    }

    return answer;
}