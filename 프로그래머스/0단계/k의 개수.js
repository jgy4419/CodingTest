function solution(i, j, k) {
    let answer = 0;
    let arrayIndex;
    for (let arr = i; arr <= j; arr++){
        arrayIndex = String(arr).split('');
        for (let arr2 = 0; arr2 <= arrayIndex.length; arr2++){
            if (Number(arrayIndex[arr2]) === k) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(1, 13, 1));

// 다름 사람 풀이
function solution(i, j, k) {
    let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
    return Array.from(str).filter(t => +t === k).length;
}