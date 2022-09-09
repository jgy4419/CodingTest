declare type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
declare type newType = TypeChanger<Car>;
declare let car: newType;
