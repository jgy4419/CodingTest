// 정렬 문제 풀이 1

// 세 수 정렬
function solution(arr){
	return arr.sort((a, b) => a - b);
}
console.log(solution([3, 1, 2]));

// K 번째 수
function solution(arr, k) {
    let sortArr = arr.sort((a, b) => a - b);
    return sortArr[k - 1];
}

console.log(solution([4, 1, 2, 3, 5], 2));

// 정렬 문제 풀이 2
function solution(arr) {
    arr = arr.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    });
    return arr;
}

console.log(solution([[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]));

// 단어 정렬
function solution(arr) {
    arr = [...new Set(arr)];
    let resArr = [];
    /*
        1. 길이가 짧은 것부터
        2. 길이가 같으면 사전 순으로
    */
    resArr.push(arr.sort((a, b) => {
        return a.length - b.length;
    }));
    return resArr;
}

console.log(solution(['but', 'i', 'i', 'wont', 'hesitate', 'no', 'more']));   