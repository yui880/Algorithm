T = int(input())
for test in range(1,1+T):
    n,k = map(int,input().split())
    arr = [[int(x) for x in input().split()] for y in range(n)]
    total_count = 0

    for i in range(n):
        target = [str(j[i]) for j in arr]
        target_arr = "".join(target).split('0')
        for a in target_arr:
            if len(a) == k:
                total_count+=1
    
    for i in range(n):
        target = list(map(str,arr[i]))
        target_arr = "".join(target).split('0')
        for a in target_arr:
            if len(a) == k:
                total_count+=1
    
    print(f'#{test} {total_count}')
            
              

