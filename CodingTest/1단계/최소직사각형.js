function solution(sizes) {
    let answer = 0;
    let sortArr = [];
    let width = [];
    let height = [];
    for (let i = 0; i < sizes.length; i++){
        sortArr.push(sizes[i].sort((a, b) => b - a));
        width.push(sortArr[i][0]);
        height.push(sortArr[i][1]);
    }
    return answer = Math.max(...width) * Math.max(...height);
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));