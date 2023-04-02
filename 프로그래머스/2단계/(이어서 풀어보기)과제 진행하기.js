// https://velog.io/@_jake/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%BC%EC%A0%9C-%EC%A7%84%ED%96%89%ED%95%98%EA%B8%B0-JavaScript
/* 
    [name, start, playtime] 이렇게 3가지로 이루어져 있다.
    - 과제는 시작하기로 한 시각이 되면 시작.
    - 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있으면 멈추고 새로운 과제를 시작.
    - 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행.
        - 괒를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행.
    - 멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작.
*/
function solution(plans) {
    var answer = [];
    // 시간 기준으로 정렬.
    const queue = plans.map((plan) => {
        const [name, time, spend] = plan;
        const [hour, minute] = time.split(':');
        const convertedTime = Number(hour) * 60 + Number(minute);
    
        return [name, convertedTime, Number(spend)];
      })
        .sort((a, b) => a[1] - b[1]);

    // plans가 있을 때 까지 반복.

    return answer;
}

// res -> ["korean", "english", "math"]
// console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]));
// res -> ["science", "history", "computer", "music"]
console.log(solution([
    ["science", "12:40", "50"], 
    ["music", "12:20", "40"], 
    ["history", "14:00", "30"], 
    ["computer", "12:30", "100"]]));
// res -> ["bbb", "ccc", "aaa"] 
// console.log(solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]));

// let str = "11:40";
// console.log(str.slice(3, 5), str);

const date = new Date();
const hr = date.setHours(1);
const min = date.setMinutes(20);

console.log(date, hr, min);