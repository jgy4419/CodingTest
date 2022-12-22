function solution(numlist, n) {
    return numlist.sort((a, b) => {
        // sort로 기본은 오름차순
        const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];
        // 같은 값 나오면 해당 b랑, a값 비교해서 더 큰 값을 반환 (내림차순으로)
        if (aGab === bGab) return b - a;
        return aGab - bGab;
    })
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));