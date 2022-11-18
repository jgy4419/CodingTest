// 내가 작성한 풀이
function solution(A, B) {
    A = A.split('');
    for (let i = 0; i < A.length; i++){
        let copy = A.slice(A.length - 1, A.length);
        A.splice(A.length - 1, A.length);
        A = copy.concat(A);
        if (A.join('') === B) {
            return i + 1;
        } else {
            return -1
        }
    }
}


// 다른사람 풀이..
let solution = (a, b) => {
    return (b + b).indexOf(a)
}

console.log(solution("hello", "ohell"));