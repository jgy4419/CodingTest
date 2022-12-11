// 나의 풀이
function solution(number, limit, power) {
    let answer = 0;
    let measure = [];
    let index = 1;
    let count = 0;
    for (let i = 1; i <= number; i++){
        while (index <= i) {
            if (i % index === 0) {
                count++;   
            }
            index++;
        }
        measure.push(count);
        count = 0;
        index = 1;
    }
    for (let i = 0; i < measure.length; i++){
        if (measure[i] > limit) {
            measure[i] = limit - 1;
            answer += measure[i];
            continue;
        }
        answer += measure[i];
    }
    return answer;
}

console.log(solution(5, 3, 2)); // 결과 10
// [1, 2, 2, 3, 2, 4, 2, 4, 3, 4 ] 개
console.log(solution(10, 3, 2)); // 결과 21

// 다른 사람 풀이 1 (코드 이해하기)
function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}

// 다른 사람 풀이 2 (코드 이해하기)
function solution(number, limit, power) {
    let resultArr = [];
    let res;
    for (let i = 1; i <= number; i++) {
        let temp = [];
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i%j === 0) temp.push(j);
        }
        res = temp.length;
        for (let k = 0; k < res; k++) {
            temp.push(i/temp[k]);
        }
        resultArr.push(new Set(temp).size);
    }

    res = 0;
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] > limit) res += power;
        else res += resultArr[i];
    }
    return res;
}

// 다른 사람 풀이 3 (코드 이해하기)
function getDivisor(number){
    const divisor = [];
    
    for(let i = 1; i <= (number / 2); i++){
        if(number % i === 0){
            divisor.push(i);
        }
    }
    
    return divisor.length + 1;
}

function purchaseWeapon(states, limit, power){
    let steel = 0;
    
    states.forEach((state) => {
        if(state > limit){
            steel += power;
        }
        
        if(state <= limit){
            steel += state;
        }
    })
    
    return steel;
}

function solution(number, limit, power) {
    const knights = new Array(number).fill(0);
    
    const attackStates = knights.map((_, index) => {
        const state = getDivisor(index + 1);
        
        return state;
    });
                                
    const totalSteel = purchaseWeapon(attackStates, limit, power);
    
    return totalSteel;
}