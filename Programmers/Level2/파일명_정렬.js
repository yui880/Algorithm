// 3부분으로 잘라서 새로운 배열에 넣기, 이때 소문자로 다 바꿔주기
// 각 첫번째 기준으로 정렬하고, 둘이 같다면 두번째 숫자 기준으로 정렬하기 
// 숫자도 같으면 인덱스 기준으로 정렬하기 

function solution(arr) {
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let num = '';
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] !== ' '){
                if(!isNaN(arr[i][j])) num += arr[i][j];
                if(!isNaN(arr[i][j]) && isNaN(arr[i][j+1]) 
                   || num.length === 5) break;
            }
        }
       
        let str = arr[i].split(num);
        str = str.filter(v => v.length);
        //console.log(str, num, i);
        if(str.length === 1) str.push(" ");
        newArr.push([...str, num, i]);
    }
    console.log(newArr);
    
    newArr.sort((a,b)=>{
        if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        else if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        else {
            if(+a[2] < +b[2]) return -1;
            else if(+a[2] > +b[2]) return 1;
            else {
                if(a[3] < b[3]) return -1;
                else{
                    return 1;
                }
            }
        }
    })
    newArr = newArr.map(v => 
        arr[v[3]]);
    return newArr;
}
