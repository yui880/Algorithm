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

# 다시 풀기 

def dfs(node,count):
    global visited

    temp = int("".join(node))
    if temp in visited[count]: 
        return
    else: 
        visited[count].append(temp)
    
    if count == max_count: return
    
    for i in range(len_num-1):
        for j in range(i+1,len_num):
            node[i],node[j] = node[j],node[i]
            dfs(node, count+1)
            node[i],node[j] = node[j],node[i]

T = int(input())
for tc in range(1,T+1):
    first, max_count = input().split()
    first = list(first)
    len_num = len(first)
    max_count = int(max_count)

    visited = [[] for _ in range(max_count+1)]
 
    dfs(first,0)
    print(f'#{tc} {max(visited[max_count])}')
