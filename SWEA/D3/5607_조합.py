import math

T = int(input())
for tc in range(1,T+1):
    n, r = map(int,input().split())
    answer = math.factorial(n) // (math.factorial(n-r) * math.factorial(r)) % 1234567891
    print(f'#{tc} {answer}')

# 시간 초과