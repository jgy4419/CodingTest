// 한 번에 k 칸을 앞으로 점프하거나, 현재까지 온 거리 * 2 만듬 위치로 순단이동 할 수 있는 능력.
function solution(n){
    let ans = 0;

    while(n !== 0) {
        if(n % 2 === 0) n = n / 2;
        else {
            n--;
            ans++;
        }
    }
    return ans;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5