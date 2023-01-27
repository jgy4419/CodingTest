function solution(my_string) {
    let res = 0;
    var answer = [];
    var regex = /[^0-9]/gi;

    my_string = my_string.replace(regex, " ");
    answer = my_string.split(" ");
    for (let i = 0; i < answer.length; i++){
        res += Number(answer[i]);
    }
    return res;
}

// 다른 사람 풀이
function solution2(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution2("1a2b3c4d123Z"));