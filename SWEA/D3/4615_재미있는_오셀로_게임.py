dx = [-2,-2,-2,0,0,0,2,2,2]
dy = [-2,0,2,-2,0,2,-2,0,2]

T = int(input())

for tc in range(1,1+T):
    n, m = map(int,input().split())
    arr = [[0 for _ in range(n)] for _ in range(n)]
    start = n // 2
    arr[start-1][start-1] = 2
    arr[start][start-1] = 1
    arr[start-1][start] = 1
    arr[start][start] = 2

    for i in range(m):
        y,x,stone = map(int,input().split())
        y = y-1
        x = x-1
        print(x, y, stone)
        arr[x][y] = stone
        
        for j in range(9):
            nx = x + dx[j]
            ny = y + dy[j]
            nx2 = x + dx[j] // 2
            ny2 = y + dy[j] // 2
            if nx<0 or nx>=n or ny<0 or ny>=n: continue
            if arr[nx][ny] == stone:
                arr[nx2][ny2] = stone
        
        
    temp_list = sum(arr,[])
    print(arr)
    print(f'#{tc} {temp_list.count(1)} {temp_list.count(2)}')
 

        
