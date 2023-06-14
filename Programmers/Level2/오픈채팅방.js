function solution(record) {
    let answer = [];
    let arr = [];
    let names = {};
    for(let i=0;i<record.length;i++){
        let [command, id, name] = record[i].split(" ");
        if(command === 'Enter') {
            arr.push([id, "들어왔습니다."]);
            names[id] = name;
        }
        else if(command === 'Leave') arr.push([id, "나갔습니다."]);
        else {
            names[id] = name;
        }
    }
    arr.forEach(n => {
        answer.push(names[n[0]]+"님이 "+n[1]);
    })
    return answer;
}