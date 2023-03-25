function solution(land) {
    let answer = 0;
    let x = 0;
    for(let i = 0; i < land.length; i++){
        if(i === 0) continue;
        x = Math.max(land[i-1][1],land[i-1][2], land[i-1][3])
        land[i][0] += x
        x = Math.max(land[i-1][0],land[i-1][2], land[i-1][3])
        land[i][1] += x
        x = Math.max(land[i-1][0],land[i-1][1], land[i-1][3])
        land[i][2] += x
        x = Math.max(land[i-1][0],land[i-1][1], land[i-1][2])
        land[i][3] += x   
    }
    let row = land.length - 1;
    answer = Math.max(land[row][0], land[row][1], land[row][2], land[row][3]);
    
    return answer;
}

// 다른사람 풀이
function solution(land){
    return Math.max(...land.reduce((a, b) => {
        console.log(a, b);
        return [
            b[0] + Math.max(a[1], a[2], a[3]),
            b[1] + Math.max(a[0], a[2], a[3]),
            b[2] + Math.max(a[0], a[1], a[3]),
            b[3] + Math.max(a[0], a[1], a[2])
        ]
    }, [0, 0, 0, 0]));
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]])); // 16
 
// 다른사람 풀이
function solution(land) {
    let answer = 0;
    
    for(let i = 0; i < land.length; i++){
       for(let j = 0; j < 4; j++){
           if(i === 0){
            continue;
           } else {
               let arr = land[i-1].slice();
               console.log(arr);
               arr[j] = 0;
               land[i][j] += Math.max.apply(null, arr);
               answer = Math.max(land[i][j], answer);
           }
       }       
    }
    
    return answer;
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));
console.log(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]));