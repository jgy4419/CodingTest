// function solution(babbling) {
//     var answer = 0;
//     const speaking = ['aya', 'ye', 'woo', 'ma'];
//     const loopSpeaking = ['ayaaya', 'yeye', 'woowoo', 'mama'];
//     for (let i = 0; i < babbling.length; i++){
//         for (let j = 0; j < speaking.length; j++){
//             if (babbling[i].includes(loopSpeaking[j])) {
//                 break;
//             } else {
//                 if (babbling[i].includes(speaking[j])) {
//                     babbling[i] = babbling[i].replace(speaking[j], '');
//                     j = 0;
//                     if (babbling[i] === '') {
//                         answer++;
//                     }
//                 }   
//             }
//         }
//     }
//     return answer;
// }

function solution(babbling) {
    let answer = 0;
    let dup = ['ayaaya', 'yeye', 'woowoo', 'mama'];
    while (babbling.length) {
        let b = babbling.pop();
        if (dup.some(v => b.includes(v))) continue;
        b = b.replace(/aya/g,'1').replace(/ye/g,'2').replace(/woo/g,'3').replace(/ma/g,'4');
        b = b.replace(/[1234]/g, '');
        if (b.length === 0) answer++;
        console.log(b);
    }
    return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));