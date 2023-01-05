function solution(n) {
    var answer = [];
    n = n.toString();
    for (let i = n.length - 1; i >= 0; i--){
        answer.push(parseInt(n[i]));
    }
    return answer;
}

console.log(solution(12345));