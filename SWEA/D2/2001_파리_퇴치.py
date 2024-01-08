T = int(input())
for tc in range(1,T+1):
    n, m = map(int,input().split())
    arr = [[int(x) for x in input().split()] for _ in range(n)]
    max_sum = 0
    for i in range(n-m+1):
        for j in range(n-m+1):
            temp_sum = 0
            for k in range(i,i+m):
                temp_sum += sum(arr[k][j:j+m])
            if temp_sum > max_sum:
                max_sum = temp_sum

    print(f'#{tc} {max_sum}')