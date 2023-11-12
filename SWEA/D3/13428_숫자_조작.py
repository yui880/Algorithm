T = int(input())
for tc in range(1,T+1):
    num = list(input())
    min_num = int("".join(num))
    max_num = int("".join(num))
    length = len(num)

    for i in range(len(num)-1):
        for j in range(i+1,len(num)):
            num[i],num[j] = num[j],num[i]
            temp = int("".join(num))
            if temp > max_num :
                max_num = temp
            if temp < min_num and len(str(temp)) == length :
                
                min_num = temp
            num[i],num[j] = num[j],num[i]
    print(f'#{tc} {str(min_num)} {str(max_num)}')
