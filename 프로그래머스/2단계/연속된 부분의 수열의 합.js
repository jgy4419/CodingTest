/*
    - 기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 한다.
    - 부분 수열의 합은 k 이다.
    - 합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾는다.
    - 길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾는다.
*/
function solution(sequence, k) {
    let answer = [];
    let [startIndex, lastIndex] = [0, 0];
    let shortArr = [];
    let sum = 0;
    for(let i = 0; i < sequence.length; i++) {
        if(sum === k) {
            shortArr.push([lastIndex, startIndex]);
            startIndex = lastIndex;
        }else if(sum > k) {
            console.log('i', i - 1);
            sum = 0;
            i = i - 1;
            startIndex = i;
        }else {
            lastIndex = i;
            sum += sequence[i];
            console.log(sum);
        }
    }
    return answer;
}

console.log('1', solution([1, 2, 3, 4, 5], 7)); // result -> [2, 3]
console.log('2', solution([1, 1, 1, 2, 3, 4, 5], 5)); // result -> [6, 6]
console.log('3', solution([2, 2, 2, 2], 6)); // result -> [0, 2]