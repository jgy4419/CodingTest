function solution(my_string) {
    my_string = my_string.split('');
    var answer = '';
    for (let i = 0; i < my_string.length; i++){
        if (answer.split('').includes(my_string[i])) {
            continue;
        } else {
            answer += my_string[i];
        }
    }
    return answer;
}

console.log(solution('people')); // result => "peol"
console.log(solution('We are the world')); // result => We arthwold