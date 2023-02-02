declare function func1(a: string | undefined): void;
declare type Fish = {
    swim: string;
};
declare type Bird = {
    fly: string;
};
declare function func2(animal: Fish | Bird): void;
declare let date: Date;
declare type funcType = (x: string) => string;
declare const cutZero: funcType;
