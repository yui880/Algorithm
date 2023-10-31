date = [0,31,28,31,30,31,30,31,31,30,31,30,31]
T = int(input())

for i in range(1,T+1):
    m1,d1,m2,d2 = map(int,input().split())
    day1 = d1 + sum(date[:m1])
    day2 = d2 + sum(date[:m2])

    print(f'#{i} {day2-day1+1}')