function solution(score) {
    const avgs = score.map(([a, b]) => (a + b) / 2);
    const answer = Array.from( {length: avgs.length }, () => 1);
    
    for (let i = 0; i < avgs.length; i++ ) {
      for (let j = 0; j < avgs.length; j++) {
        if (avgs[j] > avgs[i]) answer[i]++;
      }
    }
    return answer;
  }
console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]])); // result => [1, 2, 4, 3]
// console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])); // result => [4, 4, 6, 2, 2, 1, 7] 