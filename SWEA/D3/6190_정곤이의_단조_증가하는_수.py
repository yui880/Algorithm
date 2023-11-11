from itertools import combinations

def isSorted(temp_list):
    for i in range(len(temp_list)-1):
        if temp_list[i] > temp_list[i+1]:
            return False
    return True

T = int(input())
for tc in range(1,1+T):
    n = int(input())
    arr = list(map(int,input().split()))
    combi = combinations(arr,2)
    max_num = 0
    for x in combi:
        target = x[0] * x[1]
        if target < max_num: continue
        
        temp = x[0] * x[1]
        temp_list = []
        while temp > 0:
            temp_list.append(temp%10)
            temp = temp // 10
        temp_list = temp_list[::-1]

        if isSorted(temp_list):
            if max_num < target: 
                max_num = target
    if max_num == 0: 
        print(f'#{tc} {-1}')
    else : print(f'#{tc} {max_num}')
