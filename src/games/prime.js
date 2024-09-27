import check from '../index.js';

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

export default (name) => {
    const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    console.log(mainQuestion);
    let correct = true;
    const questionsCount = 3;
    let i = 0;
    while (correct && i < questionsCount) {
        const number = Math.round(Math.random() * 100);
        const correctAnswer = isPrime(number) ? 'yes' : 'no'; 
        const qst = number;
        i += 1;
        correct = check(name, qst, correctAnswer, i);
    }
};