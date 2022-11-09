console.log(Array.from({ length: 3, 0: 'a', 1: 'b' }));
console.log(Array.from('Hello'));

const arr = [3, 2, 5, 2, 4];
let result = arr.shift();
console.log(result);

console.log(arr);

const arr2 = [1, 2, 3];
console.log(arr2.slice(0, 2));

const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequences(5));

const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
]

function compare(key) {
    return (a, b) => a[key] > b[key] ? true : -1; 
}

console.log('id 기준', todos.sort(compare('id')));
console.log(todos);

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }
    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['tranition', 'user-select']));

[5, 10, 15].some(item => item > 10);

const arr3 = ['hello', 'world'];
console.log(arr3.map(x => x.split('')));
console.log(arr3.flatMap(x => x.split('')));

// reduce
const reduceArr = [1, 2, 3, 4, 5];
const result4 = reduceArr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result4);

// 주어지는 배열에서 음수와 양수의 개수를 카운트해서 출력하는 경우
const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result2 = numbers.reduce((acc, cur, idx) => {
    console.log('acc', acc);
    // if (cur < 0) {
    //     acc[0]++;
    // } else if (cur > 0) {
    //     acc[1]++;
    // }
    return acc;
}, [0, 0]);
console.log(result2);