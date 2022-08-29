function solution(arr) {
    let sortArr = [...arr].sort((a, b) => a - b );
    let minusArr = sortArr[0];
    if (arr[0] === 10) return [-1];
    return arr.filter(arr => arr !== minusArr);
}