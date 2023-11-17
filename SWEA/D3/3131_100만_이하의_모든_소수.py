import math
n = 10**6 
arr = [True] * (n+1)
for i in range(2,int(math.sqrt(n)) + 1):
    if arr[i] == True:
        for j in range(i+i,n+1,i):
            arr[j] = False

for i in range(2,n+1):
    if arr[i]:
        print(i, end=" ")
