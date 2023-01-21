function solution(slice, n) {
    return Math.ceil(n / slice);
    // if (slice >= n) return 1;
    // while (true) {
    //     if (slice < n) slice *= 2;
    //     else if (slice >= n) break;
    // }
    // console.log(slice);
    // return Math.ceil(slice / n);
}
console.log(solution(7, 10));
console.log(solution(4, 12));