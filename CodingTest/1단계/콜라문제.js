// 나머지로 나온 값 변수에 저장
// 나눠서 나온 값 변수에 따로 저장
// 반복해서 나온 값 변수에 저장

// a는 나눌 기준, b는 마트에서 주는 콜라 병 수, n은 가지고 있는 빈 병 총 개수
function solution(a, b, n) {
    var answer = 0;
    let remainder = 0;
    let divided = 0;
    while (true) {
        divided = parseInt((n % a)) 
        answer += (parseInt(n / a) * b);
        n = parseInt(n / a) + divided;
        if (n < a) {
            break;
        } 
    }
    return answer;
}

console.log(solution(3, 1, 20));
