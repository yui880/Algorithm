// 2070

T = int(input())

for test_case in range(1, T + 1):
    first,second = map(int, input().split());
    if first < second :
        sign = '<'
    if first > second :
        sign = '>'
    if first == second :
        sign = '='
    print('#'+str(test_case), sign)