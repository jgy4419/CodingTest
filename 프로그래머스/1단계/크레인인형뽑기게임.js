function solution(board, moves) {
    var answer = 0;
    let shiftArr = [];
    // board의 배열 x축 y축 뒤집기
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < i; j++){
            [board[i][j], board[j][i]] = [board[j][i], board[i][j]]
        }
    }
    // 배열에 0 모두 제거
    let zeroDelete = board.map(arr => arr.filter(filArr => {
        return filArr !== 0;
    }))
    for (let i = 0; i < moves.length; i++){
        shiftArr.push(zeroDelete[moves[i]-1].shift());
    }
    // 배열에서 undefined도 제거해주기
    shiftArr = shiftArr.filter(arr => arr !== undefined);
    // 마지막으로 배열에서 겹치는 값 제거하는 작업 하기..!
    for (let i = 0; i < shiftArr.length; i++){
        // 반복문 돌면서 i랑 i + 1이 같으면,
        if (shiftArr[i] === shiftArr[i + 1]) {
            shiftArr.splice(i, 2);
            answer++; 
            console.log(i);
            i = -1;
        }
    }
    return answer;
}
solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);