def solution(beginning, target):
    rlen = len(beginning)
    clen = len(beginning[0])
    answer = 10000000
    
    for mask in range(1 << rlen):
        flip_count = 0
        board = []
        
        for r in range(rlen):
            if mask & (1 << r):
                flip_count += 1
                board.append([(1 if x == 0 else 0) for x in beginning[r]])
            else:
                board.append(beginning[r][:])
        
        flag = True
        
        for j in range(clen):
            temp = board[0][j] == target[0][j]
            for i in range(rlen):
                if temp != (board[i][j] == target[i][j]):
                    flag = False
                    break
            
            if flag == False:
                break
            if temp == False:
                flip_count += 1
        
        if flag:
            answer = min(answer, flip_count)
            
    
    return -1 if answer == 10000000 else answer
                
        