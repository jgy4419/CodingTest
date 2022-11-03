"use strict";
const foo = null !== null && null !== void 0 ? null : 'Hello nullish.';
console.log(foo); // Hello nullish
const bar = false !== null && false !== void 0 ? false : true;
console.log(bar); // false
const baz = 0 !== null && 0 !== void 0 ? 0 : 12;
console.log(baz); // 0
