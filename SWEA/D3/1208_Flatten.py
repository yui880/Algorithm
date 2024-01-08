# for test in range(1,11):
#     num = int(input())
#     arr = list(map(int,input().split()))
#     for i in range(num):
#         max_num = max(arr)
#         min_num = min(arr)
#         arr[arr.index(max_num)] -= 1
#         arr[arr.index(min_num)] += 1
#     print(f'#{test} {max(arr)-min(arr)}')


# for test in range(1,11):
#     num = int(input())
#     arr = list(map(int,input().split()))
#     sorted_arr = sorted(arr)

#     for i in range(num):
#         sorted_arr[-1] -= 1
#         sorted_arr[0] += 1
#         if sorted_arr[-1] < sorted_arr[-2]:
#             sorted_arr = sorted(sorted_arr)
        
#         if sorted_arr[0] > sorted_arr[1]:
#              sorted_arr = sorted(sorted_arr)
    
#     print(f'#{test} {max(sorted_arr)-min(sorted_arr)}')



for tc in range(1,11):
    n = int(input())
    arr = sorted(list(map(int,input().split())))

    for i in range(n):
        arr[0] += 1
        arr[-1] -= 1

        if arr[0] > arr[1] or arr[-1]<arr[-2]:
            arr = sorted(arr)
    
    print(f'#{tc} {arr[-1]-arr[0]}')

    



