function solution(n, k, enemy) {
    let answer = 0;
    for (let i = 0; i < enemy.length; i++){
        // 병사의 개수가 공격해오는 병사보다 숫자가 작으면? 
        if (n / 2 < enemy[i] || n < enemy[i]) {
            k--;
            answer++;
        } else if(n > enemy[i]){
            n -= enemy[i];
            answer++;
        }
        if (k < 0) {
            break;
        }
        console.log('k: ', k);
        console.log('n: ', n);
    }
    return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // result => 5
console.log(solution(2, 4, [3, 3, 3, 3])); // result => 4