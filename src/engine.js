import { question } from 'readline-sync';

const check = (qst, correctAnswer) => {
    console.log(`Question: ${qst}`);
    const answer = question('Your answer: ');
    return answer === correctAnswer;
}

const message = (correct, name, answer, correctAnswer) => {
    if (correct) {
        console.log("Correct!");
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        console.log(`Let's try again, ${name}!`);
    }
};

export { check, message};