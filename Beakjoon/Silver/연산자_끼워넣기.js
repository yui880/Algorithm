//14888
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'Beakjoon/Silver/test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const nums = input.shift().split(' ').map(Number);
const operator = input.shift().split(' ').map(Number);

let max = -Infinity;
let min = Infinity;


const solution = () => {
    const dfs = (count, val) => {
        if(count === n){
            if(max < val) max = val;
            if(min > val) min = val;
            return;
        }

    
        for(let i=0;i<4;i++){
            const secondNum = nums[count];
            if(operator[i]){
                let temp = 0;
                if(i===0) temp = val + secondNum;
                if(i===1) temp = val - secondNum;
                if(i===2) temp = val * secondNum;
                if(i===3) temp = ~~(val / secondNum);
                
                operator[i]--;
                dfs(count+1, temp);
                operator[i]++;
            }
        }
    }

    dfs(1, nums[0]);
    console.log(max, min);

}

solution();

