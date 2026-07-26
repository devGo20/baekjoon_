import sys
sys.setrecursionlimit(10**6)
def solution(maps):
    answer = []
    n = len(maps)
    m = len(maps[0])

    visited = [[False] * m for _ in range(n)]
    def dfs(x, y):
        visited[x][y] = True
        total = int(maps[x][y])
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]

            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and not maps[nx][ny] == 'X':
                total += dfs(nx, ny)
        
        return total
    for i in range(n):
        for j in range(m):
            if maps[i][j].isdigit() and not visited[i][j]:
                answer.append(dfs(i,j))
            
    answer.sort()

    if not answer:
        return [-1]

    return answer