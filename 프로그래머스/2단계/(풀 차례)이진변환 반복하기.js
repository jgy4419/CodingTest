function solution(s) {
    var answer = [0, 0];
    let count = 0;
    let zeroCount;
    for (let i = 0; i <= s.length; i++){
        zeroCount = s.split('0').length - 1;
        answer[1] += zeroCount;
        if (zeroCount === 0) continue;
        for (let j = 0; j <= s.length; j++){
            s = String(s).replace('0', '');
            console.log('arri S : ', s);

        }
        console.log('arrj S : ', s);

        // s = parseInt(s.length, 2);
        s = s.length
        console.log('s', s);
        s = s.toString(2);
        console.log('s', s);
        console.log('zeroCount', zeroCount);
        count++;
    }
    answer[0] = count
    return answer;
}

// console.log(solution("110010101001")); // result => [3, 8]
console.log(solution("01110")); // result => [3, 3]
// console.log(solution("1111111")); // result => [4, 1]

const test = '111';
console.log(test.length);