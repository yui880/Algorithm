for test in range(1,11):
    n = int(input())
    arr = [[x for x in input().split()] for _ in range(n)]
    turn = list(map(list,zip(*arr[::-1])))
    temp = []
    ans = 0
    for i in turn:
        temp.append("".join(i).replace('0',''))
    for i in temp:
        ans += i.count('21')
    print(f'#{test} {ans}')


for test in range(1,11):
    n = int(input())
    arr = [[x for x in input().split()] for _ in range(n)]
    turn = list(map(list,zip(*arr)))
    temp = []
    ans = 0
    for i in turn:
        temp.append("".join(i).replace('0',''))
    for i in temp:
        ans += i.count('12')
    print(f'#{test} {ans}')