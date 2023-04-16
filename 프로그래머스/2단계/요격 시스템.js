// function solution(targets){
//     let answer = 1;
//     targets = targets.sort((a, b) => {
//         return a[0] - b[0];
//     });
//     let arr = arrReset(targets[0][0], targets[0][1]);
//     // targets 반복문을 돌면서 범위에 포함되면  arr 변수에 길이만큼 값 추가
//     for(let i = 1; i < targets.length; i++) {
//         if(arr.includes(targets[i][0]) || arr.includes(targets[i][1])){
//             console.log('if', targets[i]);
//             continue;
//         }
//         else {
//             console.log('else', targets[i]);
//             answer++;
//             arr = arrReset(targets[i][0], targets[i][1])
//         }
//     }
//     return answer;
// }

// function arrReset(start, end) {
//     const arr = [];
//     for(let i = start; i < end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

function solution(targets) {
    targets.sort((a, b) => b[0] - a[0]);
    console.log('sort', targets);
    let count = 1;

    const first = targets.shift();
    let standard = first[0];

    targets.forEach(([start, end]) => {
        console.log(start, end, standard);
        if(end <= standard) {
            count += 1;
            standard = start;
        }
    });
    return count;
}

// 다른 사람 풀이
// function solution(targets) {
//     targets.sort((a, b) => a[1] - b[1])

//     let count = 1
//     let check = targets[0][1] - 1

//     for (const target of targets) {
//         if (check >= target[0] && check <= target[1]) continue

//         check = target[1] - 1
//         count += 1
//     }

//     return count;
// }

console.log(solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]])); // result -> 3