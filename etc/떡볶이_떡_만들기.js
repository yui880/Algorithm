
const makeRiceCake = (m, arr) => {
    let start = 0;
    let end = Math.max(...arr);
    let result = 0;

    while(start <= end){
        let mid = ~~((start+end)/2);
        console.log(mid);
        let total = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]-mid > 0) total += (arr[i]-mid);
        }

        if(total < m){
            end = mid -1;
        } else {
            result = mid;
            start = mid + 1;
        }
    }
    return result;
}

console.log(makeRiceCake(6, [19,15,10,17]));