T = int(input())
for tc in range(1,1+T):
    n = int(input())
    arr = list(input().split())
    first = arr[:(n+1)//2]
    second = arr[(n+1)//2:]

    print(f'#{tc}', end=" ")
    for i in range(0,(n+1)//2,1):
        print(first[i], end = " ")
        if i < len(second) :
            print(second[i], end = " ")
    print('')