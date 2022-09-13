function solution(x) {
    var answer = 0;
    let stringNum = x.toString();
    for (let i = 0; i < stringNum.length; i++){
        answer += parseInt(stringNum[i]);
    }
    return x % answer === 0 ? true : false;
}

console.log(solution(13));