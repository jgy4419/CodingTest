var sayHello = function (hello) {
    if (Array.isArray(hello)) {
        hello.forEach(function (h) { return console.log(h); });
        return;
    }
    return console.log(hello);
};
