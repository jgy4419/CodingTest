/*
    어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 눈문이 h편 이상이고 나머지 논문이 h편 이하 인용되었으면
    h의 최댓값이 이 과학자의 H-Index이다.

    어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때 이 과학자의 H-Index를
    return 하도록 하기.

    - 피인용수가 논문수랑 같거나, 피인용수가 작아지기 시작하는 숫자가 H
*/

function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i <= citations.length; i++) {
        if (citations[i] >= i + 1) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([3, 0, 6, 1, 5]));