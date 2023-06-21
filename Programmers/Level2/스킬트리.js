function solution(skill, skill_trees) {
    let answer = 0;
    skill = skill.split('');

    for(let i=0;i<skill_trees.length;i++){
        let skillIndex = [];
        for(let j = 0;j<skill.length;j++){
            skillIndex.push(skill_trees[i].indexOf(skill[j]));
        }
       //  console.log(skillIndex);
        if(skillIndex.filter(v => v === -1).length === skillIndex.length){
            answer++;
            continue;
        }
        let temp = skillIndex.indexOf(-1);
        let noMinusOne = skillIndex.filter(v => v !== -1);
        if(temp != -1 && (skillIndex.slice(0,temp).length !== noMinusOne.length)){
            continue;
        }
        // console.log(skillIndex.slice(0,temp));

        let tempArr = [].concat(...noMinusOne);
        if(tempArr.sort((a,b)=> a-b).toString() === noMinusOne.toString()){
            answer++;
        }

    }
    return answer;
}

function solution(skill, skill_trees) {
    // skill을 제외한 문자 삭제하는 정규식
    let regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, '')) // 각 스킬 트리마다 skill을 제외한 문자 삭제
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === ""; 
        })
        .length
}