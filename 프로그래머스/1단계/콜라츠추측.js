function solution(num) {
    var answer = 0;
    let count = 0;
    if (num === 1) return 0;
    for (let i = 0; i < 500; i++){
        num % 2 === 0 ? num = num / 2 : num = (num * 3) + 1;
        count++;
        if (num === 1) break;
    }
    return answer = count >= 500 ? -1 : count;
}

console.log(solution(1));