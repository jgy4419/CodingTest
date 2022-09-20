function solution(n) {
    var answer = 0;
    let count = 0;
    // console.log('numArr', numArr);
    for (let i = 2; i <= n; i++){
        if (i % 2 === 0 || i % 3 !== 0) {
            console.log('?', i);
            count++;
        }
    }
    return count;
}

console.log(solution(10));