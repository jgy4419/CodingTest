// 귤의 크기(key)와 그 개수(value)를 Map에 저장하여, 개수가 많은 순 부터 사용하여 k개를 채우면 끝나는 문제입니다.
function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    let obj = {};
    // obj 객체에 obj[t]가 정의되지 않았으면 0 정의되어 있으면 해당 값에서 + 1 해줌.
    tangerine.forEach((t) => obj[t] = (obj[t] || 0) + 1);

    // let sorted = [];
    // for (let data in obj) {
    //     sorted.push([data, obj[data]])
    // }
    // sorted.sort((a, b) => b[1] - a[1]);

    // for (let i = 0; i < sorted.length; i++) {
    //     if (sum >= k) break;
    //     sum += sorted[i][1];
    //     answer++;
    // }

    // 정렬하는 또 다른 방법
    const arr = Object.values(obj).sort((a, b) => b- a);
    // 아래 반복문도 변경
    for (let i = 0; i < arr.length; i++) {
        if (sum >= k) break;
        sum += arr[i];
        answer++;
    }
    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));

// 다른 사람 풀이
function solution2(k, tangerine) {
    let answer = 0;
    const tDict = {};
    // 귤 객체를 초기화 해준다.
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
    // 값만을 도출하여 내림차순으로 정렬해준다. - 키는 모두 다르기 때문
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    // 필요한 귤만큼 가짓수를 더해준다.
    for (const t of tArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}

console.log(solution2(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution2(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution2(2, [1, 1, 1, 1, 2, 2, 2, 3]));