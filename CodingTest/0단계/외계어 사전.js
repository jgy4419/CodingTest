function solution(spell, dic) {
    var answer = 2;
    let count = 0;
    dic.map((str, index) => {
        for (let i = 0; i < spell.length; i++){
            if (str.includes(spell[i])) {
                count++;
            }
            if (count === spell.length) answer = 1;
        }
        count = 0;
    })
    return answer;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));

// 다른 사람 풀이
function solution(spell, dic) {
    return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}