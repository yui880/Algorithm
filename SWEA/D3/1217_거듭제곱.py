def f(count):
    global total
    if count == m : return
    total *= n
    return f(count+1)

for tc in range(1,11):
    num = int(input())
    n,m = map(int,input().split())
    total = 1
    f(0)
    print(f'#{tc} {total}')