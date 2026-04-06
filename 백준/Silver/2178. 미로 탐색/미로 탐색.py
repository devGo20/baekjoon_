from collections import deque
import sys

input = sys.stdin.readline

R, C = map(int, input().split())
maze = [list(map(int, input().strip())) for _ in range(R)]

dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

def bfs():
    queue = deque()
    queue.append((0, 0))

    while queue:
        r, c = queue.popleft()

        for i in range(4):
            nr = r + dr[i]
            nc = c + dc[i]

            if 0 <= nr < R and 0 <= nc < C and maze[nr][nc] == 1:
                maze[nr][nc] = maze[r][c] + 1
                queue.append((nr, nc))

bfs()
print(maze[R-1][C-1])
