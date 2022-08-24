function solution(n) {
    let answer = '수';
    for (let i = 0; i < n - 1; i++){
        answer[i] === '수' ? answer = answer + '박' : answer = answer + '수';
    }
    return answer
}

console.log(solution(5));