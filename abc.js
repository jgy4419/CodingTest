function solution(quiz) {
    return quiz.map(q => {
        const [formula, answer] = q.split('=');
        return eval(formula) === +answer ? 'O' : 'X';
    });
}

console.log(solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));