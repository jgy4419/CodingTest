function solution2(n) {
    var answer = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++){
      for (let j = i; j <= n; j++){
        console.log('j', j);
        sum += j;
        if (sum === 15) {
          answer += 1;
          console.log('answer', answer);
          break;;
        }
        if (sum > 15) {
          break;
        }
      }
      sum = 0;
    }
    return answer;
  }
  
  console.log(solution(15));
  
  // 다른 사람 풀이
  function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++){
      let sum = 0;
      for (let j = i; j <= n; j++){
        sum += j;
        if (sum >= n) {
          if (sum === n) answer++;
          break;
        }
      }
    }
    return answer;
  }
  
  console.log(solution(15));