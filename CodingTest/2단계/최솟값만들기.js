function solution(A,B){
    var answer = 0;
    A = A.sort((a, b) => a - b); // 낮 -> 큰
    B = B.sort((a, b) => b - a); // 낮 -> 큰
    let sum = 0;
    for (let i = 0; i < A.length; i++){
        answer = answer + (A[i] * B[i]);
    }
    console.log(answer);
    return answer;
}

solution([1, 4, 2], [5, 4, 4]);