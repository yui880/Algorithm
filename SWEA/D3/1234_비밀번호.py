for tc in range(1,11):
    n, password = input().split()
    stack = []
    for i in range(len(password)):
        if len(stack) == 0 or stack[len(stack)-1] != password[i]:
            stack.append(password[i])
        else:
            stack.pop()
        
    print(f'#{tc} {"".join(stack)}')