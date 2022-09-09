function solution(answers) {
    let answer = [];
    // 수포자 1, 2, 3 각 변수에 담아서 배열 값으로 정의
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++){
        console.log('1', i % a1.length)
        console.log('2', i % a2.length)
        console.log('3', i % a3.length)
    }

    let count1 = answers.filter((a, i) => a === a1[i % a1.length]).length;
    let count2 = answers.filter((a, i) => a === a2[i % a2.length]).length;
    let count3 = answers.filter((a, i) => a === a3[i % a3.length]).length;
    let max = Math.max(count1, count2, count3);

    if (count1 === max) { answer.push(1) };
    if (count2 === max) { answer.push(2) };
    if (count3 === max) { answer.push(3) };
    return answer;
}
solution([1, 3, 2, 4, 2, 5, 2, 3, 4]);


console.log(6 % 5);