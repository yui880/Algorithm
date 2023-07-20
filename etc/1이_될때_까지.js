function toOne(n, k){
    let count = 0;
    while(n !== 1){
        ((n % k) === 0) 
        ? n = (n / k) 
        : n-- ;

        count++;
    }
    return count;
}

console.log(toOne(25, 3));
