function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++){
        answer++;
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while (answer.toString().includes('3') || answer % 3 === 0) {
            answer++;            
        }
    }
    return answer;
}

console.log(solution(15));