function solution(s) {
    return s.split('').sort().reverse().join().replace(/,/g, '');
}

console.log(solution("Zbcdefg"));