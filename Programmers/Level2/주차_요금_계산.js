let guest = {};
    let arr = [];
    for(let i=0;i<records.length;i++){
        let temp = records[i].split(" ");
        if(!guest[temp[1]]) {
            guest[temp[1]] = [];
            guest[temp[1]].push(time(temp[0]));
        }
        else{
            guest[temp[1]].push(time(temp[0]));
        }
    }


// 객체에 입차 시간 넣기, 출차 시간 나오면 계산해서 배열로 저장?
// 차량번호 작은 자동차부터 출력
// 출차하지 않으면 23.59에 출차 
// 초과한 시간이 단위 시간으로 나눠떨어지지 않으면 올림 
// 문자열 공백으로 잘라서 IN, 시간 분으로 계산한거 객체에 저장 
// 객체 확인해서 존재하면 계산 없으면 추가하기 
// 다 계산하고 나서 객체 존재하느 것끼리 계산하기 


function solution(fees, records) {
    let guest = {};
    let total = {};
    
    for(let i=0;i<records.length;i++){
        let temp = records[i].split(" ");
        if(temp[2] === 'IN'){
            if(!total[temp[1]])  total[temp[1]] = 0;
            guest[temp[1]] = time(temp[0]);
        } else{
            let t = time(temp[0]) - guest[temp[1]];
            total[temp[1]] += t;
            delete guest[temp[1]];
        }
    }
    let keys = Object.keys(guest);
    for(let i=0;i<keys.length;i++){
        console.log()
        if(guest[keys[i]] > 0) {
            total[keys[i]] += 1439 - guest[keys[i]];
        } else if(guest[keys[i]] === 0){
            total[keys[i]] += 1439;
        }
    }
    let arr = [];
    Object.keys(total).sort().forEach(n=>{
        if(total[n] < fees[0]) arr.push(fees[1]);
        else{
            arr.push(fees[1] + Math.ceil((total[n] - fees[0])/fees[2]) * fees[3]);
        }
    })
    
    return arr;

}

function time(str){
    let t = str.split(":");
    return (+t[0] * 60) + +t[1];
}




function solution(fees, records) {
    let guest = {};
    
    for(let i=0;i<records.length;i++){
        let [time, id, type] = records[i].split(" ");
        let [h, m] = time.split(":");
        time = +h * 60 + +m;
        if(!guest[id]) guest[id] = 0;
        if(type === 'IN') guest[id] += (1439 - time);
        if(type === 'OUT') guest[id] -= (1439 - time);
    }
    
    const answer = [];
    for (let [car, time] of Object.entries(guest)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);

}