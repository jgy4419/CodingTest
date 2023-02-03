/* 
    스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수 작성하기.
*/
function solution(clothes) {
    console.log(Object.values(clothes));
    let clothingType = clothes.map(e => e[1]);
    let set = new Set(clothingType);    
    const clothingArr = Array.from(set);
    var answer = 1;
    let count = 0;
    let clothingCount = [];
    for (let i = 0; i < clothingArr.length; i++) {
        for (let j = 0; j < clothingType.length; j++){
            if (clothingArr[i] === clothingType[j]) count++;
        }
        clothingCount.push(count);
        count = 0;
    }
    for (let i = 0; i < clothingCount.length; i++) {
        answer *= (clothingCount[i] + 1);
    }
    return answer - 1;
}

// 다른 사람 풀이
// function solution(clothes) {
//     return Object.values(clothes.reduce((obj, t)=> {
//         obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//         return obj;
//     } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
// }
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));