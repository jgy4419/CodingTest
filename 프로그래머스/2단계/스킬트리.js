function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(item => {
        console.log(item);
        let copyItem = [...item]
        let copySkill = [...skill];
        let i = 0;
        while(i !== copyItem.length){ 
            console.log(copySkill, copyItem[0]);
            if(copySkill.includes(copyItem[0])) {
                console.log(copySkill, copyItem[0], copySkill[0]);
                if(copyItem[0] === copySkill[0]){
                    copySkill.splice(0, 1);
                    copyItem.splice(0, 1);
                    if(copySkill.length === 0 || copyItem.length === 0) {
                        answer++;
                        console.log(answer);
                        break;
                    }
                }else {
                    break;
                }
            }else copyItem.splice(0, 1);
            i++;
        }
    })
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2

//다른 사람 풀이
// function solution(skill, skill_trees) {
//     var regex = new RegExp(`[^${skill}]`, 'g');

//     return skill_trees
//         .map((x) => x.replace(regex, ''))
//         .filter((x) => {
//             return skill.indexOf(x) === 0 || x === "";
//         })
//         .length
// }