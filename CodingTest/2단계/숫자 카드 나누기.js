/* 
    철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
    영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a

*/

// function solution(arrayA, arrayB) {
//     var answer = [];
//     let A_num = [];
//     let B_num = [];

//     // 배열에서 가장 작은 수 
//     for (let i = 0; i < arrayA.length; i++){
//         for (let j = 2; j < Math.min(...arrayA); j++){
//             // ex) arrayA 배열의 모든 값이 모두 나눴을 때 나머지가 0이 되는 값을 찾아야 된다.
//             if (arrayA[i] % j === 0) {
//                 A_num.push(j);
//             }
//         }
//         for (let j = 2; j < Math.min(...arrayB); j++){
//             if (arrayB[i] % j === 0) {
//                 B_num.push(j);
//             }
//         }
//     }

//     for (let i = 0; i < Math.min(...arrayA); i++){
//         for (let j = 0; i < arrayA.length; A++){
//             if (array[j] % i === 0) {
                
//             }
//         }
//     }
    
//     // 중복값 제거 문제가 아님!
//     // A_num = new Set(A_num); A_num = [...A_num];
//     // B_num = new Set(B_num); B_num = [...B_num];
//     console.log('a', A_num);
//     console.log('b', B_num);
//     for (let i = 0; i < A_num.length; i++){
//         if (!B_num.includes(A_num[i])) answer.push(A_num[i]);
//     }
//     console.log('answer', answer);
//     return answer.length === 0 ? 0 : Math.max(...answer);
// }


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
        console.log('a', a);
        console.log('b', b);
        return a % b === 0 ? b : god(b, a % b);
    }
    // arrayA 배열에 담긴 값의 최대 공약수를 구하기
    arrayA.forEach(val => answer = god(answer, val));

    // arrayB 배열의 값이 하나라도 arrayA의 최대 공약수로 나누어 떨어지면 0을 return
    if (arrayB.some(val => val % answer === 0)) return 0;
    // 나누어지지 않으면 최대공약수 return
    return answer;
}

console.log(solution([10, 20], [5, 17]));


// 유클리드 호제법의로 최대 공약수를 구한다.
// 고차함수 some()를 사용하여 하나라도 true면 0을 return 하게 한다.

// some이란? : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.