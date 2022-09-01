function solution(priorities, location) {
    let answer = [];
    let arr = [];
    arr = priorities.map((arr, index) => [arr, index]);
    while (arr.length) {
        const first = arr.shift();
        console.log('arr', arr);
        console.log('first', first);
        if (first[0] >= Math.max(...arr.map(m => m[0]))) {
            answer.push(first[1]);
            console.log('answer', answer);
            if (first[1] === location) break;
        } else {
            arr.push(first);
        }
    }
    console.log(answer.indexOf(location) + 1);
}

solution([2, 1, 3, 2], 2);