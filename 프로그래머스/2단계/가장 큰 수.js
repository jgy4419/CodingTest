function solution(numbers) {
    let number_list = [];
    for(let number of numbers){
        number_list.push(number.toString());
    }
    number_list.sort((a, b) => (b + a) - (a + b));

    return number_list.join("")[0] === '0' ? "0" : number_list.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));