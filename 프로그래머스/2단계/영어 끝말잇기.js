/* 
    1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말한다.
    2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작.
    3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 된다.
    4. 이전에 등장했던 단어는 사용할 수 없다.
    5. 한 글자인 단어는 인정되지 않는다.
    
    - 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와
    그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수 작성하기.
    - 탈락자가 발생하지 않으면 [0, 0] 반환하기.
*/
function solution(n, words) {
    let answer = [0, 0];
    let personCount = 1; // 어떤 사람이 걸렸는지?
    let personArr = 1; // 반복 수
    let lastchar = words[0][words[0].length - 1];;
    let passingWord = [words[0]];
    for (let i = 1; i < words.length; i++) {
        if (personCount === n) {
            personCount = 1;
            personArr++;
        } else {
            personCount++;
        }
        if (passingWord.includes(words[i]) || lastchar !== words[i][0]) { 
            answer[0] = personCount;
            answer[1] = personArr;
            break;
        }
        lastchar = words[i][words[i].length - 1];
        passingWord.push(words[i]);
    }
    return answer;
}


// result => [3, 3]
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
// result => [0, 0]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
// result => [1, 3]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));

// 다른 사람의 풀이
