/* 
    - 짝수 index 에서는 arr 에서 query[i] 번 인덱스를 제외하고 배열의 query[i] 번 인덱스 뒷부분을 잘라서 버림
    - 홀수 index 에서는 arr 에서 query[i] 번 인덱스는 제외하고 배열의 query[i] 번 인덱스 앞부분을 잘라서 버림
    - 위 작업을 마친 후 남은 arr 의 부분 배열을 return 하는 함수 만들기
*/
function solution(arr, query) {
    let answer = arr;
    
    query.forEach((q, i) => {
        if(i % 2 ===0) answer = answer.slice(0, q + 1);
        else answer = answer.slice(q);
    })

    return answer;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]