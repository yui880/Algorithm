
for T in range(1,11):
    n = int(input())
    arr = list(map(int,input().split()))
    building = 0
    for i in range(2,n-2):
        temp1 = 0
        temp2 = 0
       
        if arr[i] <= arr[i-1] or arr[i] <= arr[i-2]:
            continue
        elif arr[i-2] > arr[i-1]:
            temp1 = arr[i] - arr[i-2]
        else:
            temp1 = arr[i] - arr[i-1]
        
        if arr[i] <= arr[i+1] or arr[i] <= arr[i+2]:
            continue
        elif arr[i+2] > arr[i+1]:
            temp2 = arr[i] - arr[i+2]
        else:
            temp2 = arr[i] - arr[i+1]
        
        building += min(temp1, temp2)
    print(f'#{T} {building}')



for T in range(1,11):
    n = int(input())
    arr = list(map(int,input().split()))
    building = 0
    for i in range(2,n-2):
        max_height = max(arr[i-1], arr[i-2], arr[i+1], arr[i+2])
        if max_height < arr[i]:
            building += arr[i] - max_height
        
    print(f'#{T} {building}')
