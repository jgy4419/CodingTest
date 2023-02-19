// 카드뭉치
function solution(cards1, cards2, goal) {
    for (let i = 0; i < goal.length; i++) {
      if (goal[i] === cards1[0]) {
        cards1.shift();
        continue;
      }
      if (goal[i] === cards2[0]) {
        cards2.shift();
        continue;
      }
      return 'No';
    }
    return 'Yes';
  }
  
  function solution(cards1, cards2, goal) {
    let [count, cards1Index, cards2Index, state] = [0, 0, 0, 1];
    for (let i = 0; i < goal.length; i++) { 
      if (state === 1) {
        if (cards1[cards1Index] === goal[i]) {
          cards1Index++;
          count++;
        } else {
          if (cards2[cards2Index] === goal[i]) {
            cards2Index++;
            count++;
            state = 2;
          } else {
            return 'No';
          }
        }
      } else {
        if (cards2[cards2Index] === goal[i]) {
          cards2Index++;
          count++;
        }else {
          if (cards1[cards1Index] === goal[i]) {
            cards1Index++;
            count++;
            state = 1;
          } else {
            return 'No';
          }
        }
      }
    }
    return 'Yes';
  }
  
  console.log(solution(["a", "apple", "is"], ["a", "apple"], ["a", "apple", "is", "a", "apple"]));