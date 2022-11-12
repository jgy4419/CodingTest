function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    let idx = m - 1;
    for (let i = 0; i < Math.floor(score.length / m); i++){
        answer += score[idx] * m;
        idx += m;
    }

    return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	));