for test in range(1,11):
    n = int(input())
    arr = [list(input()) for _ in range(8)]
    count = 0
    for i in range(8):
        for j in range(9-n):
            string = ''.join(arr[i][j:j+n])
            if string == string[::-1]:
                count+=1

    turn_arr = list(map(list,zip(*arr[::-1])))
    for i in range(8):
        for j in range(9-n):
            string = ''.join(turn_arr[i][j:j+n])
            if string == string[::-1]:
                count+=1
    print(f'#{test} {count}')