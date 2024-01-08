# T = int(input())
# for tc in range(1,1+T):
#     n = int(input())
#     arr = list(map(int,input().split()))
#     answer = 0
#     for i in range(n-1):
#         temp_arr = arr[i+1:]
#         max_num = max(temp_arr)
#         if max_num > arr[i]:
#             answer += max_num - arr[i]
#     print(f'#{tc} {answer}')

T = int(input())
for tc in range(1,1+T):
    n = int(input())
    arr = list(map(int,input().split()))
    answer = 0
    price = 0
    for num in arr[::-1]:
        if num > price:
            price = num
        else:
            answer += price - num
    print(f'#{tc} {answer}')