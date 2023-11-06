T = int(input())
for test in range(1,1+T):
    n,m = map(int,input().split())
    min_len = min(n,m)
    a_list = list(map(int,input().split()))
    b_list = list(map(int,input().split()))
    
    if min_len == n:
        temp_list = []
        for i in range(m-n+1):
            temp_list.append(b_list[i:i+n])
        
        total = 0
        for i in temp_list:
            temp_sum = 0
            for j in range(n):
                temp_sum = temp_sum + a_list[j] * i[j]
            if temp_sum > total: total = temp_sum
        print(f'#{test} {total}')

    elif min_len == m:
        temp_list = []
        for i in range(n-m+1):
            temp_list.append(a_list[i:i+m])
        
        total = 0
        for i in temp_list:
            temp_sum = 0
            for j in range(m):
                temp_sum = temp_sum + b_list[j] * i[j]
            if temp_sum > total: total = temp_sum
        print(f'#{test} {total}')