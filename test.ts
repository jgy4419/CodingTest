type MyType<T> =
    T extends string ? 'Str' :
    T extends number ? 'Num' :
    T extends boolean ? 'Boo' :
    T extends undefined ? 'Und' :
    T extends null ? 'Nul' : 'Obj';