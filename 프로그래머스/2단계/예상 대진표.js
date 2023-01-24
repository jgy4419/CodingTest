function solution(n, a, b) {
    let answer = 0;
    let big = a > b ? a : b;
    let small = a > b ? b : a;
    while (true) {
        if (big === small) break;
        if (small % 2 !== 0) small++;
        if (big % 2 !== 0) big++;
        small /= 2;
        big /= 2;
        console.log(small, big, '??');
        answer++;
    }
    return answer;
}

console.log(solution(8, 4, 7));