T = int(input())
for tc in range(1,1+T):
    bus = [0 for x in range(5001)]
    n = int(input())
    arr = [list(map(int,input().split())) for _ in range(n)]
    p = int(input())
    c = []
    for x in range(p):
        c.append(int(input()))
    
    for i in range(n):
        for j in range(arr[i][0],arr[i][1]+1):
            bus[j] += 1
    
    print(f'#{tc}',end=' ')
    for i in range(p):
        print(bus[c[i]], end=" ")
    print('')
