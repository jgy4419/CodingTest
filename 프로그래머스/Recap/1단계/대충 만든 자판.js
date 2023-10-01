function solution(keymap, targets) {
    let answer = 0;
    let indexArr = [];
    // for(let i = 0; i < keymap.length; i++) {
    //     console.log('keymap', keymap[i]);
    //     for(let j = 0; j < targets.length; j++) {
    //         console.log('target', targets[j][i])
    //         indexArr.push(keymap[i].indexOf(targets[j][i]) + 1);
    //         // if()
    //     }
    //     console.log('찾은 배열의 개수', indexArr);
    //     if(Math.min(...indexArr) !== 0)
    //         answer += Math.min(...indexArr);
    //     indexArr = [];
    // }
    return answer === 0 ? -1 : answer;
}

// function 

console.log(solution(["ABACD", "BCEFD"], ["ABCD","ZABB"])); // [9, 4]
// console.log(solution(["AA"], ["B"])); // [-1]