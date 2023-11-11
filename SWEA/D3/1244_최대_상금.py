def dfs(numbers,cnt):
    global result

    temp = "".join(numbers)
    if int(temp) in result[cnt]: return
    else: result[cnt].append(int(temp))

    if cnt == 0: return

    n = len(numbers)

    for i in range(n-1):
        for j in range(i+1,n):
            numbers[i],numbers[j] = numbers[j],numbers[i]
            dfs(numbers, cnt -1)
            numbers[j],numbers[i] = numbers[i],numbers[j]


t = int(input())
for tc in range(1,1+t):
    nums, count = input().split()
    nums = list(nums)
    result = [[] for _ in range(int(count)+1)]

    dfs(nums,int(count))
    print(f'#{tc} {max(result[0])}')

        