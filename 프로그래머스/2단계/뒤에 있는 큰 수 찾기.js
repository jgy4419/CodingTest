/* 
    - 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 한다.
    - 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수 만들기.
    - 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담는다.
*/

function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    const stack = [];
    for(let i = 0; i < numbers.length; i++) {
        // while(stack && numbers[stack.at(-1)] < numbers[i]) {
        // stack이 존재하고, 존재하는 인덱스 순서의 숫자가 현재 수 보다 낮을 경우
        while(stack && numbers[stack[stack.length - 1]] < numbers[i]) {
            // answer의 인덱스 위치에 돌아온 수를 넣어준다.
            // 같은 값이 나오면 계속 pop 해주면서 answer 배열에 값이 채워진다. 우선 뒤에부터 하나씩 값이 채워짐.
            console.log('pop', numbers[i]);
            answer[stack.pop()] = numbers[i];
            console.log('answer', answer);
        }
        // 값이 같은 경우 계속 stack에 i 증가. (후에 큰 값이 나오면 pop으로 인해 값이 채워짐.)
        // 현재 인덱스 넣어주기.
        stack.push(i);
        console.log('else', stack);
    }
    return answer;
}

// function solution(numbers) {
//     var answer = [];
//     for(let i = 1; i <= numbers.length; i++) {
//         if(numbers.length === 0) break;
//         if(numbers[0] < numbers[i]) {
//             answer.push(numbers[i]);
//             numbers.shift();
//             i = 0;
//         }else {
//             if(i === numbers.length){
//                 answer.push(-1);
//                 numbers.shift();   
//                 i = 0;
//             }
//             continue;
//         }
//     }
//     return answer;
// }

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));