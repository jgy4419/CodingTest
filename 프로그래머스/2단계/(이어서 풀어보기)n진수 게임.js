// 이어서 풀어보기.
/* 
    n -> 진법
    t -> 미리 구할 숫자의 개수
    m -> 게임에 참가하는 인원
    p -> 튜브의 순서.

*/
function solution(n, t, m, p) {
    let answer = '';
    let arithmeticArr = [];
    let beforeNums = t * m;
    for(let i = 0; i < beforeNums; i++) { 
        arithmeticArr.push(i.toString(n));
    }
    let count = 1;
    for(let i = 0; i < arithmeticArr.length; i++) {
        console.log(answer);
        if(answer.length === t) break;
        if(arithmeticArr[i].split('').length > 1) {
            for(let j = 0; j < arithmeticArr[i].split('').length; j++){
                if(answer.length === t) break;
                else if(count === m) count = 0;
                else if(count === p){
                    answer += arithmeticArr[i][j].toUpperCase();
                }
                count++;
            }
        }else  {
            if(count === m) count = 0;
            if(count == p){
                answer += arithmeticArr[i].toUpperCase();
            }
            count++;
        }
    }
    return answer;
}

console.log(solution(2, 4, 2, 1)); // result -> '0111'
console.log(solution(16, 16, 2, 1)); // result -> "02468ACE11111111"
// 여기 결과 왜 하나도 안뜨는지 해결하기
console.log(solution(16, 16, 2, 2)); // result -> "13579BDF01234567"