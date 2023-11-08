T = int(input())
for test in range(1,1+T):
    n = int(input())
    arr = [[int(x) for x in list(input())] for j in range(n)]
    total = 0
    standard = n//2
    for i in range(n//2,0,-1):
        temp = arr[standard-i][i:-i]
        total+=sum(temp)
    total += sum(arr[standard]);
    for i in range(n//2,0,-1):
        temp = arr[standard+i][i:-i]
        total+=sum(temp)
    print(f'#{test} {total}')


for test in range(1,1+T):
    n = int(input())
    arr = [[int(x) for x in list(input())] for j in range(n)]
    total = 0
    s, e = n//2, n//2
    for i in range(n):
        for j in range(s,e+1):
            total += arr[i][j]
        if i< n//2:
            s -= 1
            e += 1
        else:
            s += 1
            e -= 1
    print(f'#{test} {total}')
