function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
    function DFS(index, sum) {
        console.log('index: ', index, 'sum', sum);
        if (index === length) {
            if (sum === target) {
                answer++;
            }
        } else {
            console.log(DFS(index + 1, sum + numbers[index]), 1);
            console.log('+는 지나감.')
            console.log(DFS(index + 1, sum - numbers[index]), 2);
        }
    }
    DFS(0, 0);
    return answer;
}

  const arr = [4, 1, 2, 1];
  const target = 4;

console.log(solution(arr, target)); // res 5