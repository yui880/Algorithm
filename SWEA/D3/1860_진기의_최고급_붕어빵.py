T = int(input())
for test in range(1,1+T):
    n,m,k = map(int, input().split())
    guest = list(map(int, input().split()))
    bread = 0
    answer = 'Possible'
    for i in range(max(guest)+1):
        if i > 0 and i % m == 0:
            bread += k
        
        if i in guest and bread <= 0:
            answer = 'Impossible'
            break

        if i in guest and bread > 0:
            bread -= guest.count(i)
            if bread < 0 :
                answer = 'Impossible'
                break
        
    print(f'#{test} {answer}')

