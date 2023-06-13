// 중복되는 숫자 없음 
// 순서를 위해서 길이별로 정렬하면 좋을거 같음 일단 },{로 자르면 될거 같음
// 문자열이니까 ,기준으로 자르고 {{}}이면 무시하게? {}으로 다 자르면 안될까

function solution(s) {
    let arr = [];
    let set = new Set();
    s = s.split('},{');
    
    s.forEach(cur =>{
        cur = cur.split(',');
        let temp = cur.map(n => n.replace(/[^0-9]/g,''))
        arr.push(temp);
    })

    
    arr.sort((a,b)=>{
        if(a.length < b.length) return -1;
        if(a.length > b.length) return 1;
    })
    for(let i=0;i<arr.length;i++){
        arr[i].forEach(n => {
            set.add(+n);
        })
    }
    
    return [...set];
    
}


