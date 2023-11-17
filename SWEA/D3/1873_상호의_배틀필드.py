
T = int(input())
for tc in range(1,1+T):
    h,w = map(int,input().split())
    arr = [list(input()) for _ in range(h)]
    n = int(input())
    command = list(input())
    x, y = 0, 0
    direction = ''

    for i in range(h):
        for j in range(w):
            if arr[i][j] == '^':
                direction = 'U'
                x,y = i,j
                break
            if arr[i][j] == 'v':
                direction = 'D'
                x,y = i,j
                break
            if arr[i][j] == '>':
                direction = 'R'
                x,y = i,j
                break
            if arr[i][j] == '<':
                direction = 'L'
                x,y = i,j
                break
    
    for c in command:
        if c == 'U':
            direction = 'U'
            arr[x][y] = '^'
            if x-1 >= 0 and arr[x-1][y] == '.':
                arr[x-1][y] = '^'
                arr[x][y] = '.'
                x = x-1
        if c == 'D':
            direction = 'D'
            arr[x][y] = 'v'
            if x+1 < h and arr[x+1][y] == '.':
                arr[x+1][y] = 'v'
                arr[x][y] = '.'
                x = x+1  
        if c == 'L':
            direction = 'L'
            arr[x][y] = '<'
            if y-1 >= 0 and arr[x][y-1] == '.':
                arr[x][y-1] = '<'
                arr[x][y] = '.'
                y = y-1
        if c == 'R':
            direction = 'R'
            arr[x][y] = '>'
            if y+1 < w and arr[x][y+1] == '.':
                arr[x][y+1] = '>'
                arr[x][y] = '.'
                y = y+1
        if c == 'S':
            if direction == 'U':
                for i in range(x,-1,-1):
                    if arr[i][y] == '*':
                        arr[i][y] = '.'
                        break
                    if arr[i][y] == '#':
                        break
            if direction == 'D':
                for i in range(x,h):
                    if arr[i][y] == '*':
                        arr[i][y] = '.'
                        break
                    if arr[i][y] == '#':
                        break            
            if direction == 'L':
                for i in range(y,-1,-1):
                    if arr[x][i] == '*':
                        arr[x][i] = '.'
                        break
                    if arr[x][i] == '#':
                        break
            if direction == 'R':
                for i in range(y,w):
                    if arr[x][i] == '*':
                        arr[x][i] = '.'
                        break
                    if arr[x][i] == '#':
                        break
        
    print(f'#{tc}', end=" ")
    for i in arr:
        print(''.join(i))
    
