/*
    멀리뛰기에 사용될 칸의 수 => n 이 주어질 때
    효진이가 끝에 도달하는 방법이 몇 가지인지 알아내,
    여기에 1234567을 나눈 나머지를 리턴하는 함수.
*/
function solution(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n + 1; i++) {
        answer.push((answer[i - 2] + answer[i - 1]) % 1234567)
    }
    return answer[answer.length - 1];
}

console.log(solution(1));
console.log(solution(2)); 
console.log(solution(3)); 
console.log(solution(4));