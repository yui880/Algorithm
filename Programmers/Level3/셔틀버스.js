function solution(n, t, m, timetable) {
    let answer = '';
    timetable = timetable.map(t =>{
        let [h, m] = t.split(":");
        return +h * 60 + +m;
    }).sort((a,b)=> a-b);
    
    let count = 0;
    let time = 540;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<m;j++){
            if(time >= timetable[j]) {
                timetable[j] = -1;
                count++;
            } else{
                break;
            }
        }
        timetable = timetable.filter(n => (n != -1));
        time += t;
    }
    //console.log(timetable);
    
    
    let temptable = timetable.filter(n=> n <= time);
    
    if(temptable.length < m) answer = time;
    else {
        answer = temptable[m-1] -1;
    }
    
    let hour = Math.floor(answer/60).toString();
    let min = (answer%60).toString();
    
    answer = (hour.length === 1 ? '0'+hour : hour) + ':' + (min.length === 1 ? '0'+min : min);
    
    return answer;
}


