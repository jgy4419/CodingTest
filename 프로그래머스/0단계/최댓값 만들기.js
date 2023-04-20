function solution(numbers) {
    if(numbers.length % 2 === 1) numbers.push(1);
    const positive = [];
    const negative = [];
    for(let i = 0; i < 2; i++) {
        positive.push(Math.max(...numbers))
        let positiveIndex = numbers.indexOf(Math.max(...numbers));
        numbers.splice(positiveIndex, 1);
    }

    for(let i = 0; i < 2; i++) {
        negative.push(Math.min(...numbers))
        let negativeIndex = numbers.indexOf(Math.min(...numbers));
        numbers.splice(negativeIndex, 1);
    }

    const positiveRes = positive[0] * positive[1];
    const negativeRes = negative[0] * negative[1];

    return positiveRes > negativeRes ? positiveRes : negativeRes;
}

console.log(solution([-500, 2, -1000] ));

// 
function solution(numbers) {
    var answer = 0;
    var maxVal = -Infinity;
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){

            if( maxVal < (numbers[i]*numbers[j]) 
               && numbers.indexOf(numbers[i]) != numbers.lastIndexOf(numbers[j])){

                maxVal = (numbers[i]*numbers[j]);

            }
        }
    }

    answer = maxVal;

    return answer;
}

// 다른 사람 풀이
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}