for tc in range(1,11):
    n = int(input())
    original = list(input().split())
    cnt = int(input())
    command = [x.split() for x in input().split('I')[1:]]
    for x in command:
        start = int(x[0])
        m = int(x[1])
        s = x[2:]
        original = original[:start] + s + original[start:]
    print(f'#{tc} {" ".join(original[:10])}')