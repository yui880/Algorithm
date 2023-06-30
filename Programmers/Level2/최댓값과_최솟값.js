function solution(s) {
    let nums = s.split(" ").map(v => parseInt(v));
    let answer = "" + Math.min(...nums) + " " + Math.max(...nums);
    return answer;
}