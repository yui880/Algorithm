# from itertools import combinations

# T = int(input())
# for test in range(1,1+T):
#     N,L = map(int,input().split())
#     menu = []
#     for i in range(N):
#         temp = list(map(int,input().split()))
#         menu.append(temp)
#     combi = []
#     for i in range(1,N+1):
#         combi.append(list(combinations(menu,i)))
#     val = []
#     print(combi)
#     for i in combi:
#         for k in i:
#             cal = 0
#             score = 0
#             for j in k:
#                 score += j[0]
#                 cal += j[1]
#             if cal<=L:
#                 val.append(score)
#     print(f'#{test} {max(val)}')






# def dfs(count,sTaste,sKcal):
#     global maxTaste
    
#     if sKcal > L: 
#         return
#     if maxTaste < sTaste: 
#         maxTaste = sTaste
#     if count == N: 
#         return
    
#     taste,kcal = data[count]
#     dfs(count+1,taste+sTaste, sKcal+kcal)
#     dfs(count+1,sTaste, sKcal)



# t = int(input())
# for tc in range(1,1+t):
#     N,L = map(int,input().split())
#     data = [list(map(int, input().split())) for _ in range(N)]

#     maxTaste = 0
#     dfs(0,0,0)
#     print(f'#{tc} {maxTaste}')


def dfs(s,kcal,idx):
    global max_sum

    if kcal > l: # 순서주의, 칼로리 확인이 먼저
        return
    if s > max_sum:
        max_sum = s
    if idx == n: #중단 범위도 조심
        return
    
    dfs(s+arr[idx][0], kcal+arr[idx][1], idx+1)
    dfs(s,kcal,idx+1)

        
T = int(input())
for tc in range(1,1+T):
    n,l = map(int,input().split())
    arr = []
    for i in range(n):
        arr.append(list(map(int,input().split())))
    max_sum = 0
    dfs(0,0,0)
    print(f'#{tc} {max_sum}')
