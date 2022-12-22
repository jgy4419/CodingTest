function solution(chicken) {

    // 치킨의 초기 값은 1081장
    let result = 0;
    let temp = chicken % 10; // 108개를 주문하면 쿠폰은 1개가 남는다.
    let answer = Math.floor(chicken / 10); // 108개의 닭 주문, 108 쿠폰 발급
    result += answer;
    answer += temp;

    while(1) {
        temp = answer % 10;
        answer = Math.floor(answer / 10); // 10
        result += answer;
        if (answer === 0) {
            break;
        }
        answer += temp;
    }

    return result;
}

console.log(solution(1081));

function solution(chicken) {
    let answer = 0;
    let [count, coupon, service] = [0, 0, 0];
    
    for (let i = 0; i < chicken; i++){
        // 시킬 때 마다 쿠폰 증가
        coupon++;
        count++;
        // 치킨 쿠폰이 10개가 되면 answer에 1증가
        if (count === 10) {
            service++;
            answer++;
            count = 0;
            if (service === 10) {
                count++;
                answer++;
                service = 0;
            }
        }
    }
    return answer;
}