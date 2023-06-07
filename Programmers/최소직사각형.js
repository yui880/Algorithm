function solution(sizes) {
    let newSize = [...sizes].map(arr => arr.sort((a,b) => a-b));
    let arr = [[],[]];
    newSize.reduce((acc,cur) => {
        arr[0].push(cur[0]);
        arr[1].push(cur[1]);
    },0)
    return Math.max(...arr[0]) * Math.max(...arr[1]);
}