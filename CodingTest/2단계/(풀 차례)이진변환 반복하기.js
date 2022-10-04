function solution(x) {
    let answer = [];
    // 이진 반복한 횟수 
    let arrCount = 1;
    // x의 모든 0 제거한 길이 (1의 개수)
    let filter_1 = x.split('').filter(n => { return n === '1' }).length;
    // 제거한 0 개수 더하기
    let filter_0 = x.split('').filter(n => { return n === '0' }).length;
    console.log(filter_1, filter_0)
    // filter_1의 길이를 2진법으로 변환시켜주고 
    // -> 2진법으로 변환한 값에서 0의 개수는 filter_0에 추가로 더하고, 1의 개수를 filter_1에 넣기

    while (true) {
        let changeNum = 0;
        // filter_0에는 filter_1에서 0의 개수를 추가로 더해주고,
        filter_0 += filter_1.toString(2).split('').filter(e => { return e === '0' }).length;
        // filter_1은 filter_1에서 1만 뽑아와서 넣어줌.
        filter_1 = changeNum.toString(2).split('').filter(e => { return e === '1' }).length;
        changeNum = filter_1.toString(2).split('').filter(e => { return e === '1' });
        console.log('arr', filter_0, filter_1);
        arrCount++;
        if (filter_1.toString(2).split('').filter(n => { return n === '1' }).length === 1) break;
    }
    console.log(filter_0, arrCount);


    // while (true) {
    //     // 0을 제거한 값의 길이를 2진수로 변경시켜주기. (2진 변경 후 0을 개수를 추가로 더해줌)
    //     filter_0 += filter_1.toString(2).split('').filter(n => { return n === '1' }).length;
    //     filter_1 = filter_1.toString(2).split('').filter(n => { return n === '0' })
    //     arrCount++;
    //     if (filter_1.length === 1) break;
    //     console.log('0', filter_0);
    //     console.log('1', filter_1);
    // }
    // console.log(filter_0, arrCount);
    // 총 제거한 0의 개수, 이진 반복한 count 값 배열로 반환해주기

    return answer;
}

console.log(solution("1111111"));