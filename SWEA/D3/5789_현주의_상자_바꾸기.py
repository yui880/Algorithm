T = int(input())
for tc in range(1,1+T):
    n, q = map(int,input().split())
    arr = [0 for i in range(n)]
    for i in range(1,q+1):
        l,r = map(int, input().split())
        for j in range(l,r+1):
            arr[j-1] = i
    print(f"#{tc}", end=" ")
    for num in arr:
        print(num, end=" ")
    print('')
