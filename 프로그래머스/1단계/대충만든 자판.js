// 대충 만든 자판
/* 
    - 각 targets의 item의 한 글자마다.
    - keymap item 들을 돌면서 글자가 item에서 몇 번째 index에 있는지 특정 배열에 담기. (없으면 -1)
    - 해당 배열에서 최솟값을 찾아서 더하기.
*/
function solution(keymap, targets) {
    var answer = [];
    targets.forEach(item => answer.push(func(item, keymap)));
    return answer;
}

function func(item, keymap) {
    let findMinArr = [];
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        console.log('item', item[i]);
        for (let j = 0; j < keymap.length; j++) {
            if (keymap[j].indexOf(item[i]) + 1 === 0) continue;
            findMinArr.push(keymap[j].indexOf(item[i]) + 1);
        }
        sum += Math.min(...findMinArr);
        findMinArr = [];
    }
    if(sum === Infinity) return -1;
    return sum;
}

// console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
// console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"]));  // [-1]