// function solution(chicken) {

//     // 치킨의 초기 값은 1081장
//     let result = 0;
//     let temp = chicken % 10; // 108개를 주문하면 쿠폰은 1개가 남는다.
//     let answer = Math.floor(chicken / 10); // 108개의 닭 주문, 108 쿠폰 발급
//     result += answer;
//     answer += temp;

//     while(1) {
//         temp = answer % 10;
//         answer = Math.floor(answer / 10); // 10
//         result += answer;
//         if (answer === 0) {
//             break;
//         }
//         answer += temp;
//     }

//     return result;
// }

// console.log(solution(1081));

/* 
    - 치킨 한 마리당 쿠폰 한 장 발급
    - 열 장을 모으면 치킨 한 마리 서비스로 받을 수 있고, 치킨에도 쿠폰이 발급
*/
function solution(chicken) {
    let answer = 0;
    let count = 0;
    for (let i = 0; i < chicken; i++){
        count++;
        if (count === 10) {
            answer++;
            count = 1;
        }
    }
    return answer;
}
console.log(solution(100));
console.log(solution(1081));