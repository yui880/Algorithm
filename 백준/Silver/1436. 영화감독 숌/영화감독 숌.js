const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);

function containsTripleSix(num) {
    const str = num.toString();
    return str.includes('666');
}

function findNthDoomNumber(N) {
    let count = 0;
    let num = 666;
    
    while (count < N) {
        if (containsTripleSix(num)) {
            count++;
        }
        
        if (count === N) {
            return num;
        }
        
        num++;
    }
    
    return num;
}

console.log(findNthDoomNumber(N));