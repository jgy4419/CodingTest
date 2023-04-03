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
    const restArr = [];
    // 시간 기준으로 정렬.
    const queue = plans.map((plan) => {
        const [name, time, spend] = plan;
        const [hour, minute] = time.split(':');
        const convertedTime = Number(hour) * 60 + Number(minute);
    
        return [name, convertedTime, Number(spend)];
      })
        .sort((a, b) => a[1] - b[1]);
    console.log(queue);
    // while(plans.length !== 0){
        for(let i = 0; i <= queue.length; i++) {
            if(queue[i + 1] !== undefined) {
                let time = queue[i + 1][1] - queue[i][1];
                if(time < queue[i][2]) {
                    console.log('time',time);
                    restArr.push(time);
                    queue[i][1] = queue[i][2];
                    queue[i][2] -= time;
                    console.log('minue', queue);
                }else {
                    answer.push(queue[i][0]);
                    queue[i + 1][1] = time - queue[i][2];
                    queue.splice(i, 1);
                    console.log('answer', answer);
                    console.log('tet', queue);
                }
            }
            
        // }
    }
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


// function solution(plans) {
    // const queue = plans.map((plan) => {
    //     const [name, time, spend] = plan;
    //     const [hour, minute] = time.split(':');
    //     const convertedTime = Number(hour) * 60 + Number(minute);

    //     return [name, convertedTime, Number(spend)];
    // })
    //     .sort((a, b) => a[1] - b[1]);

    // const result = [];
    // const first = queue.shift();
    // let curTime = first[1];

    // const stack = [first];

    // while (queue.length) {
    //     const target = queue.shift();
    //     const [_name, time, _spend] = target;
    //     let timeDiff = time - curTime;
    //     curTime = time;

    //     while (stack.length && timeDiff > 0) {
    //     const latestPlan = stack.pop();
    //     const [lName, _lTime, lSpend] = latestPlan;

    //     if (lSpend <= timeDiff) {
    //         result.push(lName);
    //         timeDiff -= lSpend;
    //     } else {
    //         latestPlan[2] = lSpend - timeDiff;
    //         timeDiff = 0;
    //         stack.push(latestPlan);
    //     }
    //     }

    //     stack.push(target);
    // }

    // while (stack.length) {
    //     result.push(stack.pop()[0]);
    // }

    // return result;
// }