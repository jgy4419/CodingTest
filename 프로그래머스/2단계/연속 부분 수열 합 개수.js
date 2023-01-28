function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++){
        let sum = 0;
        for (let j = 0; j < elements.length; j++){
            sum += circular[i + j];
            set.add(sum);
            console.log('set', set)
        }
    }
    return set.size;
}
 
console.log(solution([7, 9, 1, 1, 4]));

