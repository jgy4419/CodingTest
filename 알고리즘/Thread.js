// ButtonContainer.js
function ButtonContainer(element, className) {
	var t = this;

	t.element = element ? element : t.element ? t.element : "div";
	t.className = className ? className : t.className ? t.className : "ButtonContainer";
	t._useDelayInvalidate = true;

	UIElement.call(t, t.element, t.className);
}

extend(ButtonContainer, UIElement);

ButtonContainer.prototype.createChildren = async function() {
    let t = this;

    let buttons = [
        'up', 
        'down'
    ];

    if(!t._upDownButton) {
        t._isPress = true;
        t._stack = [];
        t._number = 0;

        t._count = 0;
        
        for(let i = 0; i < buttons.length; i++) {
            t._upDownButton = new UpDownButton('button', `button ${buttons[i]}`);
            t._upDownButton.element.innerText = buttons[i];
            t.addChild(t._upDownButton);
            t._upDownButton.addEvent('click', async function() {
                buttons[i] === 'up'
                    ? t._stack.push(t._upDownButton.upClick())
                    : t._stack.push(t._upDownButton.downClick());
                t.getCount();
            })
        }
    }
}

ButtonContainer.prototype.arrNumber = function(num) {
    let t = this;
    return new Promise((resolve, reject) => {
        if(num === 'up') {
            for(let i = 1; i <= 10; i++) {
                setTimeout(() => {
                    console.log(i);
                    if(i === 10) {
                        t._isPress = true;
                        if(t._stack.length !== 0) t.getCount();
                    }
                }, i * 1000);
            }
        } else if(num === 'down') {
            for(let i = 1; i <= 10; i++) {
                setTimeout(() => {
                    console.log(10 - (i - 1), i);
                    if(i === 10) {
                        t._isPress = true;
                        if(t._stack.length !== 0) t.getCount();
                    }
                }, i * 1000);
            }
        }
        resolve('end');
    })
}

ButtonContainer.prototype.getCount = function() {
    let t = this;
    console.log('남은 stack', t._stack);
    if(t._stack.length > 0) {
        for(let i = 0; i < t._stack.length; i++) {
            if(t._isPress === true) {
                t._isPress = false;
                t._stack[i].then(async (res) => {
                    await t.arrNumber(res);
                    t._stack.shift();
                });
            }
        }
    }
}



// UpDownButton.js
UpDownButton.prototype.upClick = async function() {
    return 'up';
}

UpDownButton.prototype.downClick = async function() {
    return 'down';
}