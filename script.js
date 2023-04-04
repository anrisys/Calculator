const numbers = document.querySelectorAll(".number");
const calcutalorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calcutalorScreen.value = number;
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber ='0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else{
        currentNumber += number;
    }
}

// Fungsi AC
const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const equalSign = document.querySelector('.equal-sign');

const decimal = document.querySelector('.decimal');

numbers.forEach((numbers) => {
    numbers.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

const operators = document.querySelectorAll('.operator')

operators.forEach((operator) => {
    operator.addEventListener("click" , (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}


inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot
}
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

// Fungsi kalkulasi
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})