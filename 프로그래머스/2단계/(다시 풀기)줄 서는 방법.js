/* 
    n명의 사람을 줄을 서는 방법은 여러가지가 있다.
    3명이 있다고 하면 (n이 3이라면)
    [1, 2, 3]
    [1, 3, 2]
    [2, 1, 3]
    [2, 3, 1]
    [3, 1, 2]
    [3, 2, 1]
    - 사람의 수 n과, 자열수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때,
    - k번째 방법을 return 하는 solution 함수 작성하기.
*/
function solution(n, k) {
    let answer = [];
    const remains = Array.from({ length: n }, (v, i) => i + 1); // [1, 2, 3]
    let fac = remains.reduce((prev, curr) => prev * curr, 1); // factorial

    k--;
    for (let i = 0; i < n; i++) {
        fac /= n - i;
        // console.log('fac', fac);
        const index = parseInt(k / fac);
        // console.log('index, k', index, k);
        answer.push(remains[index]);
        console.log('answer', answer);
        console.log('splice', remains.splice(index, 1));
        console.log('나누기', k %= fac);
    }
    
    return answer;
}

console.log(solution(3, 5)); // result => [3, 1, 2]