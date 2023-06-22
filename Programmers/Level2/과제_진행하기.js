function solution(plans) {
    let pause = [];
    let answer = [];
    
    plans = plans.map(el => {
        let [h, m] = el[1].split(':');
        return [el[0], (+h * 60) + +m, el[2]];
    }) 
    plans.sort((a,b) => a[1] - b[1]);
    
   // console.log(plans);
    for(let i=0;i<plans.length;i++){
        if(i === plans.length-1) {answer.push(plans[i][0]); break;}
        let interval = plans[i+1][1] - plans[i][1];
        let remain = interval - plans[i][2];
        if(remain >= 0){
            answer.push(plans[i][0])
            if(pause.length !== 0){
                while(remain > 0){
                      let task = pause.pop();
                      if(remain >= task[1]){
                          remain -= task[1];
                          answer.push(task[0]);
                      } else {
                          task[1] = task[1] - remain;
                          pause.push(task);
                          break;
                      }
                    if(pause.length === 0) break;
                }
            }
            
        } else {
            let tempArr = [plans[i][0], plans[i][2] - interval];
            pause.push(tempArr);
        }
        
        //console.log(answer, pause);
    }
    while(pause.length !== 0){
        answer.push(pause.pop()[0]);
    }
    return answer;
}