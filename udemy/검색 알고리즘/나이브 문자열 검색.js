function solution(str1, str2) {
    let str2Count = 0;
    let count = 0;
    for (let i = 0; i < str1.length; i++){
        for (let j = 0; j < str2.length; j++){
            if (str1[i + str2Count] === str2[j]) {
                if (str2Count + 1 === str2.length) {
                    count++;
                }
                str2Count++;
                continue;
            } else {
                break;
            }
        }
        str2Count = 0;
    }
    return count;
}

console.log(solution('lorie loled', 'lo'));