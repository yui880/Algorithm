# def dfs(count,sum):
#     global answer

#     if k < sum: 
#         return
#     if k == sum:
#         answer +=1
#         return
#     if count == n:
#         return
#     dfs(count+1,sum+ arr[count])
#     dfs(count+1,sum)


# T = int(input())
# for test in range(1,T+1):
#     n,k = map(int,input().split())
#     arr = list(map(int,input().split()))
#     answer = 0
#     dfs(0,0)
#     print(f'#{test} {answer}')


def dfs(s,idx):
    global answer

    if s > k: 
        return
    if s == k:
        answer+=1
        return
    if idx == n:
        return
    
    dfs(s+arr[idx],idx+1)
    dfs(s,idx+1)

T = int(input())
for tc in range(1,1+T):
    n,k = map(int,input().split())
    arr = list(map(int,input().split()))

    answer = 0
    dfs(0,0)
    print(f'#{tc} {answer}')