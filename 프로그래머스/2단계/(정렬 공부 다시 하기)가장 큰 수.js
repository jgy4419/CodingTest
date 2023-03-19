function solution(numbers) {
    let number_list = [];
    for(let number of numbers){
        number_list.push(number.toString());
    }
    let resSort = number_list.sort((a, b) => {
        console.log((b + a), (a + b));
        return (b+a) - (a+b);
    });

    return resSort.join("")[0] === '0' ? "0" : number_list.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));