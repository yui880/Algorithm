function solution(orders, course) {
    let answer = [];
    for(let i=0;i<course.length;i++){
        let count = {};
        let max = 0;
        orders.forEach(v =>{
            Combinations(v.split(""), course[i])
                .forEach(n =>{
                if(!count[n]) count[n] = 1;
                else count[n]++;
            });
            for(let j in count){
                if(count[j] > max) max = count[j];
            }
        })
        for(let j in count){
            if(count[j] === max && count[j] > 1) answer.push(j);
        }
        
    }
    return answer.sort();
}
const Combinations = (arr, num) => {
    const results = [];

    if (num === 1) return arr.map(v => [v]);

    arr.forEach((select, i, origin) => {
        const remainder = origin.slice(i + 1);
        const combinations = Combinations(remainder, num - 1);
        const combine = combinations.map(v => [select, ...v].sort().join(""));
        results.push(...combine);
    });

    return results;
}