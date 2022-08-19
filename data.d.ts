declare class User {
    name: string;
    private familyName;
    constructor(a: string);
    nameChangeFunc(ch: any): void;
}
declare let user1: User;
