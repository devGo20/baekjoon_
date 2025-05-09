function solution(N, number) {
    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i < 9; i++) {
        dp[i].add(Number(String(N).repeat(i)));

        for (let j = 1; j < i; j++) {
            for (let x of dp[j]) {
                for (let y of dp[i - j]) {
                    dp[i].add(x + y);
                    dp[i].add(x - y);
                    dp[i].add(x * y);
                    if (y !== 0) {
                        dp[i].add(Math.floor(x / y));
                    }
                }
            }
        }

        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1;
}
