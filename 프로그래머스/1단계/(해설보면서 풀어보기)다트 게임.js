/* 
    1. 기회는 3번
    2. 각 기회마다 얻을 수 있는 점수는 0점 ~ 10점
    3. 점수 : S => 1제곰 D => 2제금 T => 3제곱
    4. 옵션 
        - 스타상(*): 해당 점수와 바로 전에 얻은 점수를 각 2배로 만듦.
        - 아차상(#): 당첨 시 해당 점수는 마이너스
    5. 스타상은 첫 번째 기회에서도 나올 수 있다. (스타상의 점수만 2배)
    6. S, D, T 는 점수마다 하나씩 존재한다. 

*/
function solution(dartResult) {
    let answer = [];
    let res = 0;
    dartResult = dartResult.split('');
    for (let i = 0; i < dartResult.length; i++){
        if (dartResult[i] === '*') {
            answer[answer.length - 1] = answer[answer.length - 1] * 2
            // answer[answer.length - 2] = answer[answer.length - 2] * 2
        } else if (dartResult[i] === '#') {
            answer[answer.length - 1] = answer[answer.length - 1] * (-1);
        }
        // 만약 'S' 문자열이 있으면 1제곱, 'D' 문자열이 있으면 2제곱 'T' 문자열이 있으면 3제곱
        console.log('dartResult', dartResult[i]);
        if (dartResult[i] === 'S') {
            if (i === 1) {
                // 첫 번째로 S나 나왔을 때 첫 번째 값에 * 2를 추가로 해주기
                answer.push(Number(dartResult[i - 1]) * 2);
                continue;
            }
            answer.push(Number(dartResult[i - 1]));

        } else if (dartResult[i] === 'D') {
            answer.push(Number(dartResult[i - 1] ** 2));
        } else if (dartResult[i] === 'T') {
            answer.push(Number(dartResult[i - 1] ** 3));
        }
        console.log('answer', answer);
    }
    for (let i = 0; i < answer.length; i++){
        res += answer[i];
    }
    return res;
}
// 첫 번째로 S나 나왔을 때 첫 번째 값에 * 2를 추가로 해주기
// 입력형식 => "점수|보너스|[옵션]" 으로 이루어진 문자열 3세트
console.log(solution('1D2S3T*')); // result => 37

// solution1 => 문자 2개씩 나누기 만약 나눈 후 단어가 *나 #가 들어가 있으면 