declare type MyType = string;
declare type YourType = string | number | boolean;
declare type TUser = {
    name: string;
    age: number;
    isValid: boolean;
} | [string, number, boolean];
declare let userA: TUser;
declare let userB: TUser;
declare function someFunc(arg: MyType): YourType;
