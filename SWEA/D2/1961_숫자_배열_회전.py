T = int(input())
for test in range(1,T+1):
    n = int(input())
    arr = [[int(x) for x in input().split()] for y in range(n)]
    total = []

    print(f'#{test}')
    for j in range(3):
        turn = list(map(list, zip(*arr[::-1])))
        temp = []
        for i in turn:
            temp.append("".join(map(str,i)))
        total.append(temp)
        arr = turn
    
    for i in list(map(list, zip(*total))):
        print(" ".join(i))    
    