/* 
    주어진 모든 숫자가 + 연산과 - 연산을 하는 경우를 탐색해 타겟 숫자가 나오는 횟수를 카운트하기.
    경우의 수를 고려해 보면 숫자 n개는 각각 +와 -가 될 수 있는 두가지 경우의 수를 가지고 있고
    해당 경우의 수는 전체 숫자에 대해 동시에 발생하므로 *2*2*....n, 총 2^n번의 탐색이 일어난다.

    DFS 알고리즘을 이용하면 전체 숫자가 +, -일 모든 경우의 수를 탐색할 수 있다.
*/

/* 
    JS에서는 재귀 함수를 이용해 DFS를 구현할 수 있다. 각각 노드의 자식 노드를 탐색하는 함수를 스택에 추가한 뒤,
    더 이상 자식 노드가 없을 때 마지막에 추가된 자식 노드 먼저 실행 후 스택에서 제거하는 후입선출(LIFO) 방식이 이용된다.
    
    위 프로그래머스 문제에서 각 노드(숫자)는 가음 인덱스의 숫자가 (+)인 경우와 (-)인 경우 두 가지의 자식 노드를 가지고 있고,
    DFS 방법에 따라 모든 숫자가 +인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 -인 경우를 탐색한다.
*/


// +인 경우, -인 경우인 두 가지의 자식 노드를 가지고 있다.
// function solution(numbers, target){
//     let answer = 0;

//     DFS(0, 0, 3);

//     function DFS(index, sum, test) {
//         console.log(index, sum, test);
//         if(index === numbers.length) {
//             if(sum === target) {
//                 answer++;
//             }
//             return;
//         }
//         // index가 numbers.length 까지 아래 함수가 실행 되고
//         DFS(index + 1, sum + numbers[index], 1);
//         // index가 number.length와 같아지면, 여기 함수 실행.
//         DFS(index + 1, sum - numbers[index], 2);
//     }
//     return answer;
// }

function solution(numbers, target){
    let answer = 0;

    DFS(0, 0, 3);

    function DFS(index, sum, test) {
        console.log(index, sum, test);
        if(index === numbers.length) {
            // if(sum === target) {
            //     answer++;
            // }
            return;
        }
        // index가 numbers.length 까지 아래 함수가 실행 되고
        DFS(index + 1, sum + numbers[index], 1);
        // index가 number.length와 같아지면, 여기 함수 실행.
        DFS(index + 1, sum - numbers[index], 2);
    }
    return answer;
}

  const arr = [1, 1, 1, 1];
  const target = 4;

console.log(solution(arr, target)); // res 5


// function solution(numbers, target) {
//     let answer = 0;
//     const length = numbers.length;
//     function DFS(index, sum) {
//         console.log('index: ', index, 'sum', sum);
//         if (index === length) {
//             if (sum === target) {
//                 answer++;
//             }
//         } else {
//             console.log(DFS(index + 1, sum + numbers[index]), 1);
//             console.log('+는 지나감.')
//             console.log(DFS(index + 1, sum - numbers[index]), 2);
//         }
//     }
//     DFS(0, 0);
//     return answer;
// }