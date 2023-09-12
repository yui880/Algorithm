
T = int(input())

for test_case in range(1, T + 1):
    li = list(map(int, input().split()))
    answer = 0
    for i in li :
        if i%2 == 1:
            answer += i
    print('#'+str(test_case), str(answer))
