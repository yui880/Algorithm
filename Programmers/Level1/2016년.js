function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let day = 0;
    for(let i=0;i<a-1;i++){
        day += month[i];
    }
    day += b;
    let index = (day % 7 + 4) % 7; //1월 1일이 금요일이라 +4 해준 것
    return week[index];
}


