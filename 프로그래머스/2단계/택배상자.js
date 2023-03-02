// 택배상자
/* 
    1. order[0]이 1이 아니라면 [1, 2, 3, 4, 5] 배열에 있는 값을 order[0]에 맞게 추가하기.
        - order의 개수만큼 순차적인 배열 만들기.
        - order 복사 배열 만들기.
    2. 순차적인 배열은 first in lastout, order 배열은 first out으로 order 값을 shift 해주기. (count 1씩 증가.)
    3. order 기준으로 순차, order 배열을 빼다가 order복사본 배열 이랑 순차 배열에 끝에 값이 동일하지 않으면 해당 값 반환시켜주기.
*/
// function solution(order) {
//     const inTureArr = Array.from({length: order.length + 1}, (v, i) => i + 1);
//     const beforeArr = inTureArr.splice(0, order[0] - 1);
//     const afterArr = inTureArr.splice(1);
//     let count = 1;
//     for(let i = 1; i < order.length; i++) {
//         if(beforeArr.pop() === order[i] || afterArr.shift(0, 1) === order[i]) {
//             console.log(order[i], beforeArr, afterArr)
//             count++;   
//         }else {
//             break;
//         }
//     }
//     return count;
// }

function solution(order){
    let idx = 0;
    const stack = [];
    for(let i = 1; i <= order.length; i++) {
        stack.push(i);
        // stack[stack.length - 1] 이랑 order[idx] 값이 같으면 while 반복문 실행.
        while(stack.length > 0 && stack[stack.length - 1] === order[idx]){
            stack.pop();
            idx++;
        }
    }
    return idx;
}
// console.log(solution([2, 1, 3, 4, 5, 6]));
console.log(solution([4, 3, 1, 2, 5]));
// console.log(solution([5, 4, 3, 2, 1]));