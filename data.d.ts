declare type strType = string;
interface GenericLogTextFn<T> {
    (text: T): T;
}
declare function logText<T>(text: T): T;
declare let myString: GenericLogTextFn<strType>;
