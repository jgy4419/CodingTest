function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    // let [str1, str2] = ['', ''];
    // str1 = my_string[num1]; str2 = my_string[num2];
    // my_string[num2] = str1; my_string[num1] = str2;
    // 아래처럼 코드 작성하면 굳이 변수 생성을 하지 않아도 된다.
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

console.log(solution("hello", 1, 2));