for tc in range(1,11):
    n = int(input())
    cryto = list(input().split())
    m = int(input())
    s = list(input().split())

    while True:
        if len(s) == 0: break

        if s[0] == 'I':
            x = int(s[1])
            y = int(s[2])
            cryto = cryto[:x] + s[3:3+y] + cryto[x:]
            s = s[y+3:]
        elif s[0] == 'D':
            x = int(s[1])
            y = int(s[2])
            cryto = cryto[:x] + cryto[x+y:]
            s = s[3:]
        elif s[0] == 'A':
            y = int(s[1])
            cryto = cryto + s[2:2+y]
            s = s[y+2:]

    print(f'#{tc} {" ".join(cryto[:10])}')
