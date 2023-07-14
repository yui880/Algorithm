function solution(elements) {
    let len = elements.length;
    let newElements = [...elements,...elements];
    let sequence = {};
    for(let i=1;i<=len;i++){
        for(let j=0;j<=newElements.length-i;j++){
            let sum = newElements.slice(j,j+i).reduce((acc,cur) => acc+cur,0);
            if(sequence[sum] === undefined) sequence[sum] = 1;
        }
    }
    return Object.keys(sequence).length;
}

// 

function solution(elements) {
    const el = [...elements, ...elements];
    const len = elements.length;
    let answer = [];
    for(let i=0;i<len;i++){
        let arr = [];
        for(let j=0;j<len;j++){
            let temp = (arr.length === 0 ? 0 : arr[arr.length-1] ) + el[i+j];
            arr.push(temp);
        }
        answer.push(...arr);
    }
    return new Set(answer).size;
}

function solution(elements) {
    const el = [...elements, ...elements];
    const len = elements.length;
    let answer = [];
    for(let i=0;i<len;i++){
        let sum = 0;
        for(let j=0;j<len;j++){
            sum += el[i+j];
            answer.push(sum);
        }
    }
    return new Set(answer).size;
}