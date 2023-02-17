function solution(arr) {
    if (arr.length === 0) return arr[0];
    let loopState = false;
    let maxNum = Math.max(...arr);
    let [num, j] = [0, 1];
    let count = 0;
    while (loopState === false) {
      for (let i = 0; i < arr.length; i++) {
        num = maxNum * j;
        if (num % arr[i] === 0) {
          count++;
        } else {
          break;
        }
        if (count === arr.length) loopState = true;
      }
      count = 0;
      j++;
    }
    return num;
  }
  console.log('bb', solution([14, 13]));
  console.log(solution([2, 6, 8, 14]));
  console.log(solution([1, 2, 3]));
  console.log(solution([12, 32, 45, 67, 72]));
  console.log(solution([5,10,15,20,25]));
  console.log(solution([1,10,100,1000,5000,3,9999]));
  console.log(solution([1,2,3,4,5,6,7,8,9,10]));