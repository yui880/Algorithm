
function bigNumber(n,m,k, arr){
    let sum = 0;
    arr.sort((a,b) => b-a);
 
    for(let num of arr){
        for(let i=0;i<k;i++){
            sum += num;
            m--;
            if(m <= 0) break;
        }
        if(m <= 0) break; 
    }    
    return sum;
}


console.log(bigNumber(5,8,3,[2,4,5,4,6]));

function bigNumber(n,m,k,arr){
    let sum = 0;
    let count = 0;
    arr.sort((a,b)=> b-a);
    const first = arr[0];
    const second = arr[1];
    
    for(let i=0;i<m;i++){
        if(count < k){
            sum += first;
            count++;
        } else {
            sum += second;
            count = 0;
        }
    }
    return sum;
}

console.log(bigNumber(5,8,3,[2,4,5,4,6]));

function bigNumber(n,m,k,arr){
    arr.sort((a,b) => b-a);
    const first = arr[0];
    const second = arr[1];

    const count = Math.floor(m/(k+1)) * k + (m % (k+1));
    const firstResult = count * first;
    const secondResult = (m - count) * second;
    return firstResult + secondResult;
}
console.log(bigNumber(5,8,3,[2,4,5,4,6]));