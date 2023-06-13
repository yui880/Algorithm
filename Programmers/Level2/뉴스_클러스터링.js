// 자카드 유사도 = 두 집합의 교집합 크기 / 두 집합의 합집합 크기 
// 둘 다 공집합인 경우에는 1로 정의 

// 자카드 유사도 다중집합 버전 = 개수를 고려해야함(최소 개수) (set 못쓰겠네)
// 합집합인 경우에 개수 두개를 합치면 안되고 최대 개수쓰기

// 두글자씩 자르는데(겹치게 잘라야함) 공백,숫자,특수문자 있는 경우에 글자쌍 버리기 


// 실패한 코드
function solution(str1, str2) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let first = {};
    let second = {};
    for(let i=0;i<str1.length;i++){
        if(alphabet.indexOf(str1[i]) === -1 ||alphabet.indexOf(str1[i+1]) === -1){
            
        } else {
            let temp = str1[i]+ str1[i+1]
            first[temp] = (first[temp] ? first[temp] += 1 : 1);
        }
       
    }
    for(let i=0;i<str2.length;i++){
        if(alphabet.indexOf(str2[i]) === -1 ||alphabet.indexOf(str2[i+1]) === -1){
            
        } else {
            let temp = str2[i] + (str2[i+1] ? str2[i+1] : '');
             second[temp] = (second[temp] ? second[temp] += 1 : 1);
        }
    }

    let union = [];
    let intersection = [];
   
    for(let i = 0;i<first.length;i++){
        
    }
    
   
}



// 참고 코드 

function solution(str1, str2) {
    let temp1 = [], temp2 = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for(let i=1;i<str1.length;i++){
        if(str1[i-1] >= 'a' && str1[i-1] <= 'z' && str1[i] >= 'a' && str1[i] <= 'z'){
            
            temp1.push(str1[i-1]+str1[i]);
        }
    }
    
    for(let i=1;i<str2.length;i++){
        if(str2[i-1] >= 'a' && str2[i-1] <= 'z' && str2[i] >= 'a' && str2[i] <= 'z'){
            
            temp2.push(str2[i-1]+str2[i]);
        }
    }
    let inter = 0;
    
    for(let i=0;i<temp1.length;i++){
        for(let j=0;j<temp2.length;j++){
            if(temp1[i] === temp2[j]){
                inter++;
                temp2[j] = '.';
                break;
            }
        }
    }
    
    let union = temp1.length + temp2.length - inter;
    return (inter === union ? 65536 : Math.floor((inter / union) * 65536))
    
}