N = int(input())
MOD = 1000000000

# dp[i][j] = 길이 i, 끝자리 j
dp = [[0] * 10 for _ in range(N + 1)]

# 초기값
for i in range(1, 10):
    dp[1][i] = 1

# DP 진행
for i in range(2, N + 1):
    for j in range(10):
        if j == 0:
            dp[i][0] = dp[i-1][1]
        elif j == 9:
            dp[i][9] = dp[i-1][8]
        else:
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
        
        dp[i][j] %= MOD

# 결과
print(sum(dp[N]) % MOD)