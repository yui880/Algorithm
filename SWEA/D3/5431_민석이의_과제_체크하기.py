T = int(input())
for tc in range(1,1+T):
    n,m = map(int,input().split())
    student = list(map(int,input().split()))
    arr = [False] * (n+1)
    for s in student:
        arr[s] = True
    print(f'#{tc}', end =" ")
    for i in range(1,len(arr)):
        if arr[i] == False: print(i, end=" ")
    print("")