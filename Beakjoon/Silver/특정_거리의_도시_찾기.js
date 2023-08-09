// 18352 

let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m,k,x] = input[0].split(' ').map((v) => Number(v));
const roads = input.filter((v,i) => i !== 0).map(n => n.split(' ').map(a => Number(a)));
// 'Beakjoon/silver/text.txt'

const solution = () => {
    
    const bfs = (root) => {
        const queue = [];
        const distance = new Array(n+1).fill(0);
        const visited = new Array(n+1).fill(false);
        queue.push(root);
        visited[root] = true;

        while(queue.length > 0){
            const current = queue.shift();
            if(current > k) continue;
            for(let i=0;i<roads.length;i++){
        
                if(roads[i][0] === current && !visited[roads[i][1]]){
                    distance[roads[i][1]] = distance[roads[i][0]] + 1;
                    visited[roads[i][1]] = true;
                    queue.push(roads[i][1]);
                }
            }
        }
        
        return distance;
    }
    
    const temp = bfs(x);
    
    const answer = [];
    for(let i=1;i<temp.length;i++){
        if(temp[i] === k) answer.push(i);
    }
    if(answer.length === 0) console.log(-1);
    return answer.map(v => console.log(v));
}

solution();