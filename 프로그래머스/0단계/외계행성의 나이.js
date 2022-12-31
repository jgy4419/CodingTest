function solution(age) {
    var answer = '';
    let reName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    age = String(age);
    for (let i = 0; i < age.length; i++){
        answer += reName[Number(age[i])]
    }
    return answer;
}

console.log(solution(23)); // result => "cd"
console.log(solution(51)); // result => "fb"
console.log(solution(100)); // result => "baa"