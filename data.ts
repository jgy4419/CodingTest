interface LengthCheck{
    length: number
}

function func<T extends LengthCheck>(x: T) {
    console.log(x);
    console.log(typeof x);
    
    return x.length;
}

func<string>('100');