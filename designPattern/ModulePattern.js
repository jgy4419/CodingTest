// Module pattern (모듈 패턴)

const bookModule = (function () {
    // private
    let title = 'JavaScript';
    let price = 15;
    // public
    return {
        printTitle: function () {
            console.log(title);
        }
    }
})();

console.log(bookModule.title); // undefined
bookModule.printTitle(); // JavaScript