// function solution(score) {
//     const avgs = score.map(([a, b]) => (a + b) / 2);
//     const answer = Array.from( {length: avgs.length }, () => 1);
    
//     for (let i = 0; i < avgs.length; i++ ) {
//       for (let j = 0; j < avgs.length; j++) {
//         if (avgs[j] > avgs[i]) answer[i]++;
//       }
//     }
//   return answer;
// }

function solution(score) {
  let arr = [];
  for (let i = 0; i < score.length; i++){
    arr.push((score[i][0] + score[i][1]) / 2);
  }
  let answer = Array.from(arr, (x) => 1);
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}
console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]])); // result => [1, 2, 4, 3]
// // console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])); // result => [4, 4, 6, 2, 2, 1, 7] 

// let arr = [0, 1, 4, 2, 5, 9, 6];
// let answer = Array.from({ length: arr.length }, () => 1);
// console.log(answer);

console.log(Array.from([1, 2, 3], x => 1));