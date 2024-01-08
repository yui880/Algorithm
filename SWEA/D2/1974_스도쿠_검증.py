# T = int(input())
# for i in range(1,1+T):
#     arr = [[int(x) for x in input().split()] for y in range(9)]
#     flag = -1
    
#     for j in range(9):
#         if len(set(arr[j])) < 9:
#             flag = 0
#             break
        
#     if flag == 0:
#         print(f'#{i} 0')
#         continue

#     for j in range(9):
#         if len(set([m[j] for m in arr])) < 9:
#             flag = 0
#             break

#     if flag == 0:
#         print(f'#{i} 0')
#         continue

#     for j in range(0,9,3):
#         temp_list = []
#         for k in range(0,9,3):
#             sub = [row[k:k+3] for row in arr[j:j+3]]
#             sub = sum(sub, []);
#             if len(set(sub)) < 9:
#                 flag = 0
#                 break
#         if flag == 0:
#            break;
        
#     if flag == 0:
#         print(f'#{i} 0')
#         continue
#     else:
#         print(f'#{i} 1')


            

T = int(input())
for tc in range(1,1+T):
    arr = [[x for x in input().split()] for _ in range(9)]
    flag = True

    for i in range(9):
        if len(set(arr[i])) != 9:
            flag = False
    if flag == False:
        print(f'#{tc} 0')
        continue

    cols_arr = list(map(list,zip(*arr)))
    for i in range(9):
        if len(set(cols_arr[i])) != 9:
            flag = False
    if flag == False:
        print(f'#{tc} 0')
        continue

    
    for i in range(0,9,3):
        for j in range(0,9,3):
            total = []
            for k in range(i,i+3):
                total.append(arr[k][j:j+3])
            if len(set(sum(total,[]))) != 9:
                flag = False
                break
        if flag == False:
            break   
    
    if flag == False:
        print(f'#{tc} 0')
    else:
        print(f'#{tc} 1')
