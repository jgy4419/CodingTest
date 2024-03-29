/* 
    탐욕 알고리즘(Greedy Algorithm)    
        - 현재 상황에서 당장 가장 좋아 보이는 상황만을 선택하는 알고리즘.
        - 흔히 그리디 알고리즘, 혹은 탐욕법이라고 불리기도 한다.
        - 최적의 해를 구하기 위한 근사적인 방법으로 사용될 때가 많다.
    탐욕 알고리즘 예시 
        - 루트에서 출발해 단말 노드까지 가는 경우 생각해보기.
        - 거쳐가는 노드의 합이 가장 큰 경우는?
    탐욕 알고리즘과 근사 해
        - 현실 세계의 많은 상황에서는, 단순한 탐욕 알고리즘으로는 최적의 해를 놓칠 수 이싿.
        - 하지만, 최적의 해에 가까운 답을 뱉는 것을 고려하면 현실에서의 다양한 프로그램에서 "근사해"를 구하는 목적으로 사용되곤 한다.

    코딩 테스트에서의 탐욕 알고리즘
        - 일반적인 채점 시스템은 시험 참가자의 코드 결과가 정해진 결과와 같은지 확인.
        - 일반적으로 탐욕 알고리즘 유형에서는, 탐욕 방법으로 최적의 해가 보장되는 문제가 출제.

    탐욕 알고리즘의 접근 방법
        1. 방법 고안하기 : 현재 상황에서 어떤 것을 선택할지 알고리즘을 고안.
        2. 정당성 확인하기 : 자신이 고안한 알고리즘이 항상 최적의 해를 보장하는지 확인한다. (증명 단계)
    
    거스름돈 문제
        - 카운터에 500원, 100원, 50원, 10원짜리 동전이 무수히 많이 존재.
        - 손님에게 6,480원을 거슬러 주어야 할 때, 동전 개수의 최솟 값은?
        - 가장 큰 화페 단위부터 거슬러주는 것.

    거스름 돈 문제의 해법 정당성 분석
        - 단순히 큰 화폐 단위부터 선택해 최적의 해를 찾을 수 있는 이유?
        - 그 이유는, 각 화폐 단위가 "배수" 관계에 속하기 때문.
*/


/* 
    탐욕법 알고리즘 (그리디 문제풀이 1)
*/

/* 
    ATM
      - 줄을 서 있는 사람이 돈을 인출하는데 걸리는 시간 Pi 가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램 작성.

*/

// function solution(personCount, time) {
//     let answer = 0;
//     let sum = 0;
//     let sortedPerson = time.sort((a, b) => a - b);
//     let personSum = []

//     for(let i = 0; i < sortedPerson.length; i++) {
//         sum += sortedPerson[i];
//         answer += sum;
//     }
//     return answer;
// }  

// console.log(solution(5, [3, 1, 4, 3, 2])); // 32

/* 
    잃어버린 괄호
      - 첫째 줄에 식이 주어진다. 식은 '0~9', + 그리고 - 만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다.
      - 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 만ㄴㅎ이 연속되는 숫자는 없다.
      - 수는 0으로 시작할 수 있다. 입력으로 주어지는 식의 길이는 50보다 작거나 같다.
    solution
        - 덧셈과 뺄셈 연산자로만 구성된 수식이 있을 때, 괄호를 적절히 넣어 값을 최소화하기.
        - 뺄셈 연산자를 기준으로 최대한 많은 수를 묶는다.
*/

// function solution(calculation) {
//     let answer = 0;
//     // 뺄셈 연산자를 기준으로 나누어 여러 그룹 만들기
//     let groups = calculation.split("-");
//     for(let i = 0; i < groups.length; i++) {
//         // 각 그룹 내부에서 덧셈(+) 연신 적용.
//         let cur = groups[i].split("+").reduce((a, b) => Number(a) + Number(b));
//         if(i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈 (+)
//         else answer -= cur; // 두 번째 그룹부터 뺄셈 (-)
//     }

//     return answer;
// }

// console.log(solution("55-50+40")); // -35
// console.log(solution("90+30-20+50-30+60-70+30+20")); // -160


// 설탕 배달
// 상든이가 배달하는 봉지의 최소 개수를 출력하기. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1 출력.
// 봉지는 3kg, 5kg 두 가지가 있다.
// function solution(n) {
//     let cnt = 0;
//     let flag = false;

//     // 더 이상 반복할 수 없을 때까지 반복
//     while(n >= 0) {
//         if(n == 0 || n % 5 == 0) {
//             cnt += parseInt(n / 5);
//             flag = true;
//             break;
//         }
//         n -= 3;
//         cnt += 1;
//     }
//     return flag === false ? -1 : cnt;
// }

// console.log(solution(18)); // 4
// console.log(solution(4)); // -1

/* 
    A -> B
*/

// console.log(String(162).split('')[0])

// function solution(a, b) {
//     let flag = false; // a에서 b로 이동 가능한지에 대한 여부.
//     let result = 0;
//     while(a <= b) {
//         if(a == b) {
//             flag = true;
//             break;
//         }
//         if(b % 2 == 0) b = parseInt(b / 2);
//         else if(b % 10 == 1) b = parseInt(b / 10);
//         else break;
//         result++;
//     }
//     if(flag) return result;
//     else return -1;
// }

// console.log(solution(2, 162));
// console.log(solution(4, 42));
// console.log(solution(100, 40021));

function solution(num) {
    let answer = 0;
    let sum = 0;
    while(num >= sum) {
        answer++;
        sum += answer;
    }

    return answer - 1;
}  

console.log(solution(200)); // 19