table = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      '0','1','2','3','4','5','6','7','8','9','+','/' ]

T = int(input())
for tc in range(1,1+T):
    s = list(input())
    binary_s = ''
    for i in s:
        num = table.index(i)
        binary_s += str(bin(num))[2:].zfill(6)
    answer = ''
    for i in range(0,len(binary_s),8):
        temp = binary_s[i:i+8]
        integer_num = int(temp,2)
        answer += chr(integer_num)
    print(f'#{tc} {answer}')

    