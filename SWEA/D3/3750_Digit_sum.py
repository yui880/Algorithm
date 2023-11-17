T = int(input())
arr = []
for i in range(T):
    arr.append(input())

answers = []
for num in arr:
    number = num
    answer = 0
    while True:
        total = 0
        for i in number:
            total += int(i)
        if total > 9:
            number = str(total)
        else: 
            answer = total
            break
    answers.append(answer)

for i in range(T):
    print(f'#{i+1} {answers[i]}')
