function solution(a, edges) {
    let sum = a.reduce((sum, cur)=> sum+cur, 0)
    if(sum !== 0) return -1;
    
    const tree = {};
    
    for(const [u,v] of edges){
        tree[u] ? tree[u].push(v) : tree[u] = [v]
        tree[v] ? tree[v].push(u) : tree[v] = [u]
    }

    const visited = new Set();
    let answer = 0n;
    
    const stack = [[0, null]]; // [node, parent]
    const sums = Array(a.length).fill(0n);
   
    while(stack.length) {
       const [node, parent] = stack[stack.length - 1];
       
       if(!visited.has(node)) { // 방문한 적 없으면
           visited.add(node);
           sums[node] = BigInt(a[node]);
           
           for(const next of tree[node]) { // 방문하고 부모 아닌 다음 위치로 이동
               if(next !== parent) stack.push([next, node]);
           }
       } else {
           stack.pop(); // 방문 했으면 탐색 X
           if(parent !== null) { 
               sums[parent] += sums[node];
               answer += BigInt(Math.abs(Number(sums[node])));
           }
       }
   }
    
   return answer;
}