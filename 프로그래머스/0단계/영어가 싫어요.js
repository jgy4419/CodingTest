function solution(numbers) {
    const abc = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine'];
    let regexAllCase;
    for (let i = 0; i < abc.length; i++){
        regexAllCase = new RegExp(abc[i], "gi")
        if (numbers.includes(abc[i])) {
            numbers = numbers.replace(regexAllCase, i);
        }
    }
    return Number(numbers);
}

console.log(solution('onefourzerosixsevenzero'));