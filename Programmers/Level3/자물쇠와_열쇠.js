function solution(key, lock) {
    const len = key.length * 2 + lock.length - 2;
    const keyLen = key.length;
    const lockLen = lock.length;
    let largeLock = new Array(len).fill(0).map(() => new Array(len).fill(0));
    let x = 0;
    let y = 0;
    
    
    for(let i=keyLen-1 ;i<=lockLen + keyLen -2;i++,x++){
        for(let j=keyLen-1 ;j<=lockLen + keyLen -2;j++,y++){
            largeLock[i][j] = lock[x][y];
        }
        y = 0;
    }
 
    let count = 5;
    let num = 0;

    while(--count){
        key = turn(key);
        for(let i=0;i<=lockLen+keyLen-2;i++){
            for(let j=0;j<=lockLen+keyLen-2;j++){
                let tempLock = largeLock.map(v => [...v]);
                
                for(let x=0;x<keyLen;x++){
                    for(let y=0;y<keyLen;y++){
                        tempLock[i+x][j+y] += key[x][y];
                        num++;
                    }
                }
                const isUnlock = check(tempLock,keyLen,lockLen);
                if(isUnlock === true) return true;
                
            }
        }
    }
    return false;
    
}



function turn(arr){
    let len = arr.length;
    let newArr = Array.from(Array(len), () => Array(len).fill(null));
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            newArr[i][j] = arr[len-1-j][i];
        }
    }
    return newArr;
}

function check(arr,keyLen,lockLen){
    for(let i=keyLen-1;i<=lockLen + keyLen -2;i++){
        for(let j=keyLen-1;j<=lockLen + keyLen -2;j++){
            if(arr[i][j] !== 1) return false;
        }
    }
    return true;
}



console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]));


