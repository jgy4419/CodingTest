/* 
    - n : 전체 학생 수
    - lost : 체육복을 도난당한 학생들의 번호가 담긴 배열
    - reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
    < 체육수업을 들을 수 있는 학생의 최댓값을 return >

    // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수도 있다. 
    // 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있다. 
    ex) 4번 학생은 3번이나 5번 학생에게만 체육복을 빌려줄 수 있음. 
*/

function solution(n, lost, reserve) {
    // count는 빌려줄 수 있는 사람의 수
    let answer, count = 0;
    let changeLost = lost.filter(lost => !reserve.includes(lost)) // 제거할 값
    let changeReserve = reserve.filter(reserve => !lost.includes(reserve)) // 훔처간 사람들을 제외한 여분 체육복 있는 사람
    for (let i = 0; i < changeReserve.length; i++){
        for (let j = 0; j < changeLost.length; j++){
            // 학생은 ex) 4번 학생은 3번 학생이나 5번 학생한테만 체육복을 빌려줄 수 있다.
            // 즉, 여분있는 학생이 빌려주기 위해 lost 번호가 여분 학생의 +1인지 -1인지 판별해서 조건에 맞으면 count를 1 증가.
            if (changeLost[j] - 1 === changeReserve[i] || changeLost[j] + 1 === changeReserve[i]) {
                count++;
                break;
            }
        }
    }
    answer = n - changeLost.length + count; // 전체 학생수 - 도둑맞은 학생 수 + 빌려줄 수 있는 학생들의 수
    if (answer > n) return answer = n; // 위에 나온 answer이 전체 학생 수 보다 많으면 그냥 전체 학생 수 return
    return answer;
}

solution(5, [2, 4], [3]);