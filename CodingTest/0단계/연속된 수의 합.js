function solution(num, total) {
    var answer = [];
    let offset = (2 * total / num + 1 - num) / 2;
    console.log(offset);
    for (let i = 0; i < num; i++){
        answer.push(offset + i);
    }
    return answer;
}

console.log(solution(3, 12));

// 다른 사람 풀이
// function solution(num, total) {
//     var min = Math.ceil(total/num - Math.floor(num/2));
//     var max = Math.floor(total/num + Math.floor(num/2));

//     return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
// }