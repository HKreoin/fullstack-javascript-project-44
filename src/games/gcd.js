import check from '../index.js';

const findGcd = (num1, num2) => {
    let nod = 1;
    let i = num1 < num2 ? num1 : num2;
    for (i; i > 1; i -= 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            nod = i;
            break;
        }
    }
    return nod;
};

export default (name) => {
    const mainQuestion = 'Find the greatest common divisor of given numbers.';
    console.log(mainQuestion);
    let correct = true;
    const questionsCount = 3;
    let i = 0;
    while (correct && i < questionsCount) {
        const number1 = Math.round(Math.random() * 99) + 1;
        const number2 = Math.round(Math.random() * 99) + 1;
        const correctAnswer = findGcd(number1, number2);
        const qst = `${number1} ${number2}`; 
        i += 1;
        correct = check(name, qst, correctAnswer, i);
    }
};