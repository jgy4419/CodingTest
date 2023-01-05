function solution(my_string) {
    var answer = '';
    let moum = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < moum.length; i++){
        let empty = new RegExp(`${moum[i]}`, 'g');
        my_string = my_string.replace(empty, '');
    }
    return my_string;
}
console.log(solution("bus"));
console.log(solution("nice to meet you"));