function solution(brown, yellow) {
    var answer = [];
    let measure = [];
    for (let i = 0; i <= yellow; i++){
        if (!Number.isInteger(yellow / i)) {
            continue;
        }
        const n = yellow / i;
        const width = n + 2;
        const height = i + 2;

        if (i * 2 + width * 2 === brown) {
            return [width, height];
        }
    }
    // let index = 1;
    // while (index <= (brown + yellow)) {
    //     if ((brown + yellow) % index == 0) {
    //         measure.push(index);
    //     }
    //     index += 1;
    // }
    // let x = measure[((measure.length / 2) - 1) + 1];
    // let y = measure[((measure.length / 2) - 1)];
    // if (measure.length % 2 === 0) {
    //     if ((x - 2)*(y - 2) === yellow) {
    //         answer.push(measure[((measure.length / 2) - 1) + 2]);     
    //         answer.push(measure[((measure.length / 2) - 1) - 1]);     
    //     }else {
    //         answer.push(x);
    //         answer.push(y);   
    //     }
    // } else {
    //     answer.push(x);
    //     answer.push(y);
    // }
    // return answer;
}

// 48 => 1 2 3 4 6 8 12 16 24 48

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
console.log(solution(16, 8)); // [6, 4]

// [4, 2]

// 1, 2, 3, 4, 6, 8, 12, 24