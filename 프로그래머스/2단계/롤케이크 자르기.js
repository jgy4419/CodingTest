function solution(topping) {
    let answer = -1;
    let [older, brother] = [
        [],[]
    ];

    // 형(철수)이 토핑을 전부 차지.
    for(let i = 1; i < Math.max(...topping) + 1; i++) older.push(i);

    for(let i = 0; i < older.length; i++) {
        
    }

    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0