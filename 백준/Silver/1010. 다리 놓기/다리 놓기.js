const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
    const [N, M] = input[line++].split(' ').map(Number);
    
    function combination(n, r) {
        let result = BigInt(1);
        
        for (let i = 0; i < r; i++) {
            result = result * BigInt(n - i) / BigInt(i + 1);
        }
        
        return result;
    }
    
    const answer = combination(M, N);
    
    console.log(answer.toString());
}