// function solution(s) {
//     var answer = [];
//     let zeroCount = 0;
//     let arrCount = 1;

//     let changeNum = 0;
//     console.log(s.toString().split(''));
//     // 1. 0을 제거한 나머지 수 
//     let res = s.toString().split('').filter((n, i) => { return n === '1' }).length;
//     console.log(res);
//     while (true) {
//         changeNum = res.toString(2).length;
//         zeroCount += changeNum; // zero 개수
//         console.log('!!', changeNum)
//         res = changeNum.toString(2).split('').filter((n, i) => { return n !== '0' }).length;
//         console.log('change', changeNum + 'res' + res + '?');
//         console.log('zero', zeroCount)

//         console.log('changeNum', changeNum);
//         arrCount++;
//         if (res === 1) {
//             break;
//         }
//     }
//     console.log(zeroCount, arrCount);
// }

function solution(s) {
    let answer = [];
    let zeroCount = 0;
    let arrCount = 0;
    // s의 모든 0을 제거하고, 2진법으로 표현한 문자열로 바꾸기
    let res = s.toString().split('').filter((n, i) => { return n === '1' }).length;
    let changeNum = res.toString(2)
    console.log(changeNum);
    // let zeroRes = s.toString().split('').filter((n, i) => { return n === '0' }).length;
    // while (true) {
    //     let changeNum = 0;
    //     zeroCount += zeroRes;
    //     changeNum = res.toString(2).length;
    //     zeroRes = changeNum.toString(2).split('').filter(n => { return n === '1' }).length;
    //     arrCount++;
    //     if (zeroCount === 1) {
    //         zeroCount += 1;
    //         break;
    //     }
    // }
}

console.log(solution('1111111'));