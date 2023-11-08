T = int(input())
for test in range(1,1+T):
    bit = input()
    ans = 0
    if bit[0] == '1': ans += 1

    for i in range(0,len(bit)-1):
        if bit[i] != bit[i+1]:
            ans += 1
    print(f'#{test} {ans}')