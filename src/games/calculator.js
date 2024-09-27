import { check, message } from "../index.js";

const calculate = (num1, num2, operator) => {
    const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    };
    return operations[operator]?.(num1, num2);
};


export default (name) => {
    const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
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
        correct = check(qst, correctAnswer);
        i += 1;
        message(correct, name, qst, correctAnswer, i);
    }
};
