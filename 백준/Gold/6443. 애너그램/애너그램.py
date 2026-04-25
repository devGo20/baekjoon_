import sys
input = sys.stdin.readline

N = int(input())

def dfs(path, visited):
    if len(path) == len(word):
        print(''.join(path))
        return

    for i in range(len(word)):
        if visited[i]:
            continue

        # 🔥 중복 제거 핵심
        if i > 0 and word[i] == word[i-1] and not visited[i-1]:
            continue

        visited[i] = True
        path.append(word[i])

        dfs(path, visited)

        path.pop()
        visited[i] = False


for _ in range(N):
    word = list(input().strip())
    word.sort()  # 사전순 보장

    visited = [False] * len(word)
    dfs([], visited)
