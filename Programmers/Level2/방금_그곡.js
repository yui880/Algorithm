// m의 길이보다 커질때까지 길게 붙여넣기 
// 찾으면 객체에 저장 시간이랑 함께 
// 객체에서 가장 시간 긴걸로 


function solution(m, musicinfos) {
    let find = [];
    let mLen = m.length;
    for(music of musicinfos){
        let [time1, time2, title, sheet] = music.split(',');
        time1 = time1.split(':');
        time2 = time2.split(':');
        
        
        let term = (+time2[0] * 60 + +time2[1]) - (+time1[0] * 60 + +time1[1]);
        if(term < mLen) continue;
        sheet = sheet.repeat(4);
        
        while(sheet.length < mLen){
            sheet = sheet.repeat(2);
        }
        
        let sheetIndex = sheet.indexOf(m);
        if(sheetIndex === -1) continue;
        if(sheetIndex > mLen) continue;
        
        // && sheetIndex < term
        while(sheetIndex !== -1 ){
            if(sheetIndex >= 0 && sheet[sheetIndex+mLen] !== '#'){
                find.push([title, term]);
                break;
            } else {
                sheetIndex = sheet.indexOf(m,sheetIndex+1);
            } 
        
        }
        
    }
    if(find.length === 0) return "(None)";
    
    // console.log(find);
    let max = 0;
    let answer = '';
    find.reduce((acc,cur)=>{
       if(cur[1] > max) {
           max = cur[1];
           answer = cur[0];
       }
    },0)
    return answer;
}



// solve

function solution(m, musicinfos) {
    let find = [];
    m = changeNote(m);
    
    for(music of musicinfos){
        let [time1, time2, title, sheet] = music.split(',');
        let term = timeCalculate(time1, time2);
        sheet = changeNote(sheet);
    
            
        if(sheet.length > term){
            sheet = sheet.slice(0, term);
        } else {
            while(term > sheet.length){
                sheet += sheet;
            }
            sheet = sheet.slice(0, term);
        }
        if(sheet.includes(m) === true) find.push([title, term]);
        
        // console.log(sheet, term);
    }
    if(find.length === 0) return "(None)";
    
    let max = 0;
    let answer = '';
    find.forEach((cur)=>{
        if(cur[1] > max){
            max = cur[1];
            answer = cur[0];
        }
    },0)
    
    return answer;    
}

function timeCalculate(t1, t2){
    t1 = t1.split(":");
    t2 = t2.split(":");
    
    return (+t2[0] * 60 + +t2[1]) - (+t1[0] * 60 + +t1[1]);
}

function changeNote(str){
    str = str.replace(/C#/g, '1');
    str = str.replace(/D#/g, '2');
    str = str.replace(/F#/g, '3');
    str = str.replace(/G#/g, '4');
    str = str.replace(/A#/g, '5');
    
    return str;
}