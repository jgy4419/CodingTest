function insertSort(arr){
	for(let i = 1; i < arr.length; i++){
		let currentVal = arr[i];
		// j가 i-1에서 시작하며, j가 0일 때 진행하며, 그리고 j 배열이 현재 값보다 클 때 계속되는 반복문.
		// 0이 아니라 20이 마지막 항목이면 j 배열을 거쳐 76이 주어진다. (값이 더 크기 때문)
        // j를 전역으로 선언해서 스코프 밖에서도 사용 가능하게 해주기.
		for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
			arr[j+1] = arr[j];
		}
		arr[j + 1] = currentVal;
    }
    return arr;
}
console.log(insertSort([2, 1, 9, 76, 4]));