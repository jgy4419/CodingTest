function solution(k, score) {
    let answer = [];
    let arr = [];
    for (let i = 0; i < score.length; i++){
        if (arr.length < k) {
            arr.push(score[i]);
        }
        if (score[i] > Math.min(...arr)) {
            arr.pop();
            arr.push(score[i]);
            arr.sort((a, b) => b - a);
        }
        answer.push(arr[arr.length - 1]);
    }
    return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));