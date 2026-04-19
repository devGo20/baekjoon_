import sys
input = sys.stdin.readline

def check_winner(board, player):
    # 가로
    for i in range(3):
        if board[i][0] == player and board[i][1] == player and board[i][2] == player:
            return True

    # 세로
    for i in range(3):
        if board[0][i] == player and board[1][i] == player and board[2][i] == player:
            return True

    # 대각선
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True

    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False


while True:
    row = input().strip()

    if row == 'end':
        break

    x_cnt = row.count('X')
    o_cnt = row.count('O')

    if x_cnt < o_cnt or x_cnt > o_cnt + 1:
        print('invalid')
        continue

    # board 만들기
    board = []
    for i in range(3):
        temp = []
        for j in range(3):
            temp.append(row[i*3 + j])
        board.append(temp)

    x_win = check_winner(board, 'X')
    o_win = check_winner(board, 'O')

    if x_win and o_win:
        print('invalid')
        continue

    if o_win and x_cnt != o_cnt:
        print('invalid')
        continue

    if x_win and x_cnt != o_cnt + 1:
        print('invalid')
        continue

    if not x_win and not o_win:
        if x_cnt + o_cnt != 9:
            print('invalid')
            continue

    print('valid')
