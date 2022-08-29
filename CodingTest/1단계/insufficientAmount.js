// 부족한 금액 계산하기
function solution(price, money, count) {
    var answer, resPrice = 0;
    for (let i = 1; i <= count; i++) resPrice += price * i;
    answer = resPrice - money;
    return answer < 0 ? 0 : answer;
}