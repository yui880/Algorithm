T = int(input())
for tc in range(1,1+T):
    n, m = map(int,input().split())
    fee = []
    for _ in range(n):
        fee.append(int(input()))
    weight = []
    for _ in range(m):
        weight.append(int(input()))
    order = []
    for _ in range(2*m):
        order.append(int(input()))
    
    parking_lot = [0] * n
    stay = []
    answer = 0
    for car in order:
        if car < 0:
            i = parking_lot.index(-1*car)
            parking_lot[i] = 0
            if len(stay) > 0:
                parking_lot[i] = stay[0]
                answer += fee[i] * weight[stay[0]-1]
                stay = stay[1:]
        else:
            if 0 in parking_lot:
                i = parking_lot.index(0) 
                parking_lot[i] = car
                answer += fee[i] * weight[car-1]
            else:
                stay.append(car)
            
    print(f'#{tc} {answer}')
