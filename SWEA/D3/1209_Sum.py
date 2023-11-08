for test in range(1,11):
    n = int(input())
    arr = [[int(x) for x in input().split()] for _ in range(100)]
    total = []
    
    for i in arr:
        total.append(sum(i))
    
    turn_arr = list(map(list,zip(*arr[::-1])))
    for i in turn_arr:
        total.append(sum(i))
    
    temp = 0
    for i in range(100):
        temp += arr[i][i]
    total.append(temp)

    temp = 0
    for i in range(100):
        temp += turn_arr[i][i]
    total.append(temp)

    print(f'#{test} {max(total)}')

