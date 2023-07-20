
// function guild(n, adventurers){
//     let groups =0;
//     adventurers.sort((a,b) => a-b);

//     for(let i=0;i<n;){
//         const len = adventurers[i];
//         console.log(len, i)
//         let count = 0;
//         for(let j=0;j<len;j++){
//             i++; count++;
//         }
//         if(count < adventurers[i-1]) break;
//         groups++;
        
//     }
//     return groups;
// }

function guild(n, fears){
    let groups = 0;
    let count = 0;
    fears.sort((a,b) => a-b)

    for(let i=0;i<n;i++){
        count++;
        if(count >= fears[i]){
            groups++;
            count = 0;
        }
    }
    return groups;
}


console.log(guild(6, [3,3,1,2,2,2]));
