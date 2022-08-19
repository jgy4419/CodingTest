/* 
    0개 맞음 = 6등
    1개 맞음 - 6등
    2 - 5등
    3 - 4등
    4 - 3등
    5 - 2등
    6 - 1등
    
    - 0개수가 늘어나면 맞은(?) 횟수로 침 ex) 3, 1, 0 ,0 ,2, 4 에서 2개가 맞으면
    최소 5등 ~ 최대3등까지 될 수 있다가 답.
*/

function solution(lottos, win_nums) {
    var answer = [];
    let min_count = 0;
    let max_count = 0;
    for (let i = 0; i < lottos.length; i++){
        if (lottos[i] === 0) {
            max_count++
            continue;
        }
        if (!win_nums.includes(lottos[i])) {
            min_count += 1;
            max_count += 1;
        }
    }
    min_count += 1, max_count += 1
    if (max_count > 6) max_count = 6;
    if (min_count > min_count) min_count = 6;
    answer.push(min_count, max_count);
    return answer;
}

// console.log(solution([44, 1, 0, 0, 31, 25], 	[31, 10, 45, 1, 6, 19]));


function solution(lotto, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;

    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);
}