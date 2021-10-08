//This code is a replica from the tutorial but I have typed
//it all in myself and now understand all the concepts way more

//create the calculator, keys, and display variable
const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');

//Create the calculate function
const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Do something
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))

        //If a key is selected and there is no data action then this
        //key will be considered a number key
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
            console.log("number key!");
        }

        //If the acciton is "add", "subtract", "multiply", "divide" then this
        //key will be considered an operator key
        if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                calculator.dataset.firstValue = calcValue
            } else {
                calculator.dataset.firstValue = displayedNum
            }


            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log("operator key!");
        }

        //If the acciton is a "decimal" then this key will be considered the decimal key
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            }

            calculator.dataset.previousKeyType = 'decimal';
            console.log("decimal key");
        }

        //If the acciton is a "clear" then this key will be considered the clear key
        if (action === 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';

            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else {
                key.textContent = 'AC'
            }

            display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
            console.log('clear key!');
        }

        //If the acciton is an "equal" then this key will be considered the calculate key
        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            const secondValue = displayedNum;
            const operator = calculator.dataset.operator;

            if (firstValue && operator) {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue;

                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum
            }

            if (firstValue && operator && previousKeyType !== 'operator') {
                display.textContent = calculate(firstValue, operator, secondValue)
            }
            
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
            console.log('equal key!');
        }

    }
})
