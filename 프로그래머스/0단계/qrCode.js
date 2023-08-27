function solution(q, r, code) {
    var answer = '';
    for(let i = 0; i < code.length; i++){
        if(i % q === r)
            answer += code[i];
    }
    return answer;
}

console.log(solution(3, 1, "qjnwezgrpirldywt"));
console.log(solution(1, 0, "programmers"));