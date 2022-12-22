function solution(p) {
    let answer = '';
    let [x, n] = p.split('+').reduce(([a, b], s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x', '') || 1), b]
        } 
        return [a, b + Number(s)];
    }, [0, 0]);
    if (!x && !n) return '0';
    if (!x) return c.toString();
    x = `${x === 1 ? '' : x}x`;
    if (!n) return x;
    
    return `${x} + ${n}`;
}

console.log(solution("3x + 7 + 5x + x"));