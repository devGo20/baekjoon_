from itertools import combinations

def solution(relation):
    answer = []
    combo_list = []
    col_cnt = len(relation[0])
    for r in range(1, col_cnt + 1): # 선택할 개수
        for combo in combinations(range(col_cnt), r):
            combo_list.append(combo)
            

    for combo in combo_list:
        temp = set()

        for row in relation:
            arr = [] # 키 조합
            for idx in combo:
                arr.append(row[idx])
            temp.add(tuple(arr))
        if len(temp) != len(relation):
            continue
        is_minimal = True
        for key in answer:
            if set(key).issubset(set(combo)):
                is_minimal = False
                
        if is_minimal:
            answer.append(combo)

    return len(answer)