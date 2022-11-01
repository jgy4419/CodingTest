function solution(n) {
    var answer = 0;
    answer = n.toString(3).split('').reverse().join('');
    return parseInt(answer, 3);
}

console.log(solution(45));