function solution(N, stages) {
    var answer = [];
    let res = [];
    let badUserCount = 0;
    let challengeUserCount = 0; 
    for (let i = 1; i <= N; i++){
        for (let j = 0; j < stages.length; j++){
            if (i <= stages[j]) challengeUserCount += 1;
            if (i === stages[j]) badUserCount += 1;
        }
        res.push(badUserCount / challengeUserCount);
        badUserCount = 0;
        challengeUserCount = 0;
    }
    for (let i = 0; i < res.length; i++){
        answer.push(res.indexOf(Math.max(...res)) + 1);
        res[res.indexOf(Math.max(...res))] = -1;
        console.log(res);
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));