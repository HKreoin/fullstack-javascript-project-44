import { question } from 'readline-sync';

const check = (qst, correctAnswer) => {
    console.log(`Question: ${qst}`);
    const answer = question('Your answer: ');
    return answer == correctAnswer;
}

const message = (correct, name, answer, correctAnswer, end) => {
    if (correct) {
        console.log("Correct!");
        if (end === 3) {
            console.log(`Congratulations, ${name}!`);
        }
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        console.log(`Let's try again, ${name}!`);
    }
};

export { check, message};