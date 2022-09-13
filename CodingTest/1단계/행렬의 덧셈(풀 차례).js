function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0; i < arr1.length; i++){
        answer.push(arr1[i] + arr2[i]);
    }
    return answer;
}
console.log(solution([[4, 6], [7, 9]]));