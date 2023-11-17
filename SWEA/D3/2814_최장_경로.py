def dfs(start, count):
    global max_count

    visited[start] = True
    
    if count > max_count:
        max_count = count

    for i in arr[start]:
        if visited[i] == False:
            visited[i] = True
            dfs(i, count+1)
            visited[i] = False

    
T = int(input())
for tc in range(1,1+T):
    n, m = map(int,input().split())
    arr = [[] for _ in range(n+1)]
    
    for i in range(m):
        x, y = map(int,input().split())
        arr[x].append(y)
        arr[y].append(x)
    
    max_count = 0
    for i in range(1,n+1):
        visited = [False] * (n+1)
        dfs(i,1)
    print(f'#{tc} {max_count}')
