function solution2(strings, n) {
    var answer = strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    })
    
    return answer;
}

function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}

console.log(solution(["sun", "bed", "car"], 1));

// console.log('a'.localeCompare('c'));

/* 
    localCompare()
        - 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 같은 순서에
          배치되는지를 알려주는 숫자를 반환해준다.
*/