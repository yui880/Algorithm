for test in range(1,11):
    n = int(input())
    arr = [input() for _ in range(100)]
    answer = 0
    for i in range(100):
        for j in range(100):
            for k in range(j+1,100):
                if arr[i][j:k] == arr[i][j:k][::-1]:
                    answer = max(answer,k-j)
    
    turn = list(map(list,zip(*arr)))
    for i in range(100):
        for j in range(100):
            for k in range(j+1,100):
                if turn[i][j:k] == turn[i][j:k][::-1]:
                    answer = max(answer,k-j)
    print(f'#{n} {answer}')