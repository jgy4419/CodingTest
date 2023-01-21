function solution(numer1, denom1, numer2, denom2) {
    let topNum = numer1 * denom2 + numer2 * denom1;
    let botNum = numer1 * numer2;
    let maximum = 1;
    console.log(topNum, botNum);
    for (let i = 1; i <= topNum; i++) {
        if (topNum % i === 0 && botNum % i === 0) maximum = i;
    }
    return [topNum / maximum, botNum / maximum];
}
function solution2(denum1, num1, denum2, num2) {
    // 분자
    let topNum = num1*denum2 + num2*denum1
    // 분모
    let botNum = num1 * num2
    console.log(topNum, botNum);
    // 최소 공배수
    let maximum = 1
    // 약분
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
console.log(solution2(1, 2, 3, 4));
console.log(solution2(9, 2, 1, 3));