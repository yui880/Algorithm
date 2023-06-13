function solution(N, stages) {
    stages.sort((a,b)=> a-b);
    
    let numStages = {};
    stages.reduce((acc,cur)=>{
        if(!numStages[cur]) numStages[cur] = 1;
        else numStages[cur]++;
    },0)
    
    for(let i=1;i<=N;i++){
        if(!numStages[i]) numStages[i] = 0;
    }

    
    let arr = [];
    let keys = Object.keys(numStages);
    let sum = 0;
    for(let i=0;i<keys.length;i++){
        if(keys[i] >= N) {
            arr[N-1] = numStages[N] / (stages.length - sum);
        } 
        else arr[i] = numStages[keys[i]] / (stages.length - sum);
        sum += numStages[keys[i]];
    }
    // console.log(arr);
    
    let newArr = arr.map((num,i)=>{
        return [i, num];
    })
    
    newArr = newArr.sort((a,b)=>{
        if(a[1] > b[1]) return -1;
        else if(a[1] === b[1]) return 1;
    })
    // console.log(newArr);
    
    return newArr.map(num=>{
        return num[0] + 1;
    })
}


// 통과하지만 너무 오래 걸림 
function solution(N, stages) {
    let failure = [];
    for(let i=1;i<=N;i++){
        let reach = stages.filter(n => n >= i).length;
        let curr = stages.filter(n => n === i).length;
        failure.push([i, curr/reach]);
    }
    failure.sort((a,b)=> b[1] - a[1]);
    return failure.map((n)=> n[0]);
}


// 또 다른 풀이?
function solution(N, stages) {
    var answer = [];

    const failure = [];
    let length = stages.length;

    stages.forEach((v) => {
        if (v <= N)
            if (failure[v] === undefined) failure[v] = [v, 1];
            else failure[v][1]++;
    })

    for (let i = 1; i <= N; i++) {
        if (failure[i] === undefined) failure[i] = [i, 0];
        else {
            const temp = failure[i][1];
            failure[i][1] = temp / length;
            length -= temp;
        }
    }

    answer = failure.sort((a, b) => b[1] - a[1]).slice(0, N);

    return answer.map((v) => v[0]);
}