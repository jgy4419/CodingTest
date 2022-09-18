function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // 특정 날짜가 무슨요일인지 알 수 있는 코드
    return week[new Date(`2016-${a}-${b}`).getDay()];
}
console.log(solution(5, 24));