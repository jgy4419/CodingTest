// 유클리드 호제법 : 주어진 인풋 중 큰 값을 a, 작은 값은 b, a를 b로 나눈 나머지를 r이라 가정하면
/* 
    a > b, a % b .. r
    b % r .. r2
    r % r2 .. r3

    이 과정을 반복하면 0이 되는 순간이 온다. 나머지를 0으로 만들어 주는 수가 최대 공약수
    input으로 주어진 자연수 2개를 곱하고 최대공약수로 나누어 최소공배수를 구하면 된다.
*/
function solution(n, m) {
    let answer = [];
    const greatest = (a, b) => {
        if (b === 0) return a
        return greatest(b, a % b);
    }
    const least = (a, b) => (a * b) / greatest(a, b);
    return [greatest(n, m), least(n, m)];
}

console.log(solution(4, 6));