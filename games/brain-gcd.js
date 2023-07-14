#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const playBrainGCD = () => {
  const name = greetUser();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const num1 = Math.floor(Math.random() * 100 + 1);
    const num2 = Math.floor(Math.random() * 100 + 1);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = findGCD(num1, num2).toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default playBrainGCD;
