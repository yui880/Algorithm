T = int(input())
for i in range(1,1+T):
    arr = [[int(x) for x in input().split()] for y in range(9)]
    flag = -1
    
    for j in range(9):
        if len(set(arr[j])) < 9:
            flag = 0
            break
        
    if flag == 0:
        print(f'#{i} 0')
        continue

    for j in range(9):
        if len(set([m[j] for m in arr])) < 9:
            flag = 0
            break

    if flag == 0:
        print(f'#{i} 0')
        continue

    for j in range(0,9,3):
        temp_list = []
        for k in range(0,9,3):
            sub = [row[k:k+3] for row in arr[j:j+3]]
            sub = sum(sub, []);
            if len(set(sub)) < 9:
                flag = 0
                break
        if flag == 0:
           break;
        
    if flag == 0:
        print(f'#{i} 0')
        continue
    else:
        print(f'#{i} 1')


            
        