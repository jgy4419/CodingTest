/* 
    Command Pattern (명령 패턴) 
    여러 명령들을 추상화해서 클래스로 정의하고, Object로 만들어서 사용하는 패턴

    (개인적으로 난이도가 조금 있으므로 다시 보기.)
*/

function Command(operation) {
    this.operation = operation;
}

Command.prototype.execute = function () {
    this.operation.execute(); // 들어온 함수(클래스)의 execute 실행.
}

function ProcessCreditCardPayment() {
    return {
        execute: function(){
            console.log('Credit Card');
        }       
    }
}

function ProcessPayPalPayment() {
    return {
        execute: function () {
            console.log('PayPal')
        }
    }
}

function ProcessStripPayment() {
    return {
        execute: function () {
            console.log('Strip');
        }
    };
}

function CreditCardCommand() {
    return new Command(new ProcessCreditCardPayment());
}

function PayPalCommand() {
    return new Command(new ProcessPayPalPayment());
}

function StripeCommand() {
    return new Command(new ProcessStripPayment());
}

function PaymentSystem() {
    let paymentCommand;
    return {
        setPaymentCommand: function (command) {
            paymentCommand = command;
        },
        excuteCommand: function () {
            paymentCommand.execute();
        }
    }
}

let payment = new PaymentSystem();
payment.setPaymentCommand(new CreditCardCommand());
payment.excuteCommand(); // 결과 : Credit Card