function solution(order) {
    var answer = 0;
    String(order).split('').forEach(num => {
        if (num === '3' || num === '6' || num === '9') {
            answer++;
        }
    })
    return answer;
}

console.log(solution(29423));