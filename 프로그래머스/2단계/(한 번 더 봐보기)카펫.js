/* 
  가로 세로가 특정 값일 때 yellow brown을 구할 수 있으니,
  가로 세로 값을 하나씩 올리면서 그때의 yellow 값과 brown 값을 비교해 답을 찾기.
*/

function solution(brown, yellow) {
    let [width, height] = [0, 0];
    while(width >= height) {
      // 노란색은 (width - 2) * (height - 2) 개수랑 동일하므로 
      let y = (width - 2) * (height - 2);
      // 갈색은 width * height 한 결과에 -y를 해주면 된다.
      let b = width * height - y;
      if(y === yellow && b === brown) break;
      // 가로가 계속 늘어가 입력받은 brown 값이 나오거나 커지게 되면 그때부터 가로 값 하나씩 줄이고 세로 늘리기.
      if(y < yellow && b >= brown) {
        width--;
        height++;
        // y 값과 b값이 둘 다 작으면 가로를 계속 늘리기.
      }else width++;
    }
    return [width, height];
  }
  
  console.log(solution(10, 2)); // result => [4, 3]
  // console.log(solution(8, 1)); // result => [3, 3]
  // console.log(solution(24, 24)); // result => [24, 24]   