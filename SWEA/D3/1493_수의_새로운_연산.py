def find(p):
    i = 1
    total_sum = 0
    while True:
        temp_sum = i * (i+1) // 2
        if temp_sum >= p:
            total_sum = temp_sum
            break
        i+=1
    x = i - (total_sum - p)
    y = i + 1 -x
    return [x,y]


T = int(input())
for tc in range(1,1+T):
    p1, p2 = map(int,input().split())
    x1,y1 = find(p1)
    x2,y2 = find(p2)
    x, y = x1+x2, y1+y2

    diagonal = x+y-1
    answer = diagonal * (diagonal+1) // 2 - (diagonal - x)
    print(f'#{tc} {answer}')