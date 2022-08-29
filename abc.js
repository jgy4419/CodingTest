

// // 키패드 문제

// function solution2(numbers, hand) {
//     let answer = '';
//     for (let i = 0; i < numbers.length; i++){
//         console.log(numbers[i]);
//         if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
//             answer = answer + 'L';
//         } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
//             answer = answer + 'R'
//         }else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
//             // 현재 값 
//             if (numbers[i] - numbers[i - 1] > numbers[i] - numbers[i - 2]) {
//                 answer + 'L'
//             } else if(numbers[i] - numbers[i - 1] < numbers[i] - numbers[i - 2]){
//                 answer + 'R'
//                 console.log('..', answer);
//             }
//         }
//     }
//     return answer;
// }

// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "right"));

// // 왼쪽 손가락(L) 누르면 L은 해당 숫자로 지정

// function solution(numbers, hand) {
//     let answer = '';
//     let hands = '';
//     hand === 'right' ? hands = 'R' : hands = 'L';
//     let [L, R] = [10, 12];

//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
//             answer = answer + 'L';
//             L = numbers[i];
//         } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
//             answer = answer + 'R'
//             R = numbers[i];
//         } else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) { 
//             if (numbers[i] - L > numbers[i] - R) {
//                 answer = answer + 'R';
//                 R = numbers[i];
//             }
//             else if (numbers[i] - L < numbers[i] - R) {
//                 answer = answer + 'L';
//                 L = numbers[i];
//             }
//             else answer = answer + hands;
//         }

//     }
//     return answer;
// }


// function solution(arr) {
//     let sortArr = [...arr].sort((a, b) => a - b );
//     let minusArr = sortArr[0];
//     if (arr[0] === 10) return [-1];
//     return arr.filter(arr => arr !== minusArr);
// }
// console.log(solution([10]));
