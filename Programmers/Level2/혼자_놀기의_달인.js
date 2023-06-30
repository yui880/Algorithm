function solution(cards) {
    cards.unshift(0);
    let answer = [];
    for(let i=1;i<cards.length;i++){
        let index = i;
        let count = 0;
        while(1) {
            if(cards[index]){
                let temp = cards[index];
                cards[index] = 0;
                index = temp;
                count++
            } else {
                answer.push(count);
                break;
            }
        }
    }
    let sortedAnswer = answer.filter(v => v != 0).sort((a,b) => b - a);
    return sortedAnswer.length > 1 ? sortedAnswer[0] * sortedAnswer[1] : 0;
}