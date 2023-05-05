// 숫자의 합
function solution(count, num) {
    let numSplit = String(num).split('');
    let sum = 0;
    for(let i = 0; i < count; i++) { 
        sum += Number(numSplit[i]);
    }
    return sum;
}

console.log(solution(5, 54321));

// 믄지얄 빈복
function solution(count, str) {
    let answer = '';
    for(let i = 0 ; i < str.length; i++) { 
        for(let j = 0; j < count; j++) {
            answer += str[i];
        }
    }
    return answer;
}

console.log(solution(5, '/HTP'));

// 상수
function solution(num1, num2) {
    num1 = [...num1].reverse().join('');
    num2 = [...num2].reverse().join('');
    return Math.max(Number(num1), Number(num2));
}

console.log(solution('734', '893'));

// 그룹 단어 체커
function solution(data) {
    let count = 0;
    for(let i = 0; i < data.length; i++) {
        if(check(data[i])) count++;
    }
    return count;
}

function check(data){
    let setData = new Set(data[0]);
    for(let i = 0; i < data.length - 1; i++) {
        // 오른쪽 단어와 다르다면?
        if(data[i] != data[i + 1]) {
            // 이미 등장한 적 있는 알파벳이면?
            if(setData.has(data[i + 1])) {
                return false;
            } else {
                setData.add(data[i + 1])
            }
        }
    }
    return true;
}

console.log(solution([
    'happay',
    'neenw',
    'year'
]))

// 단어의 개수
function solution(str) {
    let data = str.trim().split(" ");
    if(data === "") return 0;
    else return data.length;
}

console.log(solution('The Curious Case of Benjamin Button'));