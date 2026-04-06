from collections import deque
import sys

input = sys.stdin.readline

N = int(input())
Link = int(input())
graph = [[] for _ in range(N+1)]
for _ in range(Link):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
visited = [False] * (N+1)
def bfs():
    queue = deque([1])
    visited[1] = True
    count = 0
    while queue:
        current = queue.popleft()
        for next in graph[current]:
            if not visited[next]:
                visited[next] = True
                queue.append(next)
                count+=1
    print(count)
bfs()
