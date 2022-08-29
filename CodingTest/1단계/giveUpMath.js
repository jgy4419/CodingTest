
/* 
    - 시험은 최대 10000문제
    - 문제의 정답은 1, 2, 3, 4, 5중 하나
    - 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주기.
*/

function solution(list) {
    let leg = [];
    let giveUpMath = {
        math1: [1, 2, 3, 4, 5],
        math2: [2, 1, 2, 3, 2, 4, 2, 5],
        math3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    };
    let leng = 0;
    for (let val in giveUpMath) {
        leg.push(giveUpMath[val].length);
        if (giveUpMath[val].length < list.length) {
            for (let i = 0; i < list.length; i++){
                if (i === leng) {
                    i = 0;
                }
                if (list.length < giveUpMath[val].length) break;
                giveUpMath[val] = [...giveUpMath[val], giveUpMath[val][leng]]
                leng++;
                // console.log(giveUpMath[val]);
            }
            leng = 0;
        }
        leng = 0;
    }
    // console.log(giveUpMath);
    let answer = [];
    let count = 0;
    for (let val in giveUpMath) {
        // console.log(giveUpMath[val]);
        for (let i = 0; i < list.length; i++){
            if (giveUpMath[val][i] === list[i]) {
                // console.log(count);
                count++;
            }
        }
        answer.push(count);
        count = 0;
    }
    // console.log(answer);
    let resLeng = answer.length;
    let res = Array(); // 최종 결과
    for (let i = 0; i < resLeng; i++){
        if (answer[i] === Math.max(...answer)){
            res.push(answer.indexOf(answer[i]))
        }
    }
    let aa = res.map(r => { return r + 1 } );
    console.log('b', aa);

    return answer;
}
console.log(solution([1, 2, 3, 4, 5]));

// solution([1,3,2,4,2]);

// ////// ///

// function solution(res) {
//     let anaswer;
//     let giveMaths = {
//         one: [1, 2, 3, 4, 5],
//         two: [2, 1, 2, 3, 2, 4, 2, 5],
//         three: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     }
//     // res의 길이만큼 반복문을 돌리기
//     for (let i = 0; i < res.length; i++){
//         if (answer.length < res.length) {
            
//         }
//     }

//     return answer;
// }



// 1. res 길이만큼 각각 one, two, three 반복해서 증가.
// 2. filter?를 사용해서 각각 res랑 one/two/three 비교해서 틀린 답만 모아둔 카운터 생성
// 3. 카운터 값이 큰 순서대로 정렬
// 4. 큰 값이랑 정렬 했으면

// let res = [1, 2, 3, 4, 5, 4];
// let giveMaths = {
//     one: [1, 2, 3, 4, 5],
//     two: [2, 1, 2, 3, 2, 4, 2, 5],
//     three: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
// }
// let answer = [];
// let resMaths = {
//     one: [],
//     two: [],
//     three: [],
// }
// if (res.length > giveMaths.one.length) {
//     while (true) {
//         resMaths.one.push(...giveMaths.one);
//         if (resMaths.one.length > res.length) {
//             break;
//         }
//     }
// }
// console.log(resMaths.one);

// if (res.length > giveMaths.two.length) {
//     while (true) {
//         resMaths.two.push(...giveMaths.two);
//         if (resMaths.two.length > res.length) {
//             break;
//         }
//     }
// }
// console.log(resMaths.two);

// if (res.length > giveMaths.three.length) {
//     while (true) {
//         resMaths.three.push(...giveMaths.three);
//         if (resMaths.three.length > res.length) {
//             break;
//         }
//     }
// }
// console.log(resMaths.three);

// console.log(bb);
