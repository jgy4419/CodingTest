// function digitCount(arr) {
//     const maxLength = String(Math.max(...arr));
//     return maxLength.length
// }

function getDigit(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    // 1의 자릿수가 있을 것을 대비 (-Infinity가 나오지 않도록!)
    if (num === 0) return 1;
    // log10은 밑은 10인 로그이다. 
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for(let i = 0; i < nums.length; i++){
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
    return maxDigits;
}

// 기수 정렬
function radixSort(nums) {
    // 큰 수에 자릿수가 얼마나 되는지?
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    // maxDigitCount 값 만큼 반복을 실행
    for (let k = 0; k < maxDigitCount; k++) {
        // 버킷 만들기 (빈 배열 10개 만들기)
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        // 각 버킷마다 자릿수 버킷에 루프를 수행하고 해당 버킷에 있는 모든 값에 루프하여 nums 또는 새 배열에 넣을 수 있다.
        nums = [].concat(...digitBuckets);
    } 
    /*
        [].concat([[1], [2], [3]]); => [Array(1), Array(1), Array(1)] 즉, 0: [1], 1: [2], 2: [3]
        [].concat(...[[1], [2], [3]]); => [1, 2, 3]
    */
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
