var users;
users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lew', true]];
// Tuple은 정해진 타입의 고정된 길이 배열을 표현하지만, 이는 할당에 국한된다.
// .push()니 .splice() 등을 통해 값을 넣는 행위는 막을 수 없다.
var tuple;
tuple = ['a', 1];
tuple = ['b', 2];
// Enum
var Week;
(function (Week) {
    Week[Week["Sum"] = 0] = "Sum";
    Week[Week["Mon"] = 23] = "Mon";
    Week[Week["Tue"] = 24] = "Tue";
    Week[Week["Wed"] = 25] = "Wed";
    Week[Week["Thu"] = 26] = "Thu";
})(Week || (Week = {}));
console.log(Week.Mon);
console.log(Week.Tue);
