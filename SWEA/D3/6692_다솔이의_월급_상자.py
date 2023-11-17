T = int(input())
for tc in range(1,1+T):
    n = int(input())
    answer = 0
    for _ in range(n):
        num = input().split()
        answer += float(num[0]) * int(num[1])
    print(f'#{tc} {answer : .6f}')