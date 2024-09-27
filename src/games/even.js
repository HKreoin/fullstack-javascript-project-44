import { check, message } from "../engine.js";

const isEven = (num) => num % 2 === 0;

export default (name) => {
    const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
    console.log(mainQuestion);
    let correct = true;
    const questionsCount = 3;
    let i = 0;
    while (correct && i < questionsCount) {
        const number = Math.round(Math.random() * 100);
        const correctAnswer = isEven(number) ? 'yes' : 'no';
        correct = check(number, correctAnswer);
        message(correct, name, number, correctAnswer);
        i += 1;
    }
};
