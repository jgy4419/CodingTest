function solution(name, yearning, photo) {
    var answer = [];
    let sum = 0;
    for(let i = 0; i < photo.length; i++) { 
        for(let j = 0; j < name.length; j++) {
            let index = 0;
            if(photo[i].includes(name[j])) {
                index = name.indexOf(name[j]);
                sum += yearning[index];
            }else sum += 0;
        }
        answer.push(sum);
        sum = 0;
    }
    return answer;
}

console.log(solution(
    ["may", "kein", "kain", "radi"], 
    [5, 10, 1, 3],
    [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
))

console.log(solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
));

console.log(solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"],["kein", "deny", "may"], ["kon", "coni"]]
));

if('kein' === 'kain'){
    console.log('?');
}