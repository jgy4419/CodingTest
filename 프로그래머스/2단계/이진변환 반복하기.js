function solution(s) {
    // [반복한 횟수, 제거된 0의 개수]
    let [arrCount, zeroCount] = [0, 0];
    while (true) {
        if (String(s) === '1') break;
        zeroCount += String(s).split('0').length - 1 // 제거한 0의 개수
        s = [...String(s).split('0')].join('').length; // 0을 제거한 1의 개수
        arrCount++;
        s = s.toString(2)
    }
    return [arrCount, zeroCount];
}