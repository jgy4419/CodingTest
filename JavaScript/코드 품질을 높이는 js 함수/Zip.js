// 어떠한 방식으로든 병합학허나 연관시켜야 하는 여러 소스의 데이터로 작업할 때 자주 사용된다.
function zip(...arrays) {
    // 몇 개의 배열을 만들어야 되는지 정해야 되기 떄문에 각 배열에 길이를 계산해 가장 개수가 많은 배열의 length를 반환.
	const maxLength = Math.max(...arrays.map(array => array.length));
	return Array.from({ length: maxLength }).map((_, i) => {
		return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
	});
}

// 좌표를 포함하는 세 배열을 정의
const xCoordinates = [1, 2, 3, 4];
const yCoordinates = [5, 6, 7, 8];
const zCoordinates = [3, 6, 1, 7];

// 각 좌표의 배열을 zip된 배열로 만들기
const points = zip(xCoordinates, yCoordinates, zCoordinates);

console.log(points); // [[1, 5, 3], [2, 6, 6], [3, 7, 1], [4, 8, 7]];