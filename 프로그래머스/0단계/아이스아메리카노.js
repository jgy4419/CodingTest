function solution(money) {
    let answer = [];
    let count = 0;
    if (money <= 1000000 && money > 0) { 
        money = String(money).replace(/,/gi, '');
        let division = Math.floor(Number(money) / 5500);
        let minus = 5500 * division;
        answer.push(division, money - minus);
        return answer;
    }
}

// console.log(solution('5,500')); // result => [1, 0]
console.log(solution('15,000')); // result => [2, 4000]
console.log(solution('4,500')); // result => [2, 4000]