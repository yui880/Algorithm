T = int(input())
for tc in range(1,1+T):
    n = int(input())
    dx = [0,1,0,-1]
    dy = [1,0,-1,0]
    arr = [[0 for _ in range(n)] for _ in range(n)]
    x, y = 0,0
    d = 0

    for i in range(1,n**2+1):
        arr[x][y] = i
        x += dx[d]
        y += dy[d]

        if x<0 or y<0 or x>=n or y>=n or arr[x][y] != 0:
            x -= dx[d]
            y -= dy[d]

            d = (d+1) % 4

            x += dx[d]
            y += dy[d]
    
    print(f'#{tc}')
    for row in arr:
        print(*row)