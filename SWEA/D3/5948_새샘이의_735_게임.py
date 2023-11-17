from itertools import combinations

T = int(input())
for tc in range(1,1+T):
    arr = list(map(int,input().split()))
    combi = list(map(list,combinations(arr,3)))
    total = []
    for c in combi:
        total.append(sum(c))
    total = sorted(list(set(total)), reverse=True)
    print(f'#{tc} {total[4]}')
    