function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = i; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j + 1]);
        }
    }
    answer = [...new Set(answer)];
    // answer = [...answer];
    // NaN 값 처리
    for (let i = 0; i < answer.length; i++){
        if (Object.is(answer[i], NaN)) {
            answer.splice(i, 1);
        }
    }
    return answer.sort((a, b) => a - b);
}
console.log(solution([2,1,3,4,1]));