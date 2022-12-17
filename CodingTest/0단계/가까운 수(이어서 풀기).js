function solution(array, n) {
    let answer = [];
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++){
        answer.push(Math.abs(array[i] - n));
    }
    let index = answer.indexOf(Math.min(...answer));
    return array[index];
}
console.log(solution([3, 30, 10], 20));

