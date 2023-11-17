T = int(input())
for tc in range(1,T+1):
    s = input()
    card = [[],[],[],[]] #s,d,h,c
    error = False
    for i in range(0,len(s),3):
        sub = s[i:i+3]
        num = int(sub[1:])
        
        if sub[0] == 'S':
            if num in card[0] : 
                error = True
                break
            else : card[0].append(num)
        elif sub[0] == 'D':
            if num in card[1] : 
                error = True
                break
            else : card[1].append(num)
        elif sub[0] == 'H':
            if num in card[2] : 
                error = True
                break
            else : card[2].append(num)
        elif sub[0] == 'C':
            if num in card[3] : 
                error = True
                break
            else : card[3].append(num)
    
    if error == True: print(f'#{tc} ERROR')
    else: 
        print(f'#{tc}', end=" ")
        for arr in card:
            print(13 - len(arr), end=" ")
        print('')