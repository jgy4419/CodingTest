// 정렬 문제 풀이 1

// 세 수 정렬
// function solution(arr){
// 	return arr.sort((a, b) => a - b);
// }
// console.log(solution([3, 1, 2]));

// // K 번째 수
// function solution(arr, k) {
//     let sortArr = arr.sort((a, b) => a - b);
//     return sortArr[k - 1];
// }

// console.log(solution([4, 1, 2, 3, 5], 2));

// // 정렬 문제 풀이 2
// function solution(arr) {
//     arr = arr.sort((a, b) => {
//         if(a[0] === b[0]) return a[1] - b[1]
//         else return a[0] - b[0]
//     });
//     return arr;
// }

// console.log(solution([[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]));

// // 단어 정렬
// function solution(arr) {
//     arr = [...new Set(arr)];
//     let resArr = [];
//     /*
//         1. 길이가 짧은 것부터
//         2. 길이가 같으면 사전 순으로
//     */
//     resArr.push(arr.sort((a, b) => {
//         return a.length - b.length;
//     }));
//     return resArr;
// }

// console.log(solution(['but', 'i', 'i', 'wont', 'hesitate', 'no', 'more']));


// // 정렬 문제 풀이
// function solution(leng, arr) {
//     let answer = [];
//     let newArr = [];
//     for(let i = 0; i < leng; i++) {
//         for(let j = 0; j < leng; j++) {
//             if(arr[i] > arr[j] && !newArr.includes(arr[j])){
//                 newArr.push(arr[j]);
//             }
//         }
//         answer.push(newArr.length);
//         newArr = [];
//     }
//     return answer;
// }

// 강사님 풀이
function solution(arr) {
    let answer = "";
    let uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => a - b);

    let myMap = new Map();
    for(let i = 0; i < uniqueArray.length; i++) {
        myMap.set(uniqueArray[i], i);
    }
    console.log(myMap);
    console.log(myMap.get(4));
    for(let x of arr) answer += myMap.get(x);

    return answer;
}

console.log(solution([2, 4, -10, 4, -9]));
console.log(solution([1000, 999, 1000, 999, 1000, 999]));

// // 나이순 정렬
// function solution(arr){
//     arr.sort((a, b) => a[0] - b[0])
//     return arr;
// }

// console.log(solution([[21, "Junkyu"], [21, "Dohyun"], [20, "Sunyoung"]]));

// // 강사님 풀이
// function solution() {
//     let arr = [];

//     for(let i = 0; i <= n; i++) {
//         let age = Number(input[i].split(' ')[0]);
//         let name = input[i].split(' ')[1];
//         arr.push([age, name]);
//     }

//     arr.sort((a, b) => a[0] - b[0]);

//     let answer = '';
//     for(let x of arr) answer += x[0] + " " + x[1] + "\n";
//     console.log(answer);
// }

// // 소트인사이드
// function solution(num){
//     let numChangedStr = num.toString().split('');
//     numChangedStr.sort((a, b) => Number(b) - Number(a));
//     return numChangedStr.join('');
// }

// console.log(solution(2143));
// console.log(solution(999998999));
// console.log(solution(9792382));