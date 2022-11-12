function solution(n, t) {
    let answer = n;
    for (let i = 0; i < t; i++){
        answer *= 2;
        console.log(answer);
    }
    return answer;
}

console.log(solution(7, 15));