num = ["ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN"]
T = int(input())
for tc in range(1,T+1):
    n, length = input().split()
    arr = list(input().split())
    count = []
    for i in num:
        count.append(arr.count(i))
    print(f'#{tc}')
    for i in range(10):
        print(f'{num[i]} ' * count[i], end = '')
    print('')