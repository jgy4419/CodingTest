function solution(name, yearning, photo) {
    let answer = [];
    let yearningIndex = 0;
    for(let i = 0; i < photo.length; i++) {
        let yearningNum = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(name.includes(photo[i][j])) {
                yearningIndex = name.indexOf(photo[i][j]);
                yearningNum += yearning[yearningIndex];
            }
            else continue;                
        }
        answer.push(yearningNum);
    }
    return answer;
}

// 다른 사람 풀이
function solution(name, yearning, photo) {
    let answer = [];
    let score = {};
    name.forEach((a, i) => {
        score[a] = yearning[i];
    });

    for(let o of photo) {
        let t = 0;
        o.forEach(a => {
            t += score[a] ? score[a] : 0;
        });
        answer.push(t);
    }

    return answer;
}

console.log(solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
));