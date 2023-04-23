function solution(a, b) {
    var answer = '0';
    if(a + b > b + a) {
        answer = answer + b;
        answer = answer + a;
    }else {
        answer = answer + a;
        answer = answer + b;
    }
    return Number(answer);
}

console.log(solution(9, 91));
console.log(solution(89, 8));