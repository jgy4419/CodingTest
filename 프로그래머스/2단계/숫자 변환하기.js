/* 
    DP 
        - 이미 계산된 결과는 별도의 메모리 영역에 저장해서 다시 계산하지 않도록 한다.
        - 메모리를 적절하게 사용해 수행ㅅ간 효율성 비약적 향상.
        - 자료구조에서 동적 할당을 의미한다 -> 메모리 할당하는 기법, 그러나 알고리즘에선 이런 의미 뜻하지 x.
    풀이 흐름
        - 최적 부분 구조 : 큰 문제를 작은 문제로 나눌 수 있을 때 -> 작은 문제의 답을 담아서 큰 문제 해결.
        - 중복되는 부분 문제 : 동일한 작은 문제 반복적 해결.
*/


/* 
    자연수 x를 y로 변경하려고 한다.
    - x에 n을 더한다.
    - x에 2를 곱한다.
    - x에 3을 곱한다.

    x, y, n이 매개변수로 주어질 때 x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록
    solution 함수 만들기. x를 y로 만들 수 없으면 -1을 return 해주기.
*/

function solution(x, y, n) {
    let count = 0;
    let [multiply, plusN] = [0, 0]
    while(x < y) {
        if(y % (x * 3) === 0) {
            multiply = x * 3;
            count++;
        }else if(y % (x * 2) === 0){
            multiply = x * 2;
        }else multiply = 0;
        if(y % (x + n) === 0){
            plusN = x + n;
        }else plusN = 0;
        multiply > plusN ? x = multiply : x = plusN;
        count++;
        if(multiply === 0 && plusN === 0) break;
    }
    if(x === y) return count;
    return -1;
}

// 다른 사람 풀이
function solution(x, y, n){
     if (x >= y) return 0;
    // 모든경우의 수를 Infinity로 두고 변환에 걸린 수를 입력.
    const dp = Array(y + 1).fill(Infinity);
    dp[x] = 0;
    for(let i = x + 1; i <= y; i++) {
        if(x <= i - n) {
            dp[i] = Math.min(dp[i], dp[i - n] + 1);
        }
        if(i % 2 === 0 && x <= i / 2){
             dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        if(i % 3 === 0 && x <= i / 3) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }
    console.log('res', dp);
    return dp[y] === Infinity ? -1 : dp[y];
}
// console.log(solution(10, 40, 5)); // result -> 2
console.log(solution(10, 40, 30)); // result -> 1
// console.log(solution(2, 5, 4)); // result -> -1;
// console.log(solution(1, 3, 2)); // result -> -1;