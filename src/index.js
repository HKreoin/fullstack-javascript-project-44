import { question } from 'readline-sync';

export default (name, qst, correctAnswer, end) => {
  console.log(`Question: ${qst}`);
  const answer = question('Your answer: ');
  const correct = answer === String(correctAnswer);
  if (correct) {
    console.log('Correct!');
    if (end === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return correct;
};
