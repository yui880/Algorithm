T = int(input())
for tc in range(1,1+T):
    l,u,x = map(int,input().split())
    if u<x: 
        print(f'#{tc} -1')
    elif l<=x and x<=u:
        print(f'#{tc} 0')
    else:
        print(f'#{tc} {l-x}')
    