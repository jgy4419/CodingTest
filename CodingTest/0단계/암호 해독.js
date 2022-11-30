function solution(cipher, code) {
    return cipher.split('').filter((s, index) => {
        return (index + 1) % code === 0;
    }).join('');
}

console.log(solution("dfjardstddetckdaccccdegk", 4));