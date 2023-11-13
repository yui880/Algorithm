T = int(input())
for tc in range(1,T+1):
    arr = [list(input()) for _ in range(5)]
    turn = []
    for x in range(15):
        temp = []
        for y in arr:
            if len(y) > x:
                temp.append(y[x])
            else:
                temp.append('')
        turn.append(temp)
    
    print(f'#{tc}', end=" ")
    for i in turn:
        print("".join(i), end= '')
    print('')