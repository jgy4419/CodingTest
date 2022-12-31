function solution(my_string) {
    return my_string.split('').map(str => {
        return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
    }).join('');
}

console.log(solution("cccCCC"));