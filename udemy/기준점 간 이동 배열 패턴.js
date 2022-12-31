// solution1 : 중첩 반복문 사용
function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    // 양수로만 작업을 하지 않는 한 0에서 시작하는 것은 완전히 도움이 되지 않기 때문에 -Infinity로 설정.
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
        console.log(temp, max);
    }
    return max;
}

// solution2 : 슬라이딩 윈도우 접근법 (시간 복잡도 => O(N) 선형 복잡도)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    // 처음 인자로 들어온 합계만큼 더한 값을 미리 반환해주기.
    for (let i = 0; i < num; i++){
        // maxSum이 해당 합계를 지니도록 유지하기. 
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // 위에 반복문에서 인자인 num의 개수만큼 반복을 해놨으니 반복문은 num부터 시작해주기.
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}