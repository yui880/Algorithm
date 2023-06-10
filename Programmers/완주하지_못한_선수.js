
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]) return participant[i];
    }
}




// 해시에 걸맞는 풀이 (참고))
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}