// 이어서 풀어보기.
/* 
    n -> 진법
    t -> 미리 구할 숫자의 개수
    m -> 게임에 참가하는 인원
    p -> 튜브의 순서.
*/


// 다른 사람 풀이
function solution(n, t, m, p) {
    let res = ''
    let num = 0
    let seq = ''
    // res 길이가 미리 구한 수 보다 작은 경우 반복.
    while (res.length < t) {
        // seq 길이가 m(게임에 참가하는 인원)보다 크거나 같으면?
        if (seq.length >= m) { // 순번에 맞는 경우.
            // seq에서 튜스의 순서에 맞는 값을 넣음.
            res += seq[p - 1];
            console.log(seq);
            seq = seq.slice(m); // m(참가하는 인원만큼)개씩 없애줌. 즉, 문자열 초기화.
        }else {
            // 아니라면 num 값을 진수에 맞게 변환하고 대문자로 해서 출력.
            seq += num.toString(n).toUpperCase()
            // 그리고 num 값은 1증가.
            num++
        }
    }
    return res
}

function solution(n, t, m, p) {
    let answer = '';
    let arithmeticArr = [];
    let beforeNums = t * m;
    for(let i = 0; i < beforeNums; i++) { 
        arithmeticArr.push(i.toString(n));
    }
    let count = 1;
    for(let i = 0; i < arithmeticArr.length; i++) {
        if(answer.length === t) break;
        if(arithmeticArr[i].split('').length > 1) {
            for(let j = 0; j < arithmeticArr[i].split('').length; j++){
                if(answer.length === t) break;
                else if(count === p){
                    answer += arithmeticArr[i][j].toUpperCase();
                }
                if(count === m) count = 0;
                count++;
            }
        }else  {
            if(count == p) answer += arithmeticArr[i].toUpperCase();
            if(count === m) count = 0;
            count++;
        }
    }
    return answer;
}

console.log(solution(2, 4, 2, 1)); // result -> '0111'
console.log(solution(16, 16, 2, 1)); // result -> "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // result -> "13579BDF01234567"