function solution(nums) {
    let leng = nums.length / 2;
    const set = new Set(nums);
    return ([...set].length > leng) ? leng : [...set].length;
}
console.log(solution([3, 3, 3, 2, 2, 2]));