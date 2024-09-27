import { check, message } from '../index.js';
import _ from 'lodash';

const genArr = () => {
    const start = Math.round(Math.random() * 100);
    const step = Math.round(Math.random() * 9) + 1;
    const size = Math.round(Math.random() * 5) + 5;
    const end = start + size * step;
    return _.range(start, end, step);
};

export default (name) => {
    const mainQuestion = 'Find the greatest common divisor of given numbers.';
    console.log(mainQuestion);
    let correct = true;
    const questionsCount = 3;
    let i = 0;
    while (correct && i < questionsCount) {
        const array = genArr();
        const index = Math.round(Math.random() * (array.length - 1));
        const correctAnswer = array[index];
        array[index] = '..';
        const qst = array.join(' '); 
        correct = check(qst, correctAnswer);
        i += 1;
        message(correct, name, qst, correctAnswer, i);
    }
};