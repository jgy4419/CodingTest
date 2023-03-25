/* 
    철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
    영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
*/


// arrayA, arrayB 각각 
// function solution(arrayA, arrayB) {
//     let resA = func(arrayA);
//     let resB = func(arrayB);

//     function func(arr){
//         let max = 0;
//         let count = 0;
//         for(let i = 2; i <= 10; i++) {
//             for(let j = 0; j < arr.length; j++) {
//                 if(arr[j] % i !== 0) {
//                     count = 0;
//                 }
//                 else {
//                     count++;
//                 }
//             }
//             if(count === arrayA.length) max = i
//         }
//         return max;
//     }
//     if(resA === 0 && resB === 0) return 0;
//     return resA > resB ? resA : resB;
// }

console.log(solution([10, 17], [5, 20])); // 0
console.log(solution([10, 20], [5, 17])); // 10
console.log(solution([14, 35, 119], [18, 30, 102])); // 7

// 문제 url : https://school.programmers.co.kr/learn/courses/30/lessons/135807


// arrayA = 철수, arrayB = 영희
function solution(arrayA, arrayB) {
    // 철수만 모든 숫자를 나눌수 있는 경우
    let a = getDvsr(arrayA, arrayB);
    // 영희만 모든 숫자를 나눌 수 있는 경우
    let b = getDvsr(arrayB, arrayA);

    return Math.max(a, b);
}

function getDvsr(arrayA, arrayB) {
    let answer = 0;
    // 최대 공약수를 구하는 재귀 함수
    const god = (a, b) => {
        console.log('tt', a, b);
        return a % b === 0 ? b : god(b, a % b);
    }
    // arrayA 배열에 담긴 값의 최대 공약수를 구하기
    arrayA.forEach(val => answer = god(answer, val));

    // arrayB 배열의 값이 하나라도 arrayA의 최대 공약수로 나누어 떨어지면 0을 return
    if (arrayB.some(val => val % answer === 0)) return 0;
    // 나누어지지 않으면 최대공약수 return
    return answer;
}

console.log('text', 17 % 5);

// 유클리드 호제법의로 최대 공약수를 구한다.
// 고차함수 some()를 사용하여 하나라도 true면 0을 return 하게 한다.

// some이란? : 1개 요소라도 callback에 대해 true러면 true return.
// every란? : 배열의 모든 요소가 callback에 대해서 true가 리턴되어야 true를 return.