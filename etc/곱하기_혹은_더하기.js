
function plusOrMultiple(str){
    const numbers = str.split('').map(v => parseInt(v));
    let sum = numbers[0];
    for(let i =1;i<numbers.length;i++){
        if(sum <= 1 || numbers[i] <= 1){
            sum += numbers[i];
        } else {
            sum *= numbers[i];
        }
    }
    return sum;
}

console.log(plusOrMultiple('02984'));
console.log(plusOrMultiple('567'));
console.log(plusOrMultiple('00984'));