// 누구나 겨울이 오면, 밤의 공원

function func<T extends number>(x: T) {
    return x - 1;
}

func<number>(100);