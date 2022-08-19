// O(1)인 경우 : Array.prototype.pop 같이 특정 배열의 위치의 녀석을 가져오는 경우.
// let dummyArray = [1, 2, 3, 4];
// // console.log(dummyArray.pop());
// const getLast = items => items[items.length-1];

// console.log(getLast(dummyArray));

/* 
    O(N) : Linear-Time-Algorithm으로 불리는 케이스들. N개의 요소에 대해 선형적으로 순회하는
    메소드들이 이에 해당한다. 최악의 경우는 N개를 다 순회해야되는 것.
    대표적인 예로 Array.prototype.indexOf 메서드가 있다.
*/

// indexOf를 간단하게 풀어보면
// Array.prototype.indedxOf = function(element) {
//     for(let i = 0, count = this.length; x < count; x++){
//         if(this[x] === element){
//             return x;
//         }
//     }
//     return -1;
// }

// 대상 배열의 길이만큼 순회하면서 인자로 들어온 element와 순회녀석을 비교. 
// 최악인 경우, 찾으려는 녀석이 배열의 마지막에 있다면 array 길이만큼 탐색해야되는 불상사가 일어난다.

/* 
    O(N^2) : 대표적으로 2중 반복문을 탐색하는 경우가 있다.
    map 메서드에서 find를 호출한 케이스도 여기에 해당한다.
*/

// const buildMatrix = n => {
//     let matrix = new Array(n);
//     for(let i = 0; i < n; i++) {
//         let cols = new Array(n);
//         matrix[i] = cols;
//         for(let j = 0; j < n; j++) {
//             cols[j] = j;
//         }
//     }
//     return matrix;
// }

// console.log(buildMatrix(5));

/*
    O(logN) : Logarithmic Complexity(로그 복잡도)라고 불리는 이 복잡도는 데이터가 커지면 커질수록 효율이 극대화되는 케이스이다.
    보통 이런 효율적인 복작도를 가질려면 데이터가 정렬이 되어야되는 케이스가 많다.
    이들은 검색/정렬 알고리즘의 꽃이며 보통 대규모 컬렉션을 처리할 때 가장 효율적인 방법이다. 대표적으로 이진탐색, 퀵정렬, 병합정렬 등이 있다.
*/

/* 
    퀵 정렬 : 하나의 리스트를 피벗(중심점)을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를
            합하여 전체가 정렬된 리스트가 되거 하는 방법이다.
    - 분할 : 입력 배열을 중심을 기준으로 비균등하게 2개의 부분 배열(중간을 기준으로 왼쪽: 중심보다 작은 요소들, 오른쪽: 중심보다 큰 요소들)로 분할한다.
    - 정복 : 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출을 이용하여 다시 분할 정복 방법을 적용한다.
    - 결합 : 정렬된 부분 배열들을 하나의 배열에 합병한다.
*/
// const quikSort = list => {
//     // list의 길이가 1이면 그냥 list 값 반환 (비교할 값이 없으므로..)
//     if(list.length < 2) return list
//     // 중심점은 list[0]로 지정.
//     let pivot = list[0];
//     console.log('pivot', pivot)
//     console.log('list', list)
//     // 분할 단계
//     let left = []; // 중심점 기준 왼쪽에 정렬할 데이터들
//     let right = []; // 중심점 기준 오른쪽에 정렬할 데이터들
//     // 0은 pivot이 지정하므로 1부터 total 길이보다 작을 때 까지 1씩 증가.
//     // 정복 단계
//     for(let i = 1, total = list.length; i < total; i++){
//         // 만약 list[i]가 중심점보다 작으면 left에 데이터 삽입.
//         if(list[i] < pivot) left.push(list[i]);
//         // 중심점보다 크면 right에 삽입.
//         else right.push(list[i]);
//     }
//     // 결합단계
//     return [
//         ...quikSort(left),
//         pivot,
//         ...quikSort(right)
//     ];
// };

// console.log(quikSort([1, 2, 999, 3, 4, 56, 77, 8 ,9 ,123]));

/* 
    결과
    [
        1,  2,  3,   4,   8,
        9, 56, 77, 123, 999
    ]
*/


function O_1_algorithm(arr, index) {
    return arr[index];
}

let arr = [1, 2, 3, 4, 5];
let index = 1;
let result = O_1_algorithm(arr, index);
console.log(result);