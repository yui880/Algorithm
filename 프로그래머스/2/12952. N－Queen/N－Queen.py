def solution(n):
    visited_col = [False] * n
    visited_first_d = [False] * 2 * n # x+y가 같은 대각선
    visited_second_d = [False] * 2 * n # x-y+n-1가 같은 대각선
    
    answer = [0]
    
    def back_tracking(x):        
        if x == n:
            answer[0] += 1
            return
        
        for y in range(n):
            if visited_col[y] or visited_first_d[x+y] or visited_second_d[x-y+n-1]:
                continue
            
            visited_col[y] = True
            visited_first_d[x+y] = True
            visited_second_d[x-y+n-1] = True
            
            back_tracking(x+1)
            
            visited_col[y] = False
            visited_first_d[x+y] = False
            visited_second_d[x-y+n-1] = False
    
    back_tracking(0)
    
    return answer[0]