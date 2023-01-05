/* 
    에라토스테네스의 체 공식 : 소수를 구하고자 하는 범위 2 ~ n 이 있을 때, 
    2 ~ n의 제곱근에 해당하는 범위 안의 소수의 배수들을 계속 제외하면 결국 소수만 남는다는 뜻.
        - 2 ~ n까지의 수가 있다.
        - 2부터 n의 제곱근(루트n) 까지의 소수의 배수들을 제외시키면 소수만 남는다.
*/

function solution(n) {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i * i <= n; i++){
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i){
                console.log('j', j);
                console.log('arr[j]', arr[j]);
                arr[j] = false;
            }
        }
    }
    return arr.filter(e => e).length;
}

console.log(solution(30));

// console.log(Number.isInteger(10 / 3));
// for (let i = 4; i <= 10; i++) { 
//     if (Number.isInteger(i / 2) === false && Number.isInteger(i / 3) === false) {
//         console.log(i);
//         // answer++;
//     }
// }