
function strSorting(str){
    let newStr = str.replace(/[0-9]/g, '').split('').sort().join('');
    let newNum = str.replace(/[A-Z]/g,'').split('').reduce((acc, cur)=> acc + parseInt(cur), 0);

    

    return newStr + newNum;
}

console.log(strSorting('K1KA5CB7'));
console.log(strSorting('AJKDLSI412K4JSJ9D'));