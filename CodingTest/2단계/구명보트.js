function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length;
    people = people.sort((a, b) => b - a);
    while (left <= right) {
        if ((people[left] + people[right]) > limit) {
            left++;
        }
        right--;
        answer++;
    }
    return answer;
}

console.log(solution([70, 50, 80, 50], 100));

// function solution(people, limit) {
//     var answer = 0;
//     const sortedPeople = people.sort((a, b) => a - b);
//     let lInd = 0;
//     let rInd = people.length - 1;
//     while ( lInd <= rInd ) {
//         if ( sortedPeople[lInd] + sortedPeople[rInd] <= limit ) {
//             lInd++;
//         }
//         rInd--;
//         answer += 1;
//     }
//     return answer;
// }