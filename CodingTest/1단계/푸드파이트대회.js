function solution(food) {
    var answer = [];
    let even = [];
    for (let i = 0; i < food.length; i++){
        if (food[i] % 2 !== 0) even.push(food[i] - 1);
        else even.push(food[i]);
    }
    for (let i = 1; i < even.length; i++){
        for (let j = 0; j < even[i] / 2; j++){
            answer.push(i);
        }
    }
    let reverse = [...answer].reverse();
    let res = answer + '0' + reverse;
    return res.replace(/,/g, '');
}

console.log(solution([1, 3, 4, 6]));

// 다른 사람 풀이.. 
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}