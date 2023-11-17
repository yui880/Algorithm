
for tc in range(1,11):
    n = input()
    arr = list(map(int,input().split()))
    count = min(arr) // 15
    
    flag = True
    while flag:
        for i in range(1,6):
            temp = arr[0] - i
            if temp <= 0:
                arr = arr[1:] + [0]
                flag = False
                break
            else:
                arr = arr[1:] + [temp]
    print(f'#{tc} {" ".join(list(map(str,arr)))}')

    