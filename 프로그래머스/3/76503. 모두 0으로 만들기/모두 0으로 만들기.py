import sys
import math

sys.setrecursionlimit(300000)

def solution(a, edges):
    total = sum(a)
    if total != 0:
        return -1
    
    tree = dict()
    for [u,v] in edges:
        if u not in tree: 
            tree[u] = []
        if v not in tree: 
            tree[v] = []
        
        tree[u].append(v)
        tree[v].append(u)
    
    answer = 0
    visited = set()
    
    def dfs(node, parent):
        nonlocal answer
        
        visited.add(node)
        node_sum = a[node]
        
        for next in tree[node]:
            if next in visited or next == parent:
                continue
            
            child_sum = dfs(next, node)
            node_sum += child_sum
            answer += abs(child_sum)
        
        return node_sum
    
    dfs(0, -1)
    return answer
    