// 키패드 문제

function solution(numbers, hand) {
    let answer = '';
    for (let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer = answer + 'L';
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer = answer + 'R'
        }else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
            // 현재 값 
            if (numbers[i] - numbers[i - 1] > numbers[i] - numbers[i - 2]) {
                answer + 'L'
            } else if(numbers[i] - numbers[i - 1] < numbers[i] - numbers[i - 2]){
                answer + 'R'
                console.log('..', answer);
            }
        }
    }

    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "right"));