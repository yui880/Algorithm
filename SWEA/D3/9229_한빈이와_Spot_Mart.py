T = int(input())
for tc in range(1,T+1):
    n, m = map(int,input().split())
    a = list(map(int,input().split()))
    answer = -1
    for i in range(len(a)-1):
        for j in range(1,len(a)):
            temp = a[i]+ a[j]
            if temp <= m:
                if temp > answer:
                    answer = temp
    print(f'#{tc} {answer}')