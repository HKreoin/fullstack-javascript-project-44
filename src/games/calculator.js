import check from '../index.js';

const calculate = (num1, num2, operator) => {
    const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    };
    return operations[operator]?.(num1, num2);
};


export default (name) => {
    const mainQuestion = 'What is the result of the expression?';
    console.log(mainQuestion);
    let correct = true;
    const questionsCount = 3;
    let i = 0;
    while (correct && i < questionsCount) {
        const number1 = Math.round(Math.random() * 100);
        const number2 = Math.round(Math.random() * 100);
        const operator = ['+', '-', '*'][Math.round(Math.random() * 2)];
        const correctAnswer = calculate(number1, number2, operator);
        const qst = `${number1} ${operator} ${number2}`; 
        i += 1;
        correct = check(name, qst, correctAnswer, i);
    }
};
