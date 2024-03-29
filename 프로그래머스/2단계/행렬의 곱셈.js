// function solution(arr1, arr2) {
//     const [row, col] = [arr1.length, arr2[0].length];
//     console.log(`row ${row} col ${col}`);
//     var answer = [[]];
//     var count = 0;
//     console.log(arr1.map((value, i_index) => {
//         count = 0;
//         value.map((val, j_index) => { 
//             // console.log(val)
//             // console.log('val', val);
//             // console.log('val2', arr2[i_index][col]);
//             // console.log('res', val * arr2[i_index][j_index]);
//             count++;
//             // console.log(val * arr2[j_index]);
//         })
//     }))
//     return answer;
// }

function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let elem = 0;
            for(let k = 0; k < arr2.length; k++) {
                elem += arr1[i][k] * arr2[k][j];
            }
            result.push(elem);
        }
        answer.push(result);
    }
    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));