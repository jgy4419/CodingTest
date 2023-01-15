function solution(keyinput, board) {
    var answer = [0, 0];
    let minus = [0, 0];
    for (let i = 0; i < keyinput.length; i++){
        if (keyinput[i] === 'right') minus[0]++;
        else if (keyinput[i] === 'left') minus[0]--;
        else if (keyinput[i] === 'up') minus[1]++;
        else minus[1]--;
    }
    if (minus[0] !== 0 && minus[1] !== 0) return minus;
    else {
        if (minus[0] !== 0) {
            answer[0] = 0;
            answer[1] = board[1] - minus[1];
        }
        else if (minus[1] !== 0) {
            answer[1] = 0;
            answer[1] = -(board[1] + minus[1]);
        }
        return answer;
    }
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));