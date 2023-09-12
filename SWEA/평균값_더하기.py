T = int(input())

for test_case in range(1, T + 1):
    li = list(map(int, input().split()))
    _sum = sum(li)
    length = len(li)
    print('#'+str(test_case), round(_sum/length))
    