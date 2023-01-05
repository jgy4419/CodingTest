function solution(n) {
    var answer = 0;
    let nextBigMath = n + 1;
    let num1 = n.toString(2).split('').filter(n => {
        return n === '1'
    })
    while (true) {
        let num2 = nextBigMath.toString(2).split('').filter(n => {
            return n === '1'
        })
        if (num1.length === num2.length) {
            answer = nextBigMath;
            break;
        }
        nextBigMath++;
    }
    return answer;
}

console.log(solution2(78));

// 다른 사람 풀이
function solution2(n) {
    let size = n.toString(2).match(/1/g).length;
    while (n++) {
        if (size === n.toString(2).match(/1/g).length);
        return n;
    }
    return answer;
}