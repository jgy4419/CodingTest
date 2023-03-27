// 내 풀이
function solution(skill, skill_trees) {
    let copySkill = skill.split('');
    var answer = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(copySkill.includes(skill_trees[i][j])){
                if(skill_trees[i][j] === copySkill[0]){
                    copySkill.shift();
                    if(copySkill.length === 0 || j === skill_trees[i].length - 1) {
                        answer++;
                        break;
                    }
                }else break;
            }else if(j === skill_trees[i].length - 1) answer++;
        }
        copySkill = skill.split('');
    }
    return answer;
}


console.log(solution("CBD",  ["AEF", "ZJW"])); // 2
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))





//다른 사람 풀이
function solution(skill, skill_trees){
    const restRemoveRegex = new RegExp('[^' + skill + ']', 'gi');
    return skill_trees.filter(v => {
        const tempSkill = v.replace(restRemoveRegex, '');
        // startWith() : 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과 true 혹은 false로 반환한다.
        // tempSkill이 skill 기준 시작하는 문자라면? true. (length 추가)
        return skill.startsWith(tempSkill);
    }).length;
}