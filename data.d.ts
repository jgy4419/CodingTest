interface LengthCheck {
    length: number;
}
declare function func<T extends LengthCheck>(x: T): number;
