"use strict";
function helloArray(message) {
    return message[1];
}
console.log(helloArray(['안녕', '하시렵니까?']));
function helloTuple(message) {
    return message[1];
}
console.log(helloTuple(['hello', 'world']));
console.log(helloTuple(['hello', 5]));
// 리턴 값으로 배열 받기
function helloArrays(message) {
    let array = [];
    for (let i = 0; i < message.length; i++) {
        array.push(message[i]);
    }
    return array;
}
console.log(helloArrays(['hello', 'world']));
console.log(helloArrays(['hello', 20]));
