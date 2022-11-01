"use strict";
let userA = {
    name: 'Neo',
    age: 85,
    isValid: true
};
let userB = ['Evan', 36, false];
function someFunc(arg) {
    switch (arg) {
        case 's':
            return arg.toString(); // string
        case 'n':
            return parseInt(arg); // number
        default:
            return true; // boolean
    }
}
console.log(someFunc('s'));
