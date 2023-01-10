// 유한소수 : 소수점 아래 숫자가 계속되지 않고 유한개인 소수
// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 된다.
function solution(a, b) {
    let g = 1;
    for (let i = 1; i <= b; i++){
        if (a % i === 0 && b % i === 0) g = i;
    }
    b = b / g;
    console.log('before', b);
    while (b % 2 === 0) b = b / 2;
    while (b % 5 === 0) b = b / 5;
    console.log('after', b);
    return b === 1 ? 1 : 2;
}
console.log(solution(7, 20)); // result => 1
console.log(solution(11, 22)); // result => 1
console.log(solution(12, 21)); // result => 2
console.log(solution(20, 25));