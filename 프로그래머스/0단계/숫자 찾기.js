function solution(num, k) {
    num = String(num);
    return num.indexOf(k) === -1 ? -1 : num.indexOf(k) + 1;
}


console.log(solution(123456, 6));