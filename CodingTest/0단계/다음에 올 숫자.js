// 등차수열 : 첫째항에 일정한 수를 더해서 얻은 항으로 이루어진 수열이라면 
// 등비수열은 첫째항에 일정한 수를 곱해서 얻은 항으로 이루어진 수열이다.

function solution(common) {
    const cal = common[1] - common[0] === common[2] - common[1];
    // common[1] % common[0] 했을 때 0이 나오면 등비 아니면 등차
    if (cal) {
        return common[common.length - 1] + (common[1] - common[0]);
    } else {
        return common[common.length - 1] * (common[1] / common[0]);
    }
}

console.log(solution([1, 2, 3, 4]));