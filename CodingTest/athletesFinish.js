// function solution(participant, completion) {
//     var answer = '';
//     answer = participant.filter(arr => {
        
//         if (!completion.includes(arr)) {
//             return arr;
//         }
//     })
//     return answer.join();
// }

function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++){
        if (participant[i] === participant[i - 1]) {
            answer = participant[i];
            break;
        }
        if (participant[i] !== completion[i]) {
            answer = participant[i];
        }
    }
    return answer;
}
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],  ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));