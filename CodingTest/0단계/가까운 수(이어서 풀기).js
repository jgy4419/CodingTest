function solution(array, n) {
    let answer = [];
    let index = 0;
    let arr = [];
    array.map(num => {
        arr.push(Math.abs(num - 20));
    })

    for (let i = 0; i < array.length; i++){
        console.log('arr', array[i] - n);
        console.log('min', Math.abs(Math.min(...arr)));
        if (Math.abs(array[i] - n) === Math.abs(Math.min(...arr))) {
            answer.push(array[i]);
        }
    }
    console.log(answer);
    index = arr.indexOf(Math.min(...arr));
    // 값이 여러 개인 경우?
    return array[index];
}

console.log(solution([3, 10, -20, 32], 20));

// let closest = array.reduce((prev, curr) => {
//     return (Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);
// })

