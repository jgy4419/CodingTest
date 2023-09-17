function solution(answers){
    let answer = [];
    let [st1, st2, st3] = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    let st1Count = answers.filter((num, index) => {
      return  num === st1[index % st1.length]
    }).length;
    
    let st2Count = answers.filter((num, index) => {
        return num === st2[index % st2.length];
    }).length;

    let st3Count = answers.filter((num, index) => {
        return num === st3[index % st3.length];
    }).length;

    let maxCount = Math.max(st1Count, st2Count, st3Count);

    if(maxCount === st1Count) answer.push(1);
    if(maxCount === st2Count) answer.push(2);
    if(maxCount === st3Count) answer.push(3);

    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]