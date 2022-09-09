function solution(n, arr1, arr2) {
    var answer = [];
    let bitOrArr = [];
    let changeArr = [];
    for (let i = 0; i < n; i++){
        // arr1이랑 arr2를 각각 or연산한 값ㅇ르 bitOrArr에 넣어주기
        bitOrArr.push(arr1[i] | arr2[i]);
        // or한 값을 2진법 + 남는자리 0 으로 해서 changeArr에 넣어주기 + 1은 #으로 바꾸는 작업까지
        changeArr.push(bitOrArr[i].toString(2).padStart(n, '0').replace(/1/g, '#'));
        // 바뀐 문자열에서 0을 빈 공백으로 바꿔줘서 answer 배열에 넣어주기
        answer.push(changeArr[i].replace(/0/g, ' '));   
    }
    return answer;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);