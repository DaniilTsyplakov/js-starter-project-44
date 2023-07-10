#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const isEven = (number) => number % 2 === 0;
const playBrainEven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'Yes' : 'No';
    if (userAnswer === correctAnswer) {
      console.log('Correct');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playBrainEven();
