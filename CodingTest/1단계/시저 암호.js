function solution(s, n) {
    return s.split("").map(value => {
        if (value === " ") return value;
        // value를 대문자료 변화시킨 값에 n을 더한 값이 90을 넘어가면 Z를 넘어가는 값이라 처음 A로 돌아가기 위해
        // 아스키코드 값에 +4한 값에 -26을 해준 값을 문자열로 변화시켜서 리턴해준다.
        return value.toUpperCase().charCodeAt() + n > 90
            ? String.fromCharCode(value.charCodeAt() + n - 26)
            // 그렇지 않을때는 주어진 값의 아스키코드값에 +4한 값을 다시 문자열로 변화시켜서 리턴해준다.
            : String.fromCharCode(value.charCodeAt() + n)
    }).join("");
}
console.log(solution("Z B", 4));
