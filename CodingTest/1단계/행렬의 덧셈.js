// 내 코드..
function solution(arr1, arr2) {
    var answer = [];
    let leng = arr1.length;
    let leng2 = arr1[0].length;
    arr1 = arr1.flat(Infinity);
    arr2 = arr2.flat(Infinity);
    let res = [];
    for (let i = 0; i < arr1.length; i++){
        res.push(arr1[i] + arr2[i]);
    } 
    if (leng === 1) {
        for (let i = 0; i < leng + 1; i++){
            answer.push(res.splice(0, leng));
        }
    } else {
        for (let i = 0; i < leng; i++){
            answer.push(res.splice(0,leng2));
        }
    }
    return answer;
}

// 다른 사람 코드
function solution2(arr1, arr2) {
    var answer = [[]];
    answer = arr1.map((a, i) => {
        console.log('a', a);
        return a.map((val, idx) => {
            val += arr2[i][idx];
            console.log('val', val);
            return val;
        })
    })
    return answer;
}

console.log(solution2([[1,2, 3],[2,3, 2]], [[1,2, 4],[2,3, 2]]));