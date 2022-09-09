function solution(n) {
    let answer = 0;
    let list = [];
    n = n.toString();
    for (let i = n.length - 1; i >= 0; i--){
        list.push(parseInt(n[i]));
    }
    answer = list.sort((a, b) => b - a).join().replace(/,/g, '');
    return parseInt(answer);
}

console.log(solution(118372));