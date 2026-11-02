def solution(cap, n, deliveries, pickups):
    deliveries = deliveries[:]  # 원본 배열 보호 (입력을 직접 바꾸지 않기)
    pickups = pickups[:]

    def skip_done(arr, idx):
        # 이미 0인 집은 갈 필요가 없으니 건너뜀
        while idx >= 0 and arr[idx] == 0:
            idx -= 1
        return idx

    def process(arr, idx):
        load = cap
        while idx >= 0 and load > 0:
            if arr[idx] <= load:      # 이 집 물량을 전부 처리 가능
                load -= arr[idx]
                arr[idx] = 0
                idx -= 1
            else:                     # 일부만 처리하고 트럭이 꽉 참
                arr[idx] -= load
                load = 0
        return skip_done(arr, idx)

    d = skip_done(deliveries, n - 1)  # 남은 배달 중 가장 먼 집
    p = skip_done(pickups, n - 1)     # 남은 수거 중 가장 먼 집
    answer = 0

    while d >= 0 or p >= 0:
        answer += (max(d, p) + 1) * 2  # 인덱스는 0부터라 +1
        d = process(deliveries, d)
        p = process(pickups, p)

    return answer