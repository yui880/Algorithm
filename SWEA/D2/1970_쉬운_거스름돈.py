unit = [50000,10000,5000,1000,500,100,50,10]

T = int(input())
for test in range(1,1+T):
    money = int(input())
    count = []
    for i in unit:
        count.append(money// i)
        money = money % i
    print(f'#{test}')
    for j in count:
        print(j, end=" ")
    print('')
    