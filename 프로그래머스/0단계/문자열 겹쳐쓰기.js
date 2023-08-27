function solution(my_string, overwrite_string, s) {
    let sliceCount = my_string.slice(overwrite_string.length + s - my_string.length);
    return my_string.slice(0, s) + overwrite_string + sliceCount;
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // HelloWorld