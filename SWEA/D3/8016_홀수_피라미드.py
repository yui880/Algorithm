T = int(input())
for tc in range(1,1+T):
    n = int(input()) - 1
    first = n * (2*2 + (n-1)*4) // 2 + 1
    second = n * (2*6 + (n-1)*4) // 2 + 1
    print(f'#{tc} {first} {second}')