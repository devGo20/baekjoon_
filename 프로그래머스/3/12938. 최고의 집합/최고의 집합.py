def solution(n, s):
    if n > s:
        return [-1]

    q = s // n   # 몫
    r = s % n    # 나머지

    answer = []

    # 몫을 최대한 넣기
    for i in range(n - r):
        answer.append(q)

    # 몫 + 1을 r번 넣기
    for i in range(r):
        answer.append(q + 1)

    return answer