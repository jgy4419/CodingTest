function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'p' || s[i] === 'P') {
            pCount++;
        } else if (s[i] === 'y' || s[i] === 'Y') {
            yCount++;
        }
    }
    return pCount === yCount || pCount === 0 && yCount === 0 ? true : false;
}

console.log(solution("Pyy"));